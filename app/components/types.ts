export interface User {
  profileImage: string;
}

export interface Transaction extends CreatableTransaction{
  _id: string;
  createdAt: number;
  updatedAt: number;
}

export interface CreatableTransaction{
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
  category: string;
  date: string;
  description: string;
}

export type Category = {
    label: string;
    value: string;
}

export type TransactionType = "income" | "expense";

export enum HTTP_STATUS {
    SUCCESS = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    SERVER_ERROR = 500
}

export enum HTTP_METHOD {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS'
}