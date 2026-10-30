import { isEuropeanCountry } from "@/lib/regional/european-countries";

export type AppLocale = "en" | "pt-BR";

export type PricingCurrency = "USD" | "EUR" | "BRL";

export type VisitorPresentation = {
  countryCode: string;
  locale: AppLocale;
  currency: PricingCurrency;
};

export function resolveVisitorPresentation(
  countryCode: string
): VisitorPresentation {
  const normalized = countryCode.toUpperCase();
  const locale: AppLocale = normalized === "BR" ? "pt-BR" : "en";

  let currency: PricingCurrency = "USD";
  if (normalized === "BR") {
    currency = "BRL";
  } else if (isEuropeanCountry(normalized)) {
    currency = "EUR";
  }

  return {
    countryCode: normalized,
    locale,
    currency,
  };
}
