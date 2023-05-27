import { Expense } from "@/shared/domain/types/shared";

// TODO: move to shared lib
export const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;

  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;

  return `${formattedDay}.${formattedMonth}`;
};


export const isValuePositive = (value: number) => value > 0;

export const getTotalAmount = (expenses: Expense[]) => {
  return expenses.reduce((acc, expense) => {
    return acc + expense.amount.value;
  }, 0);
};

// Generated, if not needed, delete
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
