import "@/styles/globals.css";
import "@/styles/paw.scss";
import type { AppProps } from "next/app";
import { getCookie } from "cookies-next";
import { useEffect } from "react";
import Paw from "@/components/paw";

export default function App({ Component, pageProps }: AppProps) {
  const theme = getCookie("nekotheme");

  useEffect(() => {
    console.log("IN APP: ", theme);
    window.document.documentElement.setAttribute("data-theme", `${theme}`);
  });

  return (
    <main>
      <Component {...pageProps} />
      <Paw />
    </main>
  );
}
