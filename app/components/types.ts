export interface User {
  profileImage: string;
}

export interface Transaction {
  date: string;
  description: string;
  category: string;
  amount: number;
  type: TransactionType;
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
export type TransactionResult  = {
  amount: number;
  source: string;
  date: string;
  notes: string;
}

export type Category = {
    label: string;
    value: string;
}

export type TransactionType = "income" | "expense";