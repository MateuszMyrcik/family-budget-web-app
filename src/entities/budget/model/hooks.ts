import { useDispatch } from "react-redux";
import {
  addNewBudget,
  getBudget,
  getBudgets,
  UpdateBudgetEntity,
  updateBudgetEntity,
} from "./slice";

export const useAction = () => {
  const dispatch = useDispatch();

  return {
    updateBudgetEntity: (payload: UpdateBudgetEntity) =>
      dispatch(updateBudgetEntity(payload)),
    addNewBudget: (date: Date) => dispatch(addNewBudget(date)),
    getBudgets: () => dispatch(getBudgets()),
    getBudget: (date: Date) => dispatch(getBudget(date)),
  };
};
