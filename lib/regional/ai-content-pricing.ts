import type { PricingCurrency } from "@/lib/regional/visitor-presentation";

/** List prices on /ai-content before regional conversion (EUR). */
export const AI_CONTENT_SOURCE_CURRENCY = "EUR" as const;

export const AI_CONTENT_PRICE_EUR = {
  singleProduct: 29,
  smallRange: 79,
} as const;

/**
 * Fixed FX from source currency EUR (ai-content page list prices).
 * Rates as of 2026-10-30 — display only; not fetched from a live FX API.
 */
export const EUR_FX_RATES = {
  USD: 1.08,
  BRL: 6.15,
} as const;

export type AiContentPriceKey = keyof typeof AI_CONTENT_PRICE_EUR;

function convertFromEur(
  amountEur: number,
  currency: PricingCurrency
): number {
  switch (currency) {
    case "EUR":
      return amountEur;
    case "USD":
      return Math.round(amountEur * EUR_FX_RATES.USD);
    case "BRL":
      return Math.round(amountEur * EUR_FX_RATES.BRL);
    default: {
      const _exhaustive: never = currency;
      return _exhaustive;
    }
  }
}

export function getAiContentPriceAmount(
  tier: AiContentPriceKey,
  currency: PricingCurrency
): number {
  return convertFromEur(AI_CONTENT_PRICE_EUR[tier], currency);
}

export function formatAiContentPrice(
  tier: AiContentPriceKey,
  currency: PricingCurrency,
  locale: "en" | "pt-BR"
): string {
  const amount = getAiContentPriceAmount(tier, currency);
  const intlLocale = locale === "pt-BR" ? "pt-BR" : "en-US";

  switch (currency) {
    case "EUR":
      return new Intl.NumberFormat(intlLocale, {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);
    case "USD":
      return new Intl.NumberFormat(intlLocale, {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);
    case "BRL":
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(amount);
    default: {
      const _exhaustive: never = currency;
      return _exhaustive;
    }
  }
}

export function getAiContentPricingDisplay(
  currency: PricingCurrency,
  locale: "en" | "pt-BR"
) {
  return {
    singleProduct: formatAiContentPrice("singleProduct", currency, locale),
    smallRange: formatAiContentPrice("smallRange", currency, locale),
  };
}
