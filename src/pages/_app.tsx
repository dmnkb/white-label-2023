import "@/styles/globals.css";
import type { AppProps } from "next/app";

// eslint-disable-next-line import/no-default-export, prefer-arrow/prefer-arrow-functions
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
