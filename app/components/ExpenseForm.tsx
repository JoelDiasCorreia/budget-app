"use client";
import {TransactionForm} from "@/app/components/TransactionForm";
import {TransactionResult} from "@/app/components/types";
import {useState} from "react";
import {createTransaction} from "@/app/lib/transactions";

export const ExpenseForm: React.FC = () => {

    const [hasSucceed, setHasSucceed] = useState(false);

    const onSubmit = async (result: TransactionResult) => {
        console.log(result);

        await createTransaction({
            amount: result.amount,
            category: result.category,
            date: result.date,
            description: result.description,
            type: "expense"
        });
        setHasSucceed(true);

    }

    return (
        <main className="flex justify-center px-40 py-5 max-md:px-10 max-md:py-5 max-sm:p-5">
            <TransactionForm
                title="Add a new expense"
                amountLabel="Amount"
                categoryLabel="Category"
                categoryOptions={[{label: "Salary", value: "1"}, {label: "Freelance", value: "2"}, {
                    label: "Investments",
                    value: "3"
                }]}
                dateLabel="Date"
                descriptionLabel="Notes (optional)"
                submitLabel="Save"
                hasSucceed={hasSucceed}
                onsubmit={onSubmit}
            />

        </main>
    );
};
