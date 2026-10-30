export const TEST_COUNTRY_HEADER = "x-potencia-test-country";
export const TEST_COUNTRY_QUERY = "potencia-country";

const GEO_COUNTRY_HEADERS = ["x-vercel-ip-country", "cf-ipcountry"] as const;

function normalizeCountryCode(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim().toUpperCase();
  if (trimmed.length !== 2 || trimmed === "XX") return null;
  return trimmed;
}

export function resolveCountryCode(
  headers: Headers,
  searchParams?: Record<string, string | string[] | undefined>
): string {
  const queryValue = searchParams?.[TEST_COUNTRY_QUERY];
  const fromQuery =
    typeof queryValue === "string"
      ? normalizeCountryCode(queryValue)
      : Array.isArray(queryValue)
        ? normalizeCountryCode(queryValue[0])
        : null;
  if (fromQuery) return fromQuery;

  const fromTestHeader = normalizeCountryCode(
    headers.get(TEST_COUNTRY_HEADER)
  );
  if (fromTestHeader) return fromTestHeader;

  for (const headerName of GEO_COUNTRY_HEADERS) {
    const fromGeo = normalizeCountryCode(headers.get(headerName));
    if (fromGeo) return fromGeo;
  }

  return "US";
}
