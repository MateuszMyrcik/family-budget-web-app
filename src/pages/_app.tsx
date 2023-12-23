import "@/app/base.css";
import "@/app/globals.css";

import type { AppProps } from "next/app";

import { store } from "@/app/store";
import { Provider } from "react-redux";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { UserProvider } from "@auth0/nextjs-auth0/client";

import { LayoutProvider } from "@/app/layout";
import {
  WithScreenInterceptorProvider,
  WithThemeProvider,
  WithToastProvider,
} from "@/app";
import { appWithTranslation } from "next-i18next";
import pl from "date-fns/locale/pl";
import en from "date-fns/locale/en-US";
import { useLang } from "@/hooks/useLang";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { currentLang } = useLang();
  const locale = currentLang === "pl" ? pl : en;

  return (
    <UserProvider>
      <Provider store={store}>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={locale}
        >
          <WithThemeProvider>
            <WithToastProvider>
              <LayoutProvider>
                <WithScreenInterceptorProvider>
                  <Component {...pageProps} />
                </WithScreenInterceptorProvider>
              </LayoutProvider>
            </WithToastProvider>
          </WithThemeProvider>
        </LocalizationProvider>
      </Provider>
    </UserProvider>
  );
};

export default appWithTranslation(MyApp);
