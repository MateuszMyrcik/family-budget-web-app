import "@/app/base.css";
import "@/app/globals.css";

import type { AppProps } from "next/app";

import { Roboto } from "@next/font/google";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import clsx from "clsx";

import { LayoutProvider } from "@/app/layout";
import { ThemeProvider } from "@/app";
import { appWithTranslation } from "next-i18next";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "400", "500", "700"],
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const containerClasses = clsx(roboto.className);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider>
        <LayoutProvider>
          <div className={containerClasses}>
            <div className=""></div>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </div>
        </LayoutProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default appWithTranslation(MyApp);
