import { Expense } from "@/shared/domain/types/shared";

export const getExpenseCategories = (expenses: Expense[]) => {
  return expenses.reduce((acc, expense) => {
    if (acc.includes(expense.category)) {
      return acc;
    }

    return [...acc, expense.category];
  }, [] as string[]);
};

export const getExpenseGroupCategories = (expenses: Expense[]) => {
  return expenses.reduce((acc, expense) => {
    if (acc.includes(expense.groupCategory)) {
      return acc;
    }

    return [...acc, expense.groupCategory];
  }, [] as string[]);
};

export const groupExpenseCategoriesByGroupCategory = (expenses: Expense[]) => {
  const groupCategories = getExpenseGroupCategories(expenses);

  return groupCategories.reduce((acc, groupCategory) => {
    const categories = expenses
      .filter((expense) => expense.groupCategory === groupCategory)
      .map((expense) => expense.category);

    return {
      ...acc,
      [groupCategory]: categories,
    };
  }, {} as Record<string, string[]>);
};
