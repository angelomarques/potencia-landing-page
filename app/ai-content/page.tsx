import type { Metadata } from "next";
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
import { aiContentSamples } from "@/lib/ai-content-samples";

export const metadata: Metadata = {
  title: "AI product photos for small online shops | Potencia",
  description:
    "AI product photos and lifestyle imagery for small online shops. Studio-quality images for your store, marketplace listings and socials within 24 hours.",
  alternates: {
    canonical: "/ai-content",
  },
  openGraph: {
    title: "AI product photos for small online shops | Potencia",
    description:
      "AI product photos and lifestyle imagery for small online shops. Studio-quality images for your store, marketplace listings and socials within 24 hours.",
    url: "/ai-content",
    type: "website",
    locale: "en_IE",
    images: [
      {
        url: "/ai-content/butter-dish-kitchen.jpg",
        width: 1024,
        height: 1024,
        alt: "Ceramic butter dish styled on a cosy kitchen dresser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI product photos for small online shops | Potencia",
    description:
      "AI product photos and lifestyle imagery for small online shops. Studio-quality images for your store, marketplace listings and socials within 24 hours.",
    images: ["/ai-content/butter-dish-kitchen.jpg"],
  },
};

export default function AiContentPage() {
  return (
    <div lang="en" className="min-h-screen flex flex-col">
      {/* Header */}
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
              Work
            </a>
            <a
              href="#pricing"
              className="hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3 md:hidden">
            <Button asChild size="sm">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              AI content creation
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Product photos that sell,{" "}
              <span className="text-primary">without the photo shoot</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              I create AI product photos and lifestyle images for small online
              shops — send me your product photo, get scroll-stopping images for
              your store, marketplace listings and socials. Social posts and
              short videos coming soon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#work">See the work</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Get your images</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Recent work
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Sample AI images made for typical small-shop products. New
              samples are added regularly.
            </p>
            <div className="mt-10">
              <Gallery samples={aiContentSamples} />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              How it works
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              A straightforward process with quick turnaround and no complicated
              briefs.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <Camera className="size-5" />
                  </div>
                  <CardTitle>1. Send a photo of your product</CardTitle>
                  <CardDescription>
                    A phone photo is fine. Take a clear picture in decent light
                    against a simple backdrop.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <Sliders className="size-5" />
                  </div>
                  <CardTitle>
                    2. Tell me the style and where it will be used
                  </CardTitle>
                  <CardDescription>
                    Describe your shop aesthetic, preferred settings, and
                    whether you need images for product pages, hero banners, or
                    socials.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <Clock className="size-5" />
                  </div>
                  <CardTitle>3. Receive your images within 24 hours</CardTitle>
                  <CardDescription>
                    Get high-resolution, web-ready images delivered directly to
                    your inbox, ready to publish.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Pricing
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Simple flat rates with fast delivery. No subscription required.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl items-stretch">
              <Card className="flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <CardTitle className="text-lg">Single product</CardTitle>
                    <div className="mt-3 flex items-baseline">
                      <span className="text-4xl font-bold tracking-tight">
                        €29
                      </span>
                    </div>
                    <CardDescription className="mt-2 text-foreground/80 font-medium">
                      5 images of one product
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mt-2 space-y-2.5 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="size-4 text-primary shrink-0" />
                        <span>Delivered within 24 hours</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="size-4 text-primary shrink-0" />
                        <span>Web-ready high-resolution files</span>
                      </li>
                    </ul>
                  </CardContent>
                </div>
                <CardFooter className="pt-4">
                  <Button asChild className="w-full" size="lg">
                    <a href="mailto:angeloemanuelmarques@gmail.com?subject=AI%20product%20photos%20-%20Single%20product">
                      Order for €29
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col justify-between ring-2 ring-primary">
                <div>
                  <CardHeader>
                    <CardTitle className="text-lg">Small range</CardTitle>
                    <div className="mt-3 flex items-baseline">
                      <span className="text-4xl font-bold tracking-tight">
                        €79
                      </span>
                    </div>
                    <CardDescription className="mt-2 text-foreground/80 font-medium">
                      Images for 3 products (5 each)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mt-2 space-y-2.5 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="size-4 text-primary shrink-0" />
                        <span>Delivered within 24 hours</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="size-4 text-primary shrink-0" />
                        <span>Web-ready high-resolution files</span>
                      </li>
                    </ul>
                  </CardContent>
                </div>
                <CardFooter className="pt-4">
                  <Button asChild className="w-full" size="lg">
                    <a href="mailto:angeloemanuelmarques@gmail.com?subject=AI%20product%20photos%20-%20Small%20range">
                      Order for €79
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Let&apos;s make your product look its best
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Send me a product photo and a link to your shop — I&apos;ll reply
              within a day.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="mailto:angeloemanuelmarques@gmail.com">
                  <Mail className="mr-2 size-4" />
                  angeloemanuelmarques@gmail.com
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

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Potencia. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
