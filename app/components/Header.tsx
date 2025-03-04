"use client";
import { NavigationMenu } from "./NavigationMenu";
import { IconButton } from "./IconButton";
import { User } from "./types";

interface HeaderProps {
  user: User;
  onNavigate?: (view: string) => void;
}

const navigationItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Transactions", href: "/transactions" },
  { label: "Budgets", href: "/budgets" },
  { label: "Settings", href: "/settings" },
  { label: "Help", href: "/help" },
];

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="flex justify-between items-center px-10 py-3 bg-white border-b border-solid border-b-gray-200 max-sm:px-5">
      <div className="flex gap-4 items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 15.2699C6.56217 15.2699 5.1566 14.8435 3.96107 14.0447C2.76556 13.2459 1.83376 12.1105 1.28352 10.7821C0.733283 9.45367 0.589313 7.99193 0.869823 6.58173C1.15033 5.1715 1.84272 3.87613 2.85943 2.85943C3.87613 1.84272 5.1715 1.15034 6.58173 0.869827C7.99193 0.589317 9.45367 0.733287 10.7821 1.28352C12.1105 1.83376 13.2459 2.76556 14.0447 3.9611C14.8435 5.1566 15.2699 6.56217 15.2699 8H8V15.2699Z"
            fill="#121417"
          />
        </svg>
        <h1 className="text-lg font-bold leading-6 text-neutral-900">
          Spendwise
        </h1>
      </div>

      <div className="flex flex-1 gap-8 justify-end items-center">
        <NavigationMenu items={navigationItems} />

        <div className="flex gap-2 items-center">
          <IconButton
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.9422 17.0578L14.0305 13.1469C16.3858 10.3192 16.1004 6.13911 13.3826 3.65779C10.6649 1.17647 6.47612 1.27167 3.87389 3.87389C1.27167 6.47612 1.17647 10.6649 3.65779 13.3826C6.13911 16.1004 10.3192 16.3858 13.1469 14.0305L17.0578 17.9422C17.302 18.1864 17.698 18.1864 17.9422 17.9422C18.1864 17.698 18.1864 17.302 17.9422 17.0578Z"
                  fill="#121417"
                />
              </svg>
            }
            aria-label="Search"
          />
          <IconButton
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 1.875C5.51269 1.875 1.875 5.51269 1.875 10C1.875 14.4873 5.51269 18.125 10 18.125C14.4873 18.125 18.125 14.4873 18.125 10C18.1203 5.51465 14.4853 1.87974 10 1.875ZM10 16.875C6.20304 16.875 3.125 13.797 3.125 10C3.125 6.20304 6.20304 3.125 10 3.125C13.797 3.125 16.875 6.20304 16.875 10C16.8707 13.7952 13.7952 16.8707 10 16.875ZM13.75 10C13.75 10.3452 13.4702 10.625 13.125 10.625H10.625V13.125C10.625 13.4702 10.3452 13.75 10 13.75C9.65482 13.75 9.375 13.4702 9.375 13.125V10.625H6.875C6.52982 10.625 6.25 10.3452 6.25 10C6.25 9.65482 6.52982 9.375 6.875 9.375H9.375V6.875C9.375 6.52982 9.65482 6.25 10 6.25C10.3452 6.25 10.625 6.52982 10.625 6.875V9.375H13.125C13.4702 9.375 13.75 9.65482 13.75 10Z"
                  fill="#121417"
                />
              </svg>
            }
            aria-label="Add"
          />
          <IconButton
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.3281 13.7453C16.8945 12.9984 16.25 10.8852 16.25 8.125C16.25 4.67322 13.4518 1.875 10 1.875C6.54822 1.875 3.75 4.67322 3.75 8.125C3.75 10.8859 3.10469 12.9984 2.67109 13.7453C2.44572 14.1318 2.44408 14.6092 2.6668 14.9973C2.88951 15.3853 3.30261 15.6247 3.75 15.625H6.93828C7.23556 17.0796 8.51529 18.1243 10 18.1243C11.4847 18.1243 12.7644 17.0796 13.0617 15.625H16.25C16.6972 15.6244 17.1101 15.3849 17.3326 14.9969C17.5551 14.609 17.5534 14.1317 17.3281 13.7453Z"
                  fill="#121417"
                />
              </svg>
            }
            aria-label="Notifications"
          />
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-3xl"
          />
        </div>
      </div>
    </header>
  );
};
