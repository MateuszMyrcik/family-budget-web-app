import { NotSpecificTransaction } from "@/shared/domain";
import { useDispatch } from "react-redux";
import { addTransaction, getTransaction } from "./slice";

export const useAction = () => {
  const dispatch = useDispatch();

  return {
    addTransaction: (transaction: NotSpecificTransaction) =>
      dispatch(addTransaction(transaction)),
    getTransactions: () => dispatch(getTransaction()),
  };
};
