import { createLookup } from "@/shared/utils";
import { ExpenseCategory } from "../types/expense";
import { IncomeCategory, IncomeGroupCategory } from "../types/shared";

export const EXPENSE_CATEGORIES: ExpenseCategory[] = [
  "FOOD",
  "TAKEAWAY",
  "ALCOHOL",
  "RENT",
  "UTILITIES",
  "MAINTENANCE",
  "PUBLIC_TRANSPORT",
  "FUEL",
  "CAR",
  "DOCTOR",
  "PHARMACY",
  "GYM",
  "CINEMA",
  "BOOKS",
  "OTHER",
];

export const EXPENSE_CATEGORY = createLookup(EXPENSE_CATEGORIES);

export const EXPENSE_CATEGORIES_BY_GROUP_CATEGORY = {
  FOOD: ["FOOD", "TAKEAWAY", "ALCOHOL"],
  APARTMENT: ["RENT", "UTILITIES", "MAINTENANCE"],
  TRANSPORT: ["PUBLIC_TRANSPORT", "FUEL", "CAR"],
  HEALTHCARE: ["DOCTOR", "PHARMACY"],
  ENTERTAINMENT: ["GYM", "CINEMA", "BOOKS"],
  OTHER: ["OTHER"],
};

export const EXPENSE_GROUP_CATEGORIES = [
  "FOOD",
  "APARTMENT",
  "TRANSPORT",
  "HEALTHCARE",
  "ENTERTAINMENT",
  "OTHER",
];

export const INCOME_CATEGORIES: IncomeCategory[] = [
  "DIVIDENDS",
  "FULL_TIME",
  "FREELANCE",
  "INTEREST",
  "OTHER",
  "PART_TIME",
  "RENTAL_INCOME",
];

export const INCOME_CATEGORY = createLookup(INCOME_CATEGORIES);

export const INCOME_CATEGORIES_BY_GROUP_CATEGORY: Record<
  IncomeGroupCategory,
  IncomeCategory[]
> = {
  SALARY: ["FULL_TIME", "PART_TIME"],
  INVESTMENTS: ["DIVIDENDS", "INTEREST"],
  OTHER: ["OTHER", "RENTAL_INCOME"],
};

export const INCOME_GROUP_CATEGORIES: IncomeGroupCategory[] = [
  "SALARY",
  "INVESTMENTS",
  "OTHER",
];
