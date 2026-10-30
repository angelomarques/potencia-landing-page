import type { Metadata } from "next";
import { AiContentPageView } from "@/components/ai-content/ai-content-page-view";
import { aiContentSamples } from "@/lib/ai-content-samples";
import { getAiContentMessages } from "@/lib/i18n/ai-content-catalog";
import { getRequestPresentation } from "@/lib/regional/get-request-presentation";
import type { AppLocale } from "@/lib/regional/visitor-presentation";

type AiContentPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function openGraphLocale(locale: AppLocale): string {
  return locale === "pt-BR" ? "pt_BR" : "en_US";
}

export async function generateMetadata({
  searchParams,
}: AiContentPageProps): Promise<Metadata> {
  const sp = await searchParams;
  const presentation = await getRequestPresentation(sp);
  const messages = getAiContentMessages(presentation.locale);

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    alternates: {
      canonical: "/ai-content",
    },
    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description,
      url: "/ai-content",
      type: "website",
      locale: openGraphLocale(presentation.locale),
      images: [
        {
          url: "/ai-content/butter-dish-kitchen.jpg",
          width: 1024,
          height: 1024,
          alt: messages.metadata.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.metadata.title,
      description: messages.metadata.description,
      images: ["/ai-content/butter-dish-kitchen.jpg"],
    },
  };
}

export default async function AiContentPage({ searchParams }: AiContentPageProps) {
  const sp = await searchParams;
  const presentation = await getRequestPresentation(sp);
  const messages = getAiContentMessages(presentation.locale);
  const year = new Date().getFullYear();

  return (
    <AiContentPageView
      messages={messages}
      presentation={presentation}
      samples={aiContentSamples}
      year={year}
    />
  );
}
