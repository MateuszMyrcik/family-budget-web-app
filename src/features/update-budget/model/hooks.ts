import { Budget } from "@/shared/domain";
import { useDispatch } from "react-redux";
import { dateChanged } from "./slice";

export const useAction = () => {
  const dispatch = useDispatch();

  return {
    dateChanged: (date: Date, budgets: Budget[]) =>
      dispatch(dateChanged({ date, budgets })),
  };
};
