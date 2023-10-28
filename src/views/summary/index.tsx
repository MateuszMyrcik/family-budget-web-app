/* eslint-disable @next/next/no-html-link-for-pages */
import { PrimaryTemplate } from "@/app/layout";
import { store } from "@/app/store";

import { Provider } from "react-redux";

export const SummaryView = () => {
  return (
    <>
      <Provider store={store}>
        <PrimaryTemplate>
          <PrimaryTemplate.Content title="Podsumowanie">
            <a href="/api/auth/login">Login</a>
            <a href="/api/auth/logout">Logout</a>
          </PrimaryTemplate.Content>
        </PrimaryTemplate>
      </Provider>
    </>
  );
};
