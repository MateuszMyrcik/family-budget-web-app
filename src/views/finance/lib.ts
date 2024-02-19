import {
  isExpenseTransaction,
  isIncomeTransaction,
} from "@/entities/transaction";
import { NotSpecificTransaction, Transaction } from "@/shared/domain";

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

export const getTotalExpenseAmount = (transactions: Transaction[]) => {
  return transactions
    .filter((transaction) => isExpenseTransaction(transaction))
    .reduce((acc, { amount }) => acc + amount.value, 0);
};

export const getTotalIncomeAmount = (
  transactions: NotSpecificTransaction[]
) => {
  return transactions
    .filter((transaction) => isIncomeTransaction(transaction))
    .reduce((acc, { amount }) => acc + amount.value, 0);
};

export const getTransactionByMonth = (
  transactions: Transaction[],
  date: Date
) => {
  return transactions.filter(
    (transaction) =>
      new Date(transaction.transactionDate).getMonth() === date.getMonth() &&
      new Date(transaction.transactionDate).getFullYear() ===
        date.getFullYear() &&
      new Date(transaction.transactionDate) < new Date()
  );
};

export const getPlannedTransactions = (transactions: Transaction[]) => {
  return transactions.filter(
    (transaction) => new Date(transaction.transactionDate) > new Date()
  );
};
