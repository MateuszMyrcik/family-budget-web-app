import { useDispatch } from "react-redux";
import { getUser } from "./slice";

export const useAction = () => {
  const dispatch = useDispatch();

  return {
    getUser: () => dispatch(getUser()),
  };
};
