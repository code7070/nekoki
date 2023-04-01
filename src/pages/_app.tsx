import "@/styles/global.scss";
import type { AppProps } from "next/app";
import { getCookie } from "cookies-next";
import { Balsamiq_Sans } from "next/font/google";
import { useEffect } from "react";
import Paw from "@/components/paw";

const font = Balsamiq_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  const theme = getCookie("nekotheme");

  useEffect(() => {
    console.log("IN APP: ", theme);
    window.document.documentElement.setAttribute("data-theme", `${theme}`);
  });

  return (
    <main className={font.className}>
      <Component {...pageProps} />
      <Paw />
    </main>
  );
}
