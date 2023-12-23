import {
  Transaction,
  TransactionType,
  TRANSACTION_TYPE,
} from "@/shared/domain";
import { groupBy } from "rambda";

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

export const getActualTransactions = (transactions: Transaction[]) => {
  return transactions.filter(
    (transaction) => new Date(transaction.transactionDate) < new Date()
  );
};

export const groupTransactionByGroupId = (transactions: Transaction[]) => {
  return groupBy<Transaction>(
    ({ classificationRecord }) => classificationRecord.group._id,
    transactions
  );
};

export const formatCurrencyValue = (value: number) => {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(value);
};
