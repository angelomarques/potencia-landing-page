import { headers } from "next/headers";
import { resolveCountryCode } from "@/lib/regional/resolve-country";
import { resolveVisitorPresentation } from "@/lib/regional/visitor-presentation";

export async function getRequestPresentation(
  searchParams?: Record<string, string | string[] | undefined>
) {
  const headerList = await headers();
  const countryCode = resolveCountryCode(headerList, searchParams);
  return resolveVisitorPresentation(countryCode);
}
