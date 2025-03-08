"use client";

import { Header } from "@/app/components/atomic/Header";
import { IncomeForm } from "@/app/components/transaction/IncomeForm";
import { SnackbarProvider } from "notistack";

export default function IncomePage() {
  return (
    <div>
      <SnackbarProvider />
      <Header />
      <IncomeForm />
    </div>
  );
}
