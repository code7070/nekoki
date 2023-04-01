import { getCookie } from "cookies-next";

export default async function getServerSideProps() {
  const theme = getCookie("nekotheme") || null;
  return { props: { theme } };
}
