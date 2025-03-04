"use client";
import { useState } from "react";
import { Header } from "./Header";
import { ExpenseForm } from "./ExpenseForm";
import { IncomeForm } from "./IncomeForm";
import { TransactionList } from "./TransactionList";
import { BudgetView } from "./BudgetView";
import { ReportsView } from "./ReportsView";
import { SettingsView } from "./SettingsView";
import { LoginView } from "./LoginView";

const mockUser = {
  profileImage:
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7a7c142c92b8b4f8f1e78355acba2457cb7806ea",
};

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
        return <LoginView />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        user={mockUser}

      />
      {renderView()}
    </div>
  );
};
