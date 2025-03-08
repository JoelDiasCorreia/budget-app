"use client";
import { Transaction } from "../types";
import { useMemo } from "react";

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const tableHeaders = useMemo(() => {
    return ["Date", "Description", "Category", "Amount"].map((header) => (
      <th key={header} className="py-3 text-sm font-medium text-neutral-900">
        {header}
      </th>
    ));
  }, []);

  const tableBody = useMemo(() => {
    return transactions.map((transaction, index) => (
      <tr key={index} className="border-b border-solid border-b-gray-200 max-sm:min-w-[875px]">
        <td className="text-center h-[72px]">{new Date(transaction.date).toLocaleDateString()}</td>
        <td className="text-center h-[72px]">{transaction.description}</td>
        <td className="text-center h-[72px]">
          <div className=" py-0 h-8 text-sm bg-gray-100 rounded-xl text-neutral-900">{transaction.category}</div>
        </td>
        <td className={`text-center h-[72px] text-slate-500 ${transaction.type === "income" ? "text-green-500" : ""}`}>
          {transaction.type === "income" ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
        </td>
      </tr>
    ));
  }, [transactions]);

  return (
    <table className="rounded-xl border border-solid border-zinc-200 max-sm:overflow-x-auto w-full bg-white border-collapse">
      <thead className="rounded-xl">
        <tr className="bg-white border-b border-solid border-b-gray-200 max-sm:min-w-[875px]">{tableHeaders}</tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
};
