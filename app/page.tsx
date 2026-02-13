import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, Lightbulb, Linkedin, Mail, Menu, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <span className="font-semibold text-lg">Potencia</span>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="#servicos"
              className="hover:text-foreground transition-colors"
            >
              Serviços
            </a>
            <a
              href="#fundador"
              className="hover:text-foreground transition-colors"
            >
              Quem comanda
            </a>
            <a
              href="#contato"
              className="hover:text-foreground transition-colors"
            >
              Contato
            </a>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            aria-label="Menu"
          >
            <Menu className="size-4" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Software, consultoria e produtos que{" "}
                <span className="text-primary">impulsionam</span> seu negócio
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Somos uma empresa brasileira que oferece serviços de
                desenvolvimento de software, consultoria em tecnologia e criação
                de produtos digitais sob medida.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#contato">Fale conosco</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#servicos">Ver serviços</a>
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

        {/* Serviços */}
        <section id="servicos" className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              O que fazemos
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Soluções completas em tecnologia para empresas que querem crescer
              com qualidade e agilidade.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <Code2 className="size-5" />
                  </div>
                  <CardTitle>Serviços de software</CardTitle>
                  <CardDescription>
                    Desenvolvimento de sistemas, aplicações web e mobile, APIs e
                    integrações sob demanda para o seu negócio.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <Lightbulb className="size-5" />
                  </div>
                  <CardTitle>Consultoria</CardTitle>
                  <CardDescription>
                    Apoio estratégico em tecnologia: arquitetura, processos,
                    escolha de ferramentas e transformação digital.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                    <Package className="size-5" />
                  </div>
                  <CardTitle>Produtos de software</CardTitle>
                  <CardDescription>
                    Construção de produtos digitais próprios, do conceito ao
                    lançamento, com foco em resultado e escalabilidade.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Quem comanda (Founder) */}
        <section id="fundador" className="border-t">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Quem comanda
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Conheça quem está à frente da Potencia e traz a visão e a
              experiência para cada projeto.
            </p>
            <div className="mt-10 flex flex-col md:flex-row gap-10 items-start">
              <div className="shrink-0">
                <div className="relative size-56 md:size-72 overflow-hidden rounded-2xl bg-muted ring-1 ring-border">
                  <Image
                    src="/owner.png"
                    alt="Foto de Ângelo Marques, fundador da Potência"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 224px, 288px"
                    priority
                  />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold">Ângelo Marques</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fundador da Potencia
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Tenho mais de 4 anos de experiência com desenvolvimento de
                  software e já atuei em gestão de produtos. Uso inteligência
                  artificial no dia a dia e também para apoiar os clientes em
                  seus projetos.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Já trabalhei em projetos de diversas áreas — financeiro,
                  recrutamento, fiscal e e-commerce —, o que me permite entender
                  contextos diferentes e entregar soluções alinhadas ao seu
                  negócio.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Se você precisa de um parceiro de tecnologia que entende o seu
                  contexto e entrega com seriedade, estamos prontos para
                  conversar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Vamos conversar?
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Conte seu projeto ou dúvida. Respondemos em breve.
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
