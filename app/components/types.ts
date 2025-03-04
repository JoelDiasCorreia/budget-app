export interface User {
  profileImage: string;
}

export interface Transaction {
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
}

export interface Budget {
  name: string;
  current: number;
  total: number;
  percentage: number;
}

export interface NavigationItem {
  label: string;
  href: string;
}
