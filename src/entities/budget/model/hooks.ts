import { AppDispatch, RootState } from "@/app/store";
import { GetBudgetDto, UpdateBudgetRecordDto } from "@/shared";
import { useDispatch, useSelector } from "react-redux";
import { ServiceStatus } from "../types";
import { createBudget, getBudget, updateBudgetRecord } from "./services";

export const useAction = () => {
  const dispatch: AppDispatch = useDispatch();

  return {
    createBudget: (payload: Date) => dispatch(createBudget(payload)),
    getBudget: (payload: GetBudgetDto) => dispatch(getBudget(payload)),
    updateBudgetRecord: (payload: UpdateBudgetRecordDto) =>
      dispatch(updateBudgetRecord(payload)),
  };
};

export const useServiceStatus = (): ServiceStatus => {
  const slice = useSelector((state: RootState) => state.budgetSlice);
  return {
    error: slice.error,
    isIdle: slice.loading === "idle",
    isError: slice.loading === "error",
    isPending: slice.loading === "loading",
    isSuccess: slice.loading === "loaded",
  };
};
