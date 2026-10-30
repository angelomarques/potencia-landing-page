/** ISO 3166-1 alpha-2 codes treated as geographic Europe for EUR pricing. */
const EU_MEMBER_STATES = new Set([
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
]);

const EEA_NON_EU = new Set(["IS", "LI", "NO"]);

const OTHER_EUROPEAN = new Set([
  "AL",
  "AD",
  "BA",
  "BY",
  "CH",
  "FO",
  "GB",
  "GG",
  "GI",
  "IM",
  "JE",
  "MC",
  "MD",
  "ME",
  "MK",
  "RS",
  "SM",
  "UA",
  "VA",
  "XK",
]);

export function isEuropeanCountry(countryCode: string): boolean {
  const code = countryCode.toUpperCase();
  return (
    EU_MEMBER_STATES.has(code) ||
    EEA_NON_EU.has(code) ||
    OTHER_EUROPEAN.has(code)
  );
}
