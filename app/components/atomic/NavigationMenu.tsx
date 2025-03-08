"use client";
import { NavigationItem } from "../types";

interface NavigationMenuProps {
  items: NavigationItem[];
  className?: string;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ items, className = "" }) => {
  return (
    <nav className={`flex gap-9 items-center h-10 max-sm:hidden ${className}`}>
      {items.map((item) => (
        <a key={item.href} href={item.href} className="text-sm leading-5 cursor-pointer text-neutral-900 hover:text-blue-600 transition-colors">
          {item.label}
        </a>
      ))}
    </nav>
  );
};
