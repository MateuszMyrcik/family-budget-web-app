import { EXPENSE_CATEGORIES } from "@/shared/domain";

export const getExpenseCategoriesItems = () => {
  return EXPENSE_CATEGORIES.map((category) => ({
    value: category,
    label: category,
  }));
};
