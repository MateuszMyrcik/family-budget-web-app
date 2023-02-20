import type { AppProps } from "next/app";
import "@/app/globals.css";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("preline" as any);
  }, []);

  return <Component {...pageProps} />;
}
