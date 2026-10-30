import { expect, test } from "@playwright/test";
import {
  formatAiContentPrice,
  getAiContentPriceAmount,
} from "../lib/regional/ai-content-pricing";

test.describe("AI content locale and regional pricing", () => {
  test("default US visitor sees English copy and USD prices", async ({ page }) => {
    await page.goto("/ai-content?potencia-country=US");

    await expect(page.locator("div[lang='en']")).toBeVisible();
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /Product photos that sell/i,
      })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Pricing" })).toBeVisible();

    const expectedSingle = formatAiContentPrice("singleProduct", "USD", "en");
    const expectedRange = formatAiContentPrice("smallRange", "USD", "en");
    await expect(page.getByTestId("price-single")).toHaveText(expectedSingle);
    await expect(page.getByTestId("price-small-range")).toHaveText(expectedRange);
    expect(getAiContentPriceAmount("singleProduct", "USD")).toBe(31);
    expect(getAiContentPriceAmount("smallRange", "USD")).toBe(85);
  });

  test("Brazil visitor sees pt-BR copy and BRL prices", async ({ page }) => {
    await page.goto("/ai-content?potencia-country=BR");

    await expect(page.locator("div[lang='pt-BR']")).toBeVisible();
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /Fotos de produto que vendem/i,
      })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Preços" })).toBeVisible();

    const expectedSingle = formatAiContentPrice("singleProduct", "BRL", "pt-BR");
    const expectedRange = formatAiContentPrice("smallRange", "BRL", "pt-BR");
    await expect(page.getByTestId("price-single")).toHaveText(expectedSingle);
    await expect(page.getByTestId("price-small-range")).toHaveText(expectedRange);
    expect(getAiContentPriceAmount("singleProduct", "BRL")).toBe(178);
    expect(getAiContentPriceAmount("smallRange", "BRL")).toBe(486);
  });

  test("European visitor sees English copy and EUR list prices", async ({
    page,
  }) => {
    await page.goto("/ai-content?potencia-country=DE");

    await expect(page.locator("div[lang='en']")).toBeVisible();
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /Product photos that sell/i,
      })
    ).toBeVisible();

    await expect(page.getByTestId("price-single")).toHaveText("€29");
    await expect(page.getByTestId("price-small-range")).toHaveText("€79");
  });

  test("test country override via request header", async ({ browser }) => {
    const context = await browser.newContext({
      extraHTTPHeaders: {
        "x-potencia-test-country": "FR",
      },
    });
    const page = await context.newPage();
    await page.goto("/ai-content");

    await expect(page.getByTestId("price-single")).toHaveText("€29");
    await context.close();
  });
});

test.describe("PR evidence screenshots", () => {
  test("capture regional pricing states", async ({ page }) => {
    const cases = [
      { country: "US", file: "us-en-usd.png" },
      { country: "BR", file: "br-pt-brl.png" },
      { country: "DE", file: "de-en-eur.png" },
    ] as const;

    for (const { country, file } of cases) {
      await page.goto(`/ai-content?potencia-country=${country}`);
      await page.locator("#pricing").scrollIntoViewIfNeeded();
      await page.screenshot({
        path: `docs/pr-evidence/i18n-regional-pricing/${file}`,
        fullPage: false,
      });
    }
  });
});
