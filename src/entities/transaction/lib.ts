import {
  Transaction,
  TransactionType,
  TRANSACTION_TYPE,
} from "@/shared/domain";


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
