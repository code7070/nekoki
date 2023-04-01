import { setCookie } from "cookies-next";

export const setThemer = (name: string) => {
  setCookie("nekotheme", name);
  window.document.documentElement.setAttribute("data-theme", name);
};
