import { AppDispatch, RootState } from "@/app/store";
import {
  CreateCyclicTransactionRequest,
  CreateTransactionRequest,
  UpdateTransactionRequest,
} from "@/shared";
import { useDispatch, useSelector } from "react-redux";
import { getActualTransactions } from "../lib";
import { ServiceStatus } from "../types";
import {
  createCyclicTransaction,
  createTransaction,
  getTransactions,
  removeTransaction,
  updateTransaction,
} from "./slice";

export const useAction = () => {
  const dispatch: AppDispatch = useDispatch();

  return {
    createTransaction: (transaction: CreateTransactionRequest) =>
      dispatch(createTransaction(transaction)),
    updateTransaction: (transaction: UpdateTransactionRequest) =>
      dispatch(updateTransaction(transaction)),
    getTransactions: () => dispatch(getTransactions()),
    removeTransaction: (transactionId: string) =>
      dispatch(removeTransaction(transactionId)),
    createCyclicTransaction: (
      cyclicTransaction: CreateCyclicTransactionRequest
    ) => dispatch(createCyclicTransaction(cyclicTransaction)),
  };
};

export const useTransactions = () => {
  const { transactions } = useSelector(
    (state: RootState) => state.transactionSlice
  );

  return {
    transactions,
  };
};

export const useTransaction = (transactionId: string) => {
  const { transactions } = useSelector(
    (state: RootState) => state.transactionSlice
  );

  const transaction = transactions.find(
    (transaction) => transaction.id === transactionId
  );

  return {
    transaction,
  };
};

export const useServiceStatus = (): ServiceStatus => {
  const slice = useSelector((state: RootState) => state.transactionSlice);
  return {
    error: slice.error,
    isIdle: slice.loading === "idle",
    isError: slice.loading === "error",
    isPending: slice.loading === "loading",
    isSuccess: slice.loading === "loaded",
  };
};
