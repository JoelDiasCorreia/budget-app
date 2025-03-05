"use client";
import { useState } from "react";
import { Header } from "./Header";
import { ExpenseForm } from "./ExpenseForm";
import { IncomeForm } from "./IncomeForm";
import { BudgetView } from "./BudgetView";
import { ReportsView } from "./ReportsView";
import { SettingsView } from "./SettingsView";
import { LoginView } from "./LoginView";
import {useUser} from "@auth0/nextjs-auth0/client";

const mockTransactions = [
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
];

type View =
  | "login"
  | "expense"
  | "income"
  | "transactions"
  | "budgets"
  | "reports"
  | "settings";

export const SpendwiseApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>("login");
  const {user, error, isLoading} = useUser();


  const renderView = () => {
    switch (currentView) {
      case "expense":
        return <ExpenseForm />;
      case "income":
        return <IncomeForm />;
      case "budgets":
        return <BudgetView />;
      case "reports":
        return <ReportsView />;
      case "settings":
        return <SettingsView />;
      case "transactions":
      default:
        return  user ? <ReportsView />: <LoginView />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      {renderView()}
    </div>
  );
};
