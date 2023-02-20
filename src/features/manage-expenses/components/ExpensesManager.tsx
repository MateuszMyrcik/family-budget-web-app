import { RootState } from "@/app/store";
import { getExpenses } from "@/entities/expenses/model/slice";
import { FormField } from "@/shared/ui-kit/forms";
import { useDispatch, useSelector } from "react-redux";

export const ExpensesManger = () => {
  const { expenses } = useSelector((state: RootState) => state.expensesSlice);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        onClick={() => {
          dispatch(getExpenses());
        }}
      >
        Get expenses
      </button>
      {expenses.map((expense, index) => (
        <ul key={index}>
          <li>{index}</li>
          {expense}
        </ul>
      ))}
    </>
  );
};
