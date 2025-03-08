"use client";
import { useEffect, useState } from "react";
import { Transaction } from "../types";
import { TransactionList } from "../transaction/TransactionList";
import { TransactionFilters } from "../transaction/TransactionFilters";
import { TransactionPagination } from "../transaction/TransactionPagination";
import { Button } from "../atomic/Button";
import { useRouter } from "next/navigation";
import { getTransactions } from "@/app/lib/transactions";
import { ApiResponse } from "@/app/api/lib/types";

export const TransactionsView: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    getTransactions().then(async (data) => {
      setTransactions(((await data.json()) as ApiResponse).content as Transaction[]);
    });
  }, []);

  const navigate = (destination: string) => {
    router.push(destination);
  };

  return (
    <main className="flex-1 p-4 max-md:p-3">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold text-neutral-900">Transactions</h1>
        <div className="flex gap-2.5 max-sm:flex-col max-sm:gap-2">
          <Button variant="secondary" className="px-4 py-0 h-8" onClick={() => navigate("/forms/expense")}>
            Add expense
          </Button>
          <Button variant="secondary" className="px-4 py-0 h-8" onClick={() => navigate("/forms/income")}>
            Add income
          </Button>
        </div>
      </div>

      <div className="px-4 pt-5 pb-3 text-2xl font-bold text-neutral-900">June 2023</div>

      <TransactionFilters activeFilter={currentFilter} onFilterChange={setCurrentFilter} />

      {transactions && <TransactionList transactions={transactions.filter((t) => (currentFilter === "All" ? true : t.type === currentFilter.toLowerCase()))} />}

      <TransactionPagination currentPage={currentPage} totalPages={4} onPageChange={setCurrentPage} />
    </main>
  );
};
