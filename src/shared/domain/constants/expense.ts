import { createLookup } from "@/shared/utils";
import { ExpenseCategory } from "../types/expense";

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
