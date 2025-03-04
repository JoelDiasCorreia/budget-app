import {NextResponse} from "next/server";
import {TransactionsCollection} from "@/app/api/v1/transaction/TransactionsCollection";
import {CreatableTransaction, HTTP_STATUS, Transaction} from "@/app/components/types";

enum MESSAGE {
    CREATION = 'Transaction created successfully',
    CREATION_ERROR = 'An error occurred while saving the transaction',
    CREATION_MISSING_PARAMETERS = 'Missing amount, date, category or type',
    INVALID_PARAMETERS = 'Invalid parameters'
}

type Response = {
    message: string;
    error?: string;
    content: any;
}

const areParametersValid = (newTransaction: CreatableTransaction) => {
    return (newTransaction.date && newTransaction.amount && newTransaction.type && newTransaction.category)
}

export async function POST(req: Request) {
    try {
        let newTransaction: Transaction = await req.json();

        if (areParametersValid(newTransaction)) {
            newTransaction.createdAt = new Date().getTime();
            newTransaction.updatedAt = new Date().getTime();
            const transactionCollection: TransactionsCollection = new TransactionsCollection();

            const result: Response ={
                message:  MESSAGE.CREATION,
                content: await transactionCollection.create(newTransaction)
            }
            return NextResponse.json(result, {status: 201});
        } else {
            return NextResponse.json(
                {
                    message: MESSAGE.CREATION_MISSING_PARAMETERS,
                    error: MESSAGE.INVALID_PARAMETERS,
                },
                {status: HTTP_STATUS.BAD_REQUEST}
            );
        }

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: MESSAGE.CREATION_ERROR,
            },
            {status: 500}
        );
    }
}
