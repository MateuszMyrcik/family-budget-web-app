import {
  ExpenseCategory,
  ExpenseGroupCategory,
  EXPENSE_CATEGORIES,
  EXPENSE_GROUP_CATEGORY_BY_CATEGORY,
  IncomeCategory,
  IncomeGroupCategory,
  INCOME_CATEGORIES,
  INCOME_GROUP_CATEGORY_BY_CATEGORY,
  Transaction,
  TransactionType,
  TRANSACTION_TYPE,
} from "@/shared/domain";
import { translate } from "@/shared/utils";

export const filterExpenseByGroupCategory = (
  category: ExpenseGroupCategory
) => {
  return EXPENSE_CATEGORIES.filter(
    (expenseCategory) =>
      EXPENSE_GROUP_CATEGORY_BY_CATEGORY[expenseCategory] === category
  );
};

export const getExpenseCategories = () =>
  EXPENSE_CATEGORIES.map((category) => {
    return {
      value: category,
      label: translate(`transaction.expense.${category}`),
    };
  });

export const getIncomeCategories = () =>
  INCOME_CATEGORIES.map((category) => ({
    value: category,
    label: translate(`transaction.income.${category}`),
  }));

export const getExpenseGroupCategory = (
  category: ExpenseCategory
): ExpenseGroupCategory => {
  return EXPENSE_GROUP_CATEGORY_BY_CATEGORY[category];
};

export const getIncomeGroupCategory = (
  category: IncomeCategory
): IncomeGroupCategory => {
  return INCOME_GROUP_CATEGORY_BY_CATEGORY[category];
};

export const isExpenseTransaction = (
  transaction: Transaction
): transaction is Transaction<"EXPENSE"> =>
  transaction.type === TRANSACTION_TYPE.EXPENSE;

export const isIncomeTransaction = (
  transaction: Transaction
): transaction is Transaction<"INCOME"> =>
  transaction.type === TRANSACTION_TYPE.INCOME;

export const isIncome = (type: TransactionType) =>
  type === TRANSACTION_TYPE.INCOME;

export const isExpense = (type: TransactionType) =>
  type === TRANSACTION_TYPE.EXPENSE;
