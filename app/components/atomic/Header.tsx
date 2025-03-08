"use client";
import { NavigationMenu } from "./NavigationMenu";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const navigationItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Categories", href: "/categories" },
  { label: "Transactions", href: "/transactions" },
  { label: "Budgets", href: "/budgets" },
  { label: "Settings", href: "/settings" },
  { label: "Help", href: "/help" },
];

export const Header: React.FC = () => {
  const { user, error, isLoading } = useUser();

  return (
    <header className="flex justify-between items-center px-10 py-3 bg-white border-b border-solid border-b-gray-200 max-sm:px-5">
      <div className="flex gap-4 items-center">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15.2699C6.56217 15.2699 5.1566 14.8435 3.96107 14.0447C2.76556 13.2459 1.83376 12.1105 1.28352 10.7821C0.733283 9.45367 0.589313 7.99193 0.869823 6.58173C1.15033 5.1715 1.84272 3.87613 2.85943 2.85943C3.87613 1.84272 5.1715 1.15034 6.58173 0.869827C7.99193 0.589317 9.45367 0.733287 10.7821 1.28352C12.1105 1.83376 13.2459 2.76556 14.0447 3.9611C14.8435 5.1566 15.2699 6.56217 15.2699 8H8V15.2699Z"
            fill="#121417"
          />
        </svg>
        <h1 className="text-lg font-bold leading-6 text-neutral-900">Spendwise</h1>
      </div>

      {!user && <Link href={"/api/auth/login"}>login</Link>}
      {user && (
        <div className="flex flex-1 gap-8 justify-end items-center">
          <NavigationMenu items={navigationItems} />
          <a key="/api/auth/logout" href="/api/auth/logout" className="text-sm leading-5 cursor-pointer text-neutral-900 hover:text-blue-600 transition-colors">
            Logout
          </a>
          <div className="flex gap-2 items-center">
            <img src={user?.picture || ""} alt="Profile" className="w-10 h-10 rounded-3xl" />
          </div>
        </div>
      )}
    </header>
  );
};
