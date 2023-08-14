import { UniqueId } from "../common";
import { ExpenseCategory } from "./expense";

// SHARED DOMAIN TYPES
export type Ownership = {
  ownerId: UniqueId;
  familyId: UniqueId;
};

export type Metadata = {
  created: Date;
  modified: Date;
  version: number;
};

export type RangeDate = {
  start: Date;
  end: Date;
};

export type Amount = {
  currency: string;
  value: number;
};

export type Image = {
  alt: string;
  width?: number;
  height?: number;
  url: string;
};

// TRANSACTION
export type NotSpecificTransaction = {
  [T in TransactionType]: Transaction<T>;
}[TransactionType];

export type Transaction<T extends TransactionType = TransactionType> = {
  id: string;
  name: string;
  date: Date;
  amount: Amount;
  comment?: string;
  ownership: { ownerId: string; familyId: string };
} & TransactionDetails<T>;

export type TransactionDetails<T extends TransactionType> = {
  EXPENSE: ExpenseDetails;
  INCOME: IncomeDetails;
}[T];

export type ExpenseDetails = {
  groupCategory: ExpenseGroupCategory;
  category: ExpenseCategory;
  type: "EXPENSE";
};

export type IncomeDetails = {
  groupCategory: IncomeGroupCategory;
  category: IncomeCategory;
  type: "INCOME";
};

export type TransactionType = "EXPENSE" | "INCOME";

// EXPENSES
export type ExpenseGroupCategory =
  | "SHOPPING"
  | "OTHER"
  | "HOUSING"
  | "TRANSPORT"
  | "HEALTHCARE"
  | "ENTERTAINMENT";

// INCOME
export type IncomeGroupCategory = "SALARY" | "INVESTMENTS" | "OTHER";

export type IncomeCategory =
  | "FULL_TIME"
  | "PART_TIME"
  | "FREELANCE"
  | "RENTAL_INCOME"
  | "INTEREST"
  | "DIVIDENDS"
  | "OTHER";

// BUDGET
export type Budget = {
  id: string;
  month: number;
  plannedExpenses: Transaction<"EXPENSE">[];
  plannedIncomes: Transaction<"INCOME">[];
  actualExpenses: Transaction<"EXPENSE">[];
  actualIncomes: Transaction<"INCOME">[];
};

// USERS
export type UserRole = "ADMIN" | "REGULAR";

export type User = {
  id: string;
  name: string;
  surname: string;
  avatar?: Image;
  email: string;
  role: UserRole;
};

export type Household = {
  id: string;
  primaryMember: User;
  otherMembers?: User[];
};
