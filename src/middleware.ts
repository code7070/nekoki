import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/"],
};

export default function middleware(request: NextRequest) {
  const { cookies, nextUrl } = request;
  const url = nextUrl.clone();
  const res = NextResponse.rewrite(url);

  const theme = cookies.get("nekotheme");

  if (!theme) {
    console.log("No Theme!!");
    res.cookies.set("nekotheme", "halloween");
  }

  return res;
}
