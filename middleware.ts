import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  TEST_COUNTRY_HEADER,
  TEST_COUNTRY_QUERY,
} from "@/lib/regional/resolve-country";

export function middleware(request: NextRequest) {
  const fromQuery = request.nextUrl.searchParams.get(TEST_COUNTRY_QUERY);
  if (!fromQuery?.trim()) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(
    TEST_COUNTRY_HEADER,
    fromQuery.trim().slice(0, 2).toUpperCase()
  );

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
