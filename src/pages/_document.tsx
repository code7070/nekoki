import { getCookie } from "cookies-next";
import { Html, Head, Main, NextScript } from "next/document";

export function getServerSideProps() {
  const theme = getCookie("nekotheme", { domain: "localhost", path: "/" });
  return { props: { theme } };
}

export default function Document(props: any) {
  let theme: any = "";
  theme = getCookie("nekotheme", { domain: "localhost", path: "/" });

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
