import { NextResponse } from "next/server";
import { CategoriesCollection } from "@/app/api/v1/category/CategoriesCollection";
import { CreatableCategory, Category, TransactionType } from "@/app/components/types";
import { ApiResponse, HTTP_STATUS } from "@/app/api/lib/types";
import { getSession } from "@auth0/nextjs-auth0";

enum MESSAGE {
  FETCH = "Categories fetched successfully",
  FETCH_ERROR = "An error occurred while fetching the categories",
  CREATION = "Category created successfully",
  CREATION_ERROR = "An error occurred while saving the categories",
  CREATION_MISSING_PARAMETERS = "Missing userId, label or type",
  INVALID_PARAMETERS = "Invalid parameters",
  DELETION = "Category deleted successfully",
  DELETION_ERROR = "An error occurred while deleting the category",
}

const areParametersValid = (newCategory: CreatableCategory) => {
  return !!(newCategory.userId && newCategory.label && newCategory.type);
};

export async function GET(req: Request, { params }: { params: Promise<{ type: TransactionType }> }) {
  try {
    const type: TransactionType = (await params).type;
    const session = await getSession();
    if (!session?.user.sid) throw new Error("No session found");
    const categoriesCollection: CategoriesCollection = new CategoriesCollection();
    const categories: ApiResponse = {
      message: MESSAGE.FETCH,
      content: await categoriesCollection.list({
        userId: session.user.sid,
        type: type,
      }),
    };
    return NextResponse.json(categories, { status: HTTP_STATUS.SUCCESS });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: MESSAGE.FETCH_ERROR,
      },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session?.user.sid) throw new Error("No session found");
    let newCategory: Category = await req.json();

    if (areParametersValid(newCategory)) {
      newCategory.createdAt = new Date().getTime();
      newCategory.updatedAt = new Date().getTime();
      const categoriesCollection: CategoriesCollection = new CategoriesCollection();

      const result: ApiResponse = {
        message: MESSAGE.CREATION,
        content: await categoriesCollection.create(newCategory),
      };
      return NextResponse.json(result, { status: HTTP_STATUS.CREATED });
    } else {
      return NextResponse.json(
        {
          message: MESSAGE.CREATION_MISSING_PARAMETERS,
          error: MESSAGE.INVALID_PARAMETERS,
        },
        { status: HTTP_STATUS.BAD_REQUEST },
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: MESSAGE.CREATION_ERROR,
      },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ type: string }> }) {
  try {
    const categoryId: string = (await params).type;
    const session = await getSession();
    if (!session?.user.sid) throw new Error("No session found");
    const categoriesCollection: CategoriesCollection = new CategoriesCollection();

    const operation = await categoriesCollection.delete(categoryId);

    if (operation.deletedCount === 0) {
      return NextResponse.json(
        {
          message: MESSAGE.DELETION_ERROR,
        },
        { status: HTTP_STATUS.SERVER_ERROR },
      );
    }

    const result: ApiResponse = {
      message: MESSAGE.DELETION,
      content: operation,
    };
    return NextResponse.json(result, { status: HTTP_STATUS.SUCCESS });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: MESSAGE.DELETION_ERROR,
      },
      { status: 500 },
    );
  }
}
