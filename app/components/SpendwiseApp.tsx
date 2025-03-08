"use client";
import { Header } from "./atomic/Header";
import { ReportsView } from "./views/ReportsView";
import { LoginView } from "./views/LoginView";
import { useUser } from "@auth0/nextjs-auth0/client";

export const SpendwiseApp: React.FC = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {user ? <ReportsView /> : <LoginView />}
    </div>
  );
};
