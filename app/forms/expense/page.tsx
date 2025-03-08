"use client";

import { ExpenseForm } from "@/app/components/transaction/ExpenseForm";
import { Header } from "@/app/components/atomic/Header";
import { SnackbarProvider } from "notistack";

export default function ExpensesPage() {
  return (
    <div>
      <SnackbarProvider />
      <Header />
      <ExpenseForm />
    </div>
  );
}
