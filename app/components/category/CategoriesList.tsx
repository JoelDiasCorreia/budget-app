import { Category, CreatableCategory, TransactionType } from "@/app/components/types";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { createCategory, deleteCategory } from "@/app/lib/categories";
import { enqueueSnackbar } from "notistack";
import { CategoryForm } from "@/app/components/category/CategoryForm";
import { useState } from "react";
import { Skeleton } from "@/app/components/atomic/Skeleton";

export const CategoriesList: React.FC<{
  items: Category[] | null;
  type: TransactionType;
  onRefresh?: () => void;
}> = ({ items, type, onRefresh }) => {
  const isLoading = items === null;

  const [hasSucceed, setHasSucceed] = useState(false);

  const onSubmit = async (result: CreatableCategory) => {
    await createCategory({
      userId: result.userId,
      label: result.label,
      type: result.type,
    });
    setHasSucceed(true);
    enqueueSnackbar("Category created successfully", { variant: "success" });
    onRefresh && onRefresh();
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this category?")) {
      try {
        const operation = await deleteCategory(id);
        const res = await operation.json();
        if (res?.content?.deletedCount !== 1) {
          throw new Error("An error occurred while deleting the category");
        } else {
          enqueueSnackbar("Category deleted successfully", { variant: "success" });
          onRefresh && onRefresh();
        }
      } catch (e) {
        console.error(e);
        enqueueSnackbar("An error occurred while deleting the category. Please try again later.", { variant: "error" });
      }
    }
  };

  return (
    <div className="flex flex-col  md:grid-cols-2 lg:grid-cols-3">
      {isLoading && (
        <>
          <Skeleton className={"h-12 min-w-xs mt-2"} />
          <Skeleton className={"h-12 min-w-xs mt-2"} />
          <Skeleton className={"h-12 min-w-xs mt-2"} />
          <Skeleton className={"h-12 min-w-xs mt-2"} />
          <Skeleton className={"h-12 min-w-xs mt-2"} />
          <Skeleton className={"h-12 min-w-xs mt-2"} />
        </>
      )}
      {!isLoading && <CategoryForm hasSucceed={hasSucceed} onsubmit={onSubmit} type={type} />}
      {items?.map((item) => (
        <a
          key={item._id}
          className={`
            flex flex-row place-content-between min-w-xs 
            p-4 bg-white m-2 shadow-md hover:scale-105
            border-blue-200
            hover:border-1 hover:
            rounded-md hover:shadow-lg transition-all`}
        >
          <h4 className="text-base text-neutral-900">{item.label}</h4>

          <div>
            <button className="mr-3">
              <PencilIcon className={`w-6 h-6 text-gray-200 cursor-pointer hover:text-blue-500 `} />
            </button>
            <button onClick={() => handleDelete(item._id)}>
              <TrashIcon className={`w-6 h-6 text-gray-200 cursor-pointer hover:text-red-500 `} />
            </button>
          </div>
        </a>
      ))}
      {!isLoading && items && items.length === 0 && (
        <div className="min-w-xs items-center p-5">
          <h4 className="text-base text-center text-gray-700">No categories found</h4>
        </div>
      )}
    </div>
  );
};
