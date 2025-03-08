"use client";

import { useEffect, useState } from "react";
import { getCategories } from "@/app/lib/categories";
import { Category, TRANSACTION_TYPE, TransactionType } from "@/app/components/types";
import { Tabs } from "@/app/components/atomic/Tabs";
import { CategoriesList } from "@/app/components/category/CategoriesList";
import { ApiResponse } from "@/app/api/lib/types";
import { enqueueSnackbar } from "notistack";

export const CategoryView: React.FC = () => {
  const [type, setType] = useState<TransactionType>(TRANSACTION_TYPE.INCOME);
  const [incomeCategories, setIncomeCategories] = useState<Category[] | null>(null);
  const [expenseCategories, setExpenseCategories] = useState<Category[] | null>(null);

  const fetchCategories = async (type: TransactionType) => {
    getCategories(type)
      .then(async (data) => {
        if (type === TRANSACTION_TYPE.INCOME) {
          setIncomeCategories(((await data.json()) as ApiResponse).content as Category[]);
        } else {
          setExpenseCategories(((await data.json()) as ApiResponse).content as Category[]);
        }
      })
      .catch((e) => {
        console.error(e);
        enqueueSnackbar("An error occurred while fetching the categories. Please try again later.", { variant: "error" });
      });
  };

  useEffect(() => {
    fetchCategories(type);
  }, [type]);

  return (
    <main className="flex-1 p-4 max-md:p-3">
      <div className="flex flex-col justify-between items-center p-4">
        <div className="flex w-full justify-between items-center p-4">
          <h1 className="text-3xl font-bold text-neutral-900">Categories</h1>
        </div>

        <br />
        <Tabs
          options={[TRANSACTION_TYPE.INCOME, TRANSACTION_TYPE.EXPENSE]}
          onChange={(option) => setType(option === TRANSACTION_TYPE.EXPENSE ? TRANSACTION_TYPE.EXPENSE : TRANSACTION_TYPE.INCOME)}
        ></Tabs>
        <br />
        <CategoriesList
          type={type}
          items={type === TRANSACTION_TYPE.INCOME ? incomeCategories : expenseCategories}
          onRefresh={async () => {
            await fetchCategories(type);
          }}
        />
      </div>
    </main>
  );
};
