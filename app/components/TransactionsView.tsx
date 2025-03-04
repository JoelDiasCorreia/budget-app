"use client";
import { useState } from "react";
import { Transaction } from "./types";
import { TransactionList } from "./TransactionList";
import { TransactionFilters } from "./TransactionFilters";
import { TransactionPagination } from "./TransactionPagination";
import { Button } from "./Button";
import { useRouter } from 'next/navigation'
const mockTransactions: Transaction[] = [
  {
    date: "June 1",
    description: "Direct deposit - 1234",
    category: "Income",
    amount: 2000,
    type: "income",
  },
  {
    date: "June 1",
    description: "Rent",
    category: "Housing",
    amount: -1000,
    type: "expense",
  },
  {
    date: "June 2",
    description: "Groceries",
    category: "Food & Drink",
    amount: -100,
    type: "expense",
  },
  {
    date: "June 3",
    description: "ATM withdrawal",
    category: "Cash & ATM",
    amount: -50,
    type: "expense",
  },
  {
    date: "June 4",
    description: "Paycheck - 1234",
    category: "Income",
    amount: 2000,
    type: "income",
  },
];

export const TransactionsView: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const navigate = (destination: string) =>{
    router.push(destination)
  }

  return (
    <main className="flex-1 p-4 max-md:p-3">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold text-neutral-900">Transactions</h1>
        <div className="flex gap-2.5 max-sm:flex-col max-sm:gap-2">
          <Button variant="secondary" className="px-4 py-0 h-8" onClick={()=>navigate("/forms/expense")}>
            Add expense
          </Button>
          <Button variant="secondary" className="px-4 py-0 h-8" onClick={()=>navigate("/forms/income")}>
            Add income
          </Button>
        </div>
      </div>

      <div className="px-4 pt-5 pb-3 text-2xl font-bold text-neutral-900">
        June 2023
      </div>

      <TransactionFilters
        activeFilter={currentFilter}
        onFilterChange={setCurrentFilter}
      />

      <TransactionList
        transactions={mockTransactions.filter((t) =>
          currentFilter === "All"
            ? true
            : t.type === currentFilter.toLowerCase()
        )}
      />

      <TransactionPagination
        currentPage={currentPage}
        totalPages={4}
        onPageChange={setCurrentPage}
      />
    </main>
  );
};
