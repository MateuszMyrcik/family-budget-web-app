"use client";

import { DefaultTemplate } from "@/app/layout";
import { store } from "@/app/store";
import { ExpensesManger } from "@/features/manage-expenses";
import { Provider } from "react-redux";

export const ExpensesView = () => {
  return (
    <>
      <Provider store={store}>
        <DefaultTemplate>
          <>
            <h1>Family budget | Expenses </h1>
            <ExpensesManger></ExpensesManger>
          </>
        </DefaultTemplate>
      </Provider>
    </>
  );
};
