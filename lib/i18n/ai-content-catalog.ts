import type { AppLocale } from "@/lib/regional/visitor-presentation";

export type AiContentMessages = {
  metadata: {
    title: string;
    description: string;
    ogImageAlt: string;
  };
  nav: {
    work: string;
    pricing: string;
    contact: string;
    contactMobile: string;
  };
  hero: {
    badge: string;
    titleLead: string;
    titleHighlight: string;
    body: string;
    ctaWork: string;
    ctaContact: string;
  };
  work: {
    title: string;
    description: string;
  };
  howItWorks: {
    title: string;
    description: string;
    steps: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
    ];
  };
  pricing: {
    title: string;
    description: string;
    singleProduct: {
      title: string;
      subtitle: string;
      features: [string, string];
      orderCta: (price: string) => string;
      mailSubject: string;
    };
    smallRange: {
      title: string;
      subtitle: string;
      features: [string, string];
      orderCta: (price: string) => string;
      mailSubject: string;
    };
  };
  contact: {
    title: string;
    description: string;
  };
  footer: {
    rights: (year: number) => string;
  };
};

const en: AiContentMessages = {
  metadata: {
    title: "AI product photos for small online shops | Potencia",
    description:
      "AI product photos and lifestyle imagery for small online shops. Studio-quality images for your store, marketplace listings and socials within 24 hours.",
    ogImageAlt: "Ceramic butter dish styled on a cosy kitchen dresser",
  },
  nav: {
    work: "Work",
    pricing: "Pricing",
    contact: "Contact",
    contactMobile: "Contact",
  },
  hero: {
    badge: "AI content creation",
    titleLead: "Product photos that sell,",
    titleHighlight: "without the photo shoot",
    body: "I create AI product photos and lifestyle images for small online shops — send me your product photo, get scroll-stopping images for your store, marketplace listings and socials. Social posts and short videos coming soon.",
    ctaWork: "See the work",
    ctaContact: "Get your images",
  },
  work: {
    title: "Recent work",
    description:
      "Sample AI images made for typical small-shop products. New samples are added regularly.",
  },
  howItWorks: {
    title: "How it works",
    description:
      "A straightforward process with quick turnaround and no complicated briefs.",
    steps: [
      {
        title: "1. Send a photo of your product",
        description:
          "A phone photo is fine. Take a clear picture in decent light against a simple backdrop.",
      },
      {
        title: "2. Tell me the style and where it will be used",
        description:
          "Describe your shop aesthetic, preferred settings, and whether you need images for product pages, hero banners, or socials.",
      },
      {
        title: "3. Receive your images within 24 hours",
        description:
          "Get high-resolution, web-ready images delivered directly to your inbox, ready to publish.",
      },
    ],
  },
  pricing: {
    title: "Pricing",
    description: "Simple flat rates with fast delivery. No subscription required.",
    singleProduct: {
      title: "Single product",
      subtitle: "5 images of one product",
      features: ["Delivered within 24 hours", "Web-ready high-resolution files"],
      orderCta: (price) => `Order for ${price}`,
      mailSubject: "AI product photos - Single product",
    },
    smallRange: {
      title: "Small range",
      subtitle: "Images for 3 products (5 each)",
      features: ["Delivered within 24 hours", "Web-ready high-resolution files"],
      orderCta: (price) => `Order for ${price}`,
      mailSubject: "AI product photos - Small range",
    },
  },
  contact: {
    title: "Let's make your product look its best",
    description:
      "Send me a product photo and a link to your shop — I'll reply within a day.",
  },
  footer: {
    rights: (year) => `© ${year} Potencia. All rights reserved.`,
  },
};

const ptBR: AiContentMessages = {
  metadata: {
    title: "Fotos de produto com IA para lojas online | Potencia",
    description:
      "Fotos de produto e imagens lifestyle com IA para pequenas lojas online. Imagens com qualidade de estúdio para sua loja, marketplaces e redes sociais em até 24 horas.",
    ogImageAlt:
      "Manteigueira de cerâmica estilizada em uma cômoda de cozinha aconchegante",
  },
  nav: {
    work: "Trabalhos",
    pricing: "Preços",
    contact: "Contato",
    contactMobile: "Contato",
  },
  hero: {
    badge: "Criação de conteúdo com IA",
    titleLead: "Fotos de produto que vendem,",
    titleHighlight: "sem sessão de fotos",
    body: "Crio fotos de produto e imagens lifestyle com IA para pequenas lojas online — envie a foto do seu produto e receba imagens que param o scroll para sua loja, marketplaces e redes sociais. Posts e vídeos curtos em breve.",
    ctaWork: "Ver trabalhos",
    ctaContact: "Quero minhas imagens",
  },
  work: {
    title: "Trabalhos recentes",
    description:
      "Amostras de imagens com IA para produtos típicos de lojas pequenas. Novas amostras são adicionadas com frequência.",
  },
  howItWorks: {
    title: "Como funciona",
    description:
      "Processo simples, prazo curto e sem briefings complicados.",
    steps: [
      {
        title: "1. Envie uma foto do seu produto",
        description:
          "Uma foto de celular serve. Faça uma imagem nítida, com boa luz e fundo simples.",
      },
      {
        title: "2. Conte o estilo e onde vai usar",
        description:
          "Descreva a estética da sua loja, ambientes preferidos e se precisa de imagens para páginas de produto, banners ou redes sociais.",
      },
      {
        title: "3. Receba suas imagens em até 24 horas",
        description:
          "Arquivos em alta resolução, prontos para web, enviados direto para seu e-mail.",
      },
    ],
  },
  pricing: {
    title: "Preços",
    description:
      "Valores fixos simples com entrega rápida. Sem assinatura.",
    singleProduct: {
      title: "Produto único",
      subtitle: "5 imagens de um produto",
      features: [
        "Entrega em até 24 horas",
        "Arquivos em alta resolução prontos para web",
      ],
      orderCta: (price) => `Pedir por ${price}`,
      mailSubject: "Fotos de produto com IA - Produto único",
    },
    smallRange: {
      title: "Linha pequena",
      subtitle: "Imagens para 3 produtos (5 de cada)",
      features: [
        "Entrega em até 24 horas",
        "Arquivos em alta resolução prontos para web",
      ],
      orderCta: (price) => `Pedir por ${price}`,
      mailSubject: "Fotos de produto com IA - Linha pequena",
    },
  },
  contact: {
    title: "Vamos deixar seu produto ainda melhor",
    description:
      "Envie uma foto do produto e o link da sua loja — respondo em até um dia.",
  },
  footer: {
    rights: (year) => `© ${year} Potencia. Todos os direitos reservados.`,
  },
};

const AI_CONTENT_CATALOG: Record<AppLocale, AiContentMessages> = {
  en,
  "pt-BR": ptBR,
};

export function getAiContentMessages(locale: AppLocale): AiContentMessages {
  return AI_CONTENT_CATALOG[locale];
}
