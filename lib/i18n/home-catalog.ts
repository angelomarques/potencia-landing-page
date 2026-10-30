import type { AppLocale } from "@/lib/regional/visitor-presentation";

export type HomeMessages = {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    founder: string;
    contact: string;
    menuAria: string;
  };
  hero: {
    titleLead: string;
    titleHighlight: string;
    titleTail: string;
    body: string;
    ctaContact: string;
    ctaServices: string;
  };
  services: {
    title: string;
    description: string;
    cards: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
    ];
  };
  founder: {
    title: string;
    description: string;
    photoAlt: string;
    name: string;
    role: string;
    paragraphs: [string, string, string];
  };
  contact: {
    title: string;
    description: string;
    linkedInAria: string;
  };
  footer: {
    rights: (year: number) => string;
    aiContentLink: string;
  };
};

const ptBR: HomeMessages = {
  metadata: {
    title: "Potencia | Serviços de Software, Consultoria e Produtos",
    description:
      "Empresa brasileira de serviços de software, consultoria em tecnologia e desenvolvimento de produtos digitais.",
  },
  nav: {
    services: "Serviços",
    founder: "Quem comanda",
    contact: "Contato",
    menuAria: "Menu",
  },
  hero: {
    titleLead: "Software, consultoria e produtos que",
    titleHighlight: "impulsionam",
    titleTail: "seu negócio",
    body: "Somos uma empresa brasileira que oferece serviços de desenvolvimento de software, consultoria em tecnologia, criação de produtos digitais sob medida e soluções de IA.",
    ctaContact: "Fale conosco",
    ctaServices: "Ver serviços",
  },
  services: {
    title: "O que fazemos",
    description:
      "Soluções completas em tecnologia para empresas que querem crescer com qualidade e agilidade.",
    cards: [
      {
        title: "Serviços de software",
        description:
          "Desenvolvimento de sistemas, aplicações web e mobile, APIs e integrações sob demanda para o seu negócio.",
      },
      {
        title: "Consultoria",
        description:
          "Apoio estratégico em tecnologia: arquitetura, processos, escolha de ferramentas e transformação digital.",
      },
      {
        title: "Produtos de software",
        description:
          "Construção de produtos digitais próprios, do conceito ao lançamento, com foco em resultado e escalabilidade.",
      },
    ],
  },
  founder: {
    title: "Quem comanda",
    description:
      "Conheça quem está à frente da Potencia e traz a visão e a experiência para cada projeto.",
    photoAlt: "Foto de Ângelo Marques, fundador da Potência",
    name: "Ângelo Marques",
    role: "Fundador da Potencia",
    paragraphs: [
      "Tenho mais de 5 anos de experiência com desenvolvimento de software e já atuei em gestão de produtos. Uso inteligência artificial no dia a dia e também para apoiar os clientes em seus projetos.",
      "Já trabalhei em projetos de diversas áreas — financeiro, recrutamento, fiscal e e-commerce —, o que me permite entender contextos diferentes e entregar soluções alinhadas ao seu negócio.",
      "Se você precisa de um parceiro de tecnologia que entende o seu contexto e entrega com seriedade, estamos prontos para conversar.",
    ],
  },
  contact: {
    title: "Vamos conversar?",
    description: "Conte seu projeto ou dúvida. Respondemos em breve.",
    linkedInAria: "LinkedIn",
  },
  footer: {
    rights: (year) => `© ${year} Potencia. Todos os direitos reservados.`,
    aiContentLink: "Fotos de produto com IA",
  },
};

const en: HomeMessages = {
  metadata: {
    title: "Potencia | Software Services, Consulting, and Products",
    description:
      "Brazilian software development, technology consulting, and custom digital product studio.",
  },
  nav: {
    services: "Services",
    founder: "Who leads",
    contact: "Contact",
    menuAria: "Menu",
  },
  hero: {
    titleLead: "Software, consulting, and products that",
    titleHighlight: "power",
    titleTail: "your business",
    body: "We are a Brazilian company offering software development, technology consulting, bespoke digital product creation, and AI solutions.",
    ctaContact: "Talk to us",
    ctaServices: "See services",
  },
  services: {
    title: "What we do",
    description:
      "End-to-end technology solutions for companies that want to grow with quality and speed.",
    cards: [
      {
        title: "Software services",
        description:
          "Custom systems, web and mobile apps, APIs, and integrations built for your business.",
      },
      {
        title: "Consulting",
        description:
          "Technology strategy support: architecture, processes, tooling choices, and digital transformation.",
      },
      {
        title: "Software products",
        description:
          "Building our own digital products from concept to launch, focused on outcomes and scale.",
      },
    ],
  },
  founder: {
    title: "Who leads",
    description:
      "Meet the person behind Potencia and the vision and experience behind every project.",
    photoAlt: "Photo of Ângelo Marques, founder of Potencia",
    name: "Ângelo Marques",
    role: "Founder of Potencia",
    paragraphs: [
      "I have more than five years of software development experience and have worked in product management. I use artificial intelligence day to day and to support clients on their projects.",
      "I have delivered work across finance, recruiting, tax, and e-commerce, which helps me understand different contexts and ship solutions aligned with your business.",
      "If you need a technology partner who understands your context and delivers seriously, we are ready to talk.",
    ],
  },
  contact: {
    title: "Let's talk?",
    description: "Tell us about your project or question. We will reply soon.",
    linkedInAria: "LinkedIn",
  },
  footer: {
    rights: (year) => `© ${year} Potencia. All rights reserved.`,
    aiContentLink: "AI product photos",
  },
};

const HOME_CATALOG: Record<AppLocale, HomeMessages> = {
  en,
  "pt-BR": ptBR,
};

export function getHomeMessages(locale: AppLocale): HomeMessages {
  return HOME_CATALOG[locale];
}
