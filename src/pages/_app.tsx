import type { AppProps } from "next/app";
import "@/app/globals.css";

import { Roboto } from "@next/font/google";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={roboto.className}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </div>
    </LocalizationProvider>
  );
}
