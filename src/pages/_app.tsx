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
import { LayoutProvider } from "@/app/layout";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "400", "500", "700"],
});

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#F8FAFC",
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          gap: 24,
          paddingBottom: 24,
        },
      },
    },
  },
  typography: {
    button: {
      // fontFamily: roboto
      textTransform: "capitalize",
    },
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    background: {
      default: "#ffffff",
    },
    primary: {
      light: "#eef2f6",
      main: "#2196f3",
      dark: "#1e88e5",
      contrastText: "#ffffff",
    },
    // secondary: {
    //   light: "#ede7f6",
    //   main: "#673ab7",
    //   dark: "#5e35b1",
    //   contrastText: "#ffffff",
    // },
    success: {
      light: "#b9f6ca",
      main: "#00e676",
      dark: "#00c853",
    },
    error: {
      light: "#ef9a9a",
      main: "#f44336",
      dark: "#c62828",
    },
    // warning: {
    //   light: "#fff8e1",
    //   main: "#ffe57f",
    //   dark: "#ffc107",
    // },
    // info: {
    //   light: "#eef2f6",
    //   main: "#2196f3",
    //   dark: "#1e88e5",
    // },
    // grey: {
    //   50: "#F8FAFC",
    //   100: "#EEF2F6",
    //   200: "#E3E8EF",
    //   300: "#CDD5DF",
    //   500: "#697586",
    //   600: "#4B5565",
    //   700: "#364152",
    //   900: "#121926",
    // },
    text: {
      primary: "#212121",
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const containerClasses = clsx(roboto.className);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
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
}
