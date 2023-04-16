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

// EXPENSES
export type Expense = {
  id: string;
  name: string;
  groupCategory: string | ExpenseGroupCategory;
  category: ExpenseCategory;
  amount: Amount;
  date: Date;
  ownership: Ownership;
  comment?: string;

  // cyclic: boolean; // TODO: add cyclic expenses
  // rangeDate?: RangeDate; // TODO: add cyclic expenses
};

export type ExpenseGroupCategory =
  | "FOOD"
  | "OTHER"
  | "HYGIENE"
  | "HOUSING"
  | "SAVINGS"
  | "CHILDREN"
  | "CLOTHING"
  | "TRANSPORT"
  | "HEALTHCARE"
  | "ENTERTAINMENT"
  | "OTHER_EXPENSES"
  | "DEBT_REPAYMENT"
  | "TELECOMMUNICATIONS";

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

export type Income = {
  id: string;
  cyclic: boolean;
  groupCategory: ExpenseGroupCategory;
  category: string | IncomeCategory;
  name: string;
  amount: Amount;
  ownership: Ownership;
  rangeDate?: RangeDate;
};

// BUDGET
export type Budget = {
  id: string;
  month: number;
  plannedExpenses: Expense[];
  plannedIncomes: Income[];
  actualExpenses: Expense[];
  actualIncomes: Income[];
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
