import { Transaction, UniqueId } from "@/shared";

export type TransactionsState = {
  transactions: Transaction[];
  error: string | null;
  loading: "idle" | "loading" | "loaded" | "error";
};

export type TransactionReducers = {};

export type ServiceStatus = {
  isIdle: boolean;
  isError: boolean;
  isPending: boolean;
  isSuccess: boolean;
  error: string | null;
};
