import {
  NotSpecificTransaction,
  TransactionCategory,
  TransactionDetails,
} from "@/shared/domain";
import { useDispatch } from "react-redux";
import {
  addCategory,
  addTransaction,
  getTransaction,
  removeCategory,
} from "./slice";

export const useAction = () => {
  const dispatch = useDispatch();

  return {
    addTransaction: (transaction: NotSpecificTransaction) =>
      dispatch(addTransaction(transaction)),
    getTransactions: () => dispatch(getTransaction()),
    addCategory: (category: TransactionDetails) =>
      dispatch(addCategory(category)),
    removeCategory: (id: TransactionCategory["id"]) =>
      dispatch(removeCategory(id)),
  };
};
