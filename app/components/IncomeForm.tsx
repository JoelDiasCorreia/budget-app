"use client";
import {TransactionForm} from "@/app/components/TransactionForm";
import {TransactionResult} from "@/app/components/types";
import {useState} from "react";

export const IncomeForm: React.FC = () => {

    const [hasSucceed, setHasSucceed] = useState(false);
    return (

        <main className="flex justify-center px-40 py-5 max-md:px-10 max-md:py-5 max-sm:p-5">
            <TransactionForm
                title="Add a new income transaction"
                amountLabel="Amount"
                sourceLabel="Source"
                sourceOptions={[{label: "Salary", value: "1"}, {label: "Freelance", value: "2"}, {
                    label: "Investments",
                    value: "3"
                }]}
                dateLabel="Date"
                notesLabel="Notes (optional)"
                submitLabel="Save"
                hasSucceed={hasSucceed}
                onsubmit={(result: TransactionResult) => {
                    console.log(result);
                    setHasSucceed(true)
                }}
            />

        </main>
    );
};
