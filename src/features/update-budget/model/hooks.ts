import { Budget, BudgetRecord } from "@/shared/domain";
import { useDispatch } from "react-redux";
import { dateChanged } from "./slice";

export const useAction = () => {
  const dispatch = useDispatch();

  return {
    dateChanged: (date: Date) => dispatch(dateChanged({ date })),
  };
};
