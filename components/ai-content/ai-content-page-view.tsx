import Image from "next/image";
import Link from "next/link";
import { Camera, Check, Clock, Linkedin, Mail, Sliders } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gallery } from "@/components/ai-content/gallery";
import type { AiContentMessages } from "@/lib/i18n/ai-content-catalog";
import type { AiContentSample } from "@/lib/ai-content-samples";
import type { VisitorPresentation } from "@/lib/regional/visitor-presentation";
import { getAiContentPricingDisplay } from "@/lib/regional/ai-content-pricing";

const CONTACT_EMAIL = "angeloemanuelmarques@gmail.com";

type AiContentPageViewProps = {
  messages: AiContentMessages;
  presentation: VisitorPresentation;
  samples: AiContentSample[];
  year: number;
};

export function AiContentPageView({
  messages,
  presentation,
  samples,
  year,
}: AiContentPageViewProps) {
  const prices = getAiContentPricingDisplay(
    presentation.currency,
    presentation.locale
  );
  const mailBase = `mailto:${CONTACT_EMAIL}`;

  return (
    <div lang={presentation.locale} className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-lg"
          >
            <Image
              src="/logo-no-bg.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            Potencia
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">
              {messages.nav.work}
            </a>
            <a
              href="#pricing"
              className="hover:text-foreground transition-colors"
            >
              {messages.nav.pricing}
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              {messages.nav.contact}
            </a>
          </nav>
          <div className="flex items-center gap-3 md:hidden">
            <Button asChild size="sm">
              <a href="#contact">{messages.nav.contactMobile}</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              {messages.hero.badge}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {messages.hero.titleLead}{" "}
              <span className="text-primary">{messages.hero.titleHighlight}</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {messages.hero.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#work">{messages.hero.ctaWork}</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">{messages.hero.ctaContact}</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="work" className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {messages.work.title}
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              {messages.work.description}
            </p>
            <div className="mt-10">
              <Gallery samples={samples} />
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {messages.howItWorks.title}
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              {messages.howItWorks.description}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <Camera className="size-5" />
                  </div>
                  <CardTitle>{messages.howItWorks.steps[0].title}</CardTitle>
                  <CardDescription>
                    {messages.howItWorks.steps[0].description}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <Sliders className="size-5" />
                  </div>
                  <CardTitle>{messages.howItWorks.steps[1].title}</CardTitle>
                  <CardDescription>
                    {messages.howItWorks.steps[1].description}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <Clock className="size-5" />
                  </div>
                  <CardTitle>{messages.howItWorks.steps[2].title}</CardTitle>
                  <CardDescription>
                    {messages.howItWorks.steps[2].description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {messages.pricing.title}
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              {messages.pricing.description}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl items-stretch">
              <Card className="flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {messages.pricing.singleProduct.title}
                    </CardTitle>
                    <div className="mt-3 flex items-baseline">
                      <span
                        className="text-4xl font-bold tracking-tight"
                        data-testid="price-single"
                      >
                        {prices.singleProduct}
                      </span>
                    </div>
                    <CardDescription className="mt-2 text-foreground/80 font-medium">
                      {messages.pricing.singleProduct.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mt-2 space-y-2.5 text-sm text-muted-foreground">
                      {messages.pricing.singleProduct.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="size-4 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardFooter className="pt-4">
                  <Button asChild className="w-full" size="lg">
                    <a
                      href={`${mailBase}?subject=${encodeURIComponent(messages.pricing.singleProduct.mailSubject)}`}
                      data-testid="order-single"
                    >
                      {messages.pricing.singleProduct.orderCta(prices.singleProduct)}
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col justify-between ring-2 ring-primary">
                <div>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {messages.pricing.smallRange.title}
                    </CardTitle>
                    <div className="mt-3 flex items-baseline">
                      <span
                        className="text-4xl font-bold tracking-tight"
                        data-testid="price-small-range"
                      >
                        {prices.smallRange}
                      </span>
                    </div>
                    <CardDescription className="mt-2 text-foreground/80 font-medium">
                      {messages.pricing.smallRange.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mt-2 space-y-2.5 text-sm text-muted-foreground">
                      {messages.pricing.smallRange.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="size-4 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardFooter className="pt-4">
                  <Button asChild className="w-full" size="lg">
                    <a
                      href={`${mailBase}?subject=${encodeURIComponent(messages.pricing.smallRange.mailSubject)}`}
                      data-testid="order-small-range"
                    >
                      {messages.pricing.smallRange.orderCta(prices.smallRange)}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {messages.contact.title}
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              {messages.contact.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={mailBase}>
                  <Mail className="mr-2 size-4" />
                  {CONTACT_EMAIL}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="https://www.linkedin.com/in/angelo-emanuel-marques-87265a196/"
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="mr-2 size-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          {messages.footer.rights(year)}
        </div>
      </footer>
    </div>
  );
}
