"use client";

import { DefaultTemplate } from "@/app/layout";
import { store } from "@/app/store";
import { Provider } from "react-redux";

export const SummaryView = () => {
  return (
    <>
      <Provider store={store}>
        <DefaultTemplate>
          <>
            <h1>Family budget | Summary </h1>
          </>
        </DefaultTemplate>
      </Provider>
    </>
  );
};
