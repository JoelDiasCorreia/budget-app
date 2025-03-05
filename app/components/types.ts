export interface User {
  profileImage: string;
}

export interface Transaction extends CreatableTransaction{
  _id: string;
  createdAt: number;
  updatedAt: number;
}

export interface CreatableTransaction{
    userId: string;
    date: number;
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
  userId: string;
  amount: number;
  category: string;
  date: number;
  description: string;
}

export type Category = {
    label: string;
    value: string;
}

export type TransactionType = "income" | "expense";

