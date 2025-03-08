"use client";
import { TransactionForm } from "@/app/components/transaction/TransactionForm";
import { Category, TransactionResult } from "@/app/components/types";
import { useEffect, useState } from "react";
import { createTransaction } from "@/app/lib/transactions";
import { useRouter } from "next/navigation";
import { getCategories } from "@/app/lib/categories";
import { ApiResponse } from "@/app/api/lib/types";
import { enqueueSnackbar } from "notistack";

export const IncomeForm: React.FC = () => {
  const [hasSucceed, setHasSucceed] = useState(false);
  const router = useRouter();

  const [categories, setCategories] = useState<Category[] | null>(null);
  useEffect(() => {
    getCategories("income")
      .then(async (data) => {
        setCategories(((await data.json()) as ApiResponse).content as Category[]);
      })
      .catch((e) => {
        console.error(e);
        enqueueSnackbar("An error occurred while fetching the categories. Please try again later.", { variant: "error" });
      });
  }, []);

  const onSubmit = async (result: TransactionResult) => {
    await createTransaction({
      userId: result.userId,
      amount: result.amount,
      category: result.category,
      date: result.date,
      description: result.description,
      type: "income",
    });
    setHasSucceed(true);
    router.push("/transactions");
  };
  return (
    <main className="flex justify-center px-40 py-5 max-md:px-10 max-md:py-5 max-sm:p-5">
      <TransactionForm
        title="Add a new income transaction"
        amountLabel="Amount"
        categoryLabel="Source"
        categoryOptions={categories || []}
        dateLabel="Date"
        descriptionLabel="Notes (optional)"
        submitLabel="Save"
        hasSucceed={hasSucceed}
        onsubmit={onSubmit}
      />
    </main>
  );
};
