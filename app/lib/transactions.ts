import {CreatableTransaction} from "@/app/components/types";

export const createTransaction = (transaction: CreatableTransaction) =>{
    return fetch("/api/v1/transaction", {
        method: "POST",
        body: JSON.stringify(transaction),
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export const getTransactions = () =>{
    return fetch("/api/v1/transaction", {
        method: "GET",
    });
}