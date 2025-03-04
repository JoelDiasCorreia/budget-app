"use client";
import { Transaction } from "./types";

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
}) => {
  return (
    <section className="mx-4 my-3 bg-white rounded-xl border border-solid border-zinc-200 max-sm:overflow-x-auto">
      <div className="flex bg-white border-b border-solid border-b-gray-200 max-sm:min-w-[875px]">
        <div className="px-4 py-3 text-sm font-medium text-neutral-900">
          Date
        </div>
        <div className="px-4 py-3 text-sm font-medium text-neutral-900">
          Description
        </div>
        <div className="px-4 py-3 text-sm font-medium text-neutral-900">
          Category
        </div>
        <div className="px-4 py-3 text-sm font-medium text-neutral-900">
          Amount
        </div>
      </div>

      {transactions.map((transaction, index) => (
        <div
          key={index}
          className="flex border-b border-solid border-b-gray-200 max-sm:min-w-[875px]"
        >
          <div className="px-4 py-2 h-[72px]">{transaction.date}</div>
          <div className="px-4 py-2 h-[72px]">{transaction.description}</div>
          <div className="flex items-center px-4 py-2 h-[72px]">
            <div className="px-4 py-0 h-8 text-sm bg-gray-100 rounded-xl text-neutral-900">
              {transaction.category}
            </div>
          </div>
          <div
            className={`px-4 py-2 h-[72px] text-slate-500 ${
              transaction.type === "income" ? "text-green-500" : ""
            }`}
          >
            {transaction.type === "income" ? "+" : "-"}$
            {Math.abs(transaction.amount).toFixed(2)}
          </div>
        </div>
      ))}
    </section>
  );
};
