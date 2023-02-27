"use client";

import { DefaultTemplate } from "@/app/layout";
import { store } from "@/app/store";
import { Provider } from "react-redux";

export const StatsView = () => {
  return (
    <>
      <Provider store={store}>
        <DefaultTemplate>
          <>
            <h1>Family budget | Stats </h1>
          </>
        </DefaultTemplate>
      </Provider>
    </>
  );
};
