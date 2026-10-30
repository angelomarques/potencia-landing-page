import Image from "next/image";
import Link from "next/link";
import { Code2, Lightbulb, Linkedin, Mail, Menu, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { HomeMessages } from "@/lib/i18n/home-catalog";
import type { VisitorPresentation } from "@/lib/regional/visitor-presentation";

const CONTACT_EMAIL = "angeloemanuelmarques@gmail.com";

type HomePageViewProps = {
  messages: HomeMessages;
  presentation: VisitorPresentation;
  year: number;
};

export function HomePageView({
  messages,
  presentation,
  year,
}: HomePageViewProps) {
  return (
    <div lang={presentation.locale} className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2 font-semibold text-lg">
            <Image
              src="/logo-no-bg.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            Potencia
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="#servicos"
              className="hover:text-foreground transition-colors"
            >
              {messages.nav.services}
            </a>
            <a
              href="#fundador"
              className="hover:text-foreground transition-colors"
            >
              {messages.nav.founder}
            </a>
            <a
              href="#contato"
              className="hover:text-foreground transition-colors"
            >
              {messages.nav.contact}
            </a>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            aria-label={messages.nav.menuAria}
          >
            <Menu className="size-4" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {messages.hero.titleLead}{" "}
                <span className="text-primary">{messages.hero.titleHighlight}</span>{" "}
                {messages.hero.titleTail}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">{messages.hero.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#contato">{messages.hero.ctaContact}</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#servicos">{messages.hero.ctaServices}</a>
                </Button>
              </div>
            </div>
            <div className="shrink-0 flex justify-center lg:justify-end">
              <Image
                src="/hero.svg"
                alt=""
                width={744}
                height={800}
                className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto"
              />
            </div>
          </div>
        </section>

        <section id="servicos" className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {messages.services.title}
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              {messages.services.description}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <Code2 className="size-5" />
                  </div>
                  <CardTitle>{messages.services.cards[0].title}</CardTitle>
                  <CardDescription>
                    {messages.services.cards[0].description}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <Lightbulb className="size-5" />
                  </div>
                  <CardTitle>{messages.services.cards[1].title}</CardTitle>
                  <CardDescription>
                    {messages.services.cards[1].description}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <Package className="size-5" />
                  </div>
                  <CardTitle>{messages.services.cards[2].title}</CardTitle>
                  <CardDescription>
                    {messages.services.cards[2].description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <p className="mt-10 max-w-xl text-sm text-muted-foreground">
              <Link
                href="/ai-content"
                className="hover:text-foreground transition-colors"
                data-testid="services-ai-content-link"
              >
                {messages.footer.aiContentLink}
              </Link>
            </p>
          </div>
        </section>

        <section id="fundador" className="border-t">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {messages.founder.title}
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              {messages.founder.description}
            </p>
            <div className="mt-10 flex flex-col md:flex-row gap-10 items-start">
              <div className="shrink-0">
                <div className="relative size-56 md:size-72 overflow-hidden rounded-2xl bg-muted ring-1 ring-border">
                  <Image
                    src="/owner.png"
                    alt={messages.founder.photoAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 224px, 288px"
                    priority
                  />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold">{messages.founder.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {messages.founder.role}
                </p>
                {messages.founder.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="mt-4 text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {messages.contact.title}
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              {messages.contact.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  <Mail className="mr-2 size-4" />
                  {CONTACT_EMAIL}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="https://www.linkedin.com/in/angelo-emanuel-marques-87265a196/"
                  target="_blank"
                  rel="noopener"
                  aria-label={messages.contact.linkedInAria}
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
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span>{messages.footer.rights(year)}</span>
          <span className="hidden sm:inline" aria-hidden="true">
            ·
          </span>
          <Link
            href="/ai-content"
            className="hover:text-foreground transition-colors"
          >
            {messages.footer.aiContentLink}
          </Link>
        </div>
      </footer>
    </div>
  );
}
