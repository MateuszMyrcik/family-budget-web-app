import "@/app/base.css";
import "@/app/globals.css";

import type { AppProps } from "next/app";

import { Roboto } from "@next/font/google";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import clsx from "clsx";
import { createTheme, ThemeProvider } from "@mui/material";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
});

const theme = createTheme({
  palette: {
    primary: {
      light: "#E3F2FD",
      main: "#2196F3",
      dark: "#1565C0",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#EDE7F6",
      main: "#673AB7",
      dark: "#4527A0",
      contrastText: "#FFFFFF",
    },
    success: {
      light: "#B9F6CA",
      main: "#69F0AE",
      dark: "#00C853",
    },
    error: {
      light: "#EF9A9A",
      main: "#F44336",
      dark: "#C62828",
    },
    warning: {
      light: "#B9F6CA",
      main: "#FFC107",
      dark: "#FFC107",
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const containerClasses = clsx(roboto.className, "min-h-screen bg-gradient");
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <div className={containerClasses}>
          <div className=""></div>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </div>
      </ThemeProvider>
    </LocalizationProvider>
  );
}
