"use client";

import { store } from "@/app/store";
import { ExpensesManger } from "@/features/manage-expenses";
import { Provider } from "react-redux";

export const Dashboard = () => {
  const expenseManger = ExpensesManger ?? null;

  return (
    <>
      <Provider store={store}>
        <h1>Family budget | Dashboard </h1>
        <ExpensesManger></ExpensesManger>
      </Provider>
    </>
  );
};
