import {NextResponse} from "next/server";
import {TransactionsCollection} from "@/app/api/v1/transaction/TransactionsCollection";
import {CreatableTransaction, Transaction} from "@/app/components/types";
import {ApiResponse, HTTP_STATUS} from "@/app/api/lib/types";
import { getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest } from "next";

enum MESSAGE {
    FETCH = 'Transactions fetched successfully',
    FETCH_ERROR = 'An error occurred while fetching the transactions',
    CREATION = 'Transaction created successfully',
    CREATION_ERROR = 'An error occurred while saving the transaction',
    CREATION_MISSING_PARAMETERS = 'Missing userId, amount, date, category or type',
    INVALID_PARAMETERS = 'Invalid parameters'
}

const areParametersValid = (newTransaction: CreatableTransaction) => {
    return (newTransaction.date && newTransaction.amount && newTransaction.type && newTransaction.category && newTransaction.userId)
}

export async function GET(_req: NextApiRequest) {
    try {
        const session = await getSession()
        if(!session?.user.sid) throw new Error('No session found');
        const transactionCollection: TransactionsCollection = new TransactionsCollection();
        const transactions: ApiResponse = {
            message: MESSAGE.FETCH,
            content: await transactionCollection.list({
                userId: session.user.sid
            })
        }
        return NextResponse.json(transactions, {status: HTTP_STATUS.SUCCESS});
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: MESSAGE.FETCH_ERROR,
            },
            {status: 500}
        );
    }
}

export async function POST(req: Request) {
    try {
        const session = await getSession();
        if(!session?.user.sid) throw new Error('No session found');
        let newTransaction: Transaction = await req.json();

        if (areParametersValid(newTransaction)) {
            newTransaction.createdAt = new Date().getTime();
            newTransaction.updatedAt = new Date().getTime();
            const transactionCollection: TransactionsCollection = new TransactionsCollection();

            const result: ApiResponse = {
                message: MESSAGE.CREATION,
                content: await transactionCollection.create(newTransaction)
            }
            return NextResponse.json(result, {status: HTTP_STATUS.CREATED});
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
