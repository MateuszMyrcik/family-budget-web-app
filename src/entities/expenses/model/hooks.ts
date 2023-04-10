import { Expense } from "@/shared/domain/types/shared";
import { useDispatch } from "react-redux";
import { addExpense, getExpenses } from "./slice";

export const useAction = () => {
  const dispatch = useDispatch();

  return {
    addExpense: (expense: Expense) => dispatch(addExpense(expense)),
    getExpenses: () => dispatch(getExpenses()),
  };
};
