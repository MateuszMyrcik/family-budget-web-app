import { BudgetRecord } from "@/shared";

export type BudgetState = {
  records: BudgetRecord[];
  error: string | null;
  loading: "idle" | "loading" | "loaded" | "error";
};

export type BudgetReducers = {};

export type ServiceStatus = {
  isIdle: boolean;
  isError: boolean;
  isPending: boolean;
  isSuccess: boolean;
  error: string | null;
};
