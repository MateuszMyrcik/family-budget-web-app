import { RootState } from "@/app/store";
import { getExpenses } from "@/entities/expenses/model/slice";
import { useDispatch, useSelector } from "react-redux";

export const ExpensesManger = () => {
  const { expenses } = useSelector((state: RootState) => state.expensesSlice);
  const dispatch = useDispatch();

  console.log("expenses", expenses);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {/* <Input />s */}
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
