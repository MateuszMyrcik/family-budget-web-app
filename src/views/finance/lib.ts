import { NotSpecificTransaction } from "./../../shared/domain/types/shared";
// TODO: move to shared lib
export const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;

  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;

  return `${formattedDay}.${formattedMonth}`;
};

export const isValuePositive = (value: number) => value > 0;

export const getTransactionsBalance = (
  transactions: NotSpecificTransaction[]
) => {
  const totalIncome = getTotalIncomeAmount(transactions);
  const totalExpense = getTotalExpenseAmount(transactions);

  return totalIncome - totalExpense;
};

export const isExpenseTransaction = (type: string) => type === "EXPENSE";
export const isIncomeTransaction = (type: string) => type === "INCOME";

export const getTotalExpenseAmount = (
  transactions: NotSpecificTransaction[]
) => {
  return transactions
    .filter(({ type }) => isExpenseTransaction(type))
    .reduce((acc, { amount }) => acc + amount.value, 0);
};

export const getTotalIncomeAmount = (
  transactions: NotSpecificTransaction[]
) => {
  return transactions
    .filter(({ type }) => isIncomeTransaction(type))
    .reduce((acc, { amount }) => acc + amount.value, 0);
};
