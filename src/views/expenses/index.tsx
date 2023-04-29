import { PrimaryTemplate } from "@/app/layout";
import { RootState, store } from "@/app/store";

import { Button } from "@mui/material";

import { useRouter } from "next/router";
import { Provider, useSelector } from "react-redux";

export const ExpensesView = () => {
  const { expenses } = useSelector((state: RootState) => state.expensesSlice);
  const { push } = useRouter();

  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <div className="w-10/12 mx-auto mt-4">
            <h1>Family budget | Expenses </h1>

            <Button
              onClick={() => {
                push("/expense");
              }}
            >
              Dodaj nowy wydatek
            </Button>

            <ul className="rounded-md">
              {expenses.map((expense, index) => (
                <li key={index} className="rounded-md border-gray-100 border-4">
                  <div className="flex flex-row justify-between">
                    <span className="text-2xl font-bold">{expense.name}</span>
                    <span className="text-2xl font-bold">
                      {expense.amount.value}
                    </span>
                  </div>
                  <span className="text-2xl font-bold">
                    {String(expense.date)}
                  </span>
                  <span className="text-lg font-bold">{expense.category}</span>
                </li>
              ))}
            </ul>
          </div>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};
