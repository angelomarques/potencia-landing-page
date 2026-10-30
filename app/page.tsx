import type { Metadata } from "next";
import { HomePageView } from "@/components/home/home-page-view";
import { getHomeMessages } from "@/lib/i18n/home-catalog";
import { getRequestPresentation } from "@/lib/regional/get-request-presentation";

type HomePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  searchParams,
}: HomePageProps): Promise<Metadata> {
  const sp = await searchParams;
  const presentation = await getRequestPresentation(sp);
  const messages = getHomeMessages(presentation.locale);

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
  };
}

export default async function Page({ searchParams }: HomePageProps) {
  const sp = await searchParams;
  const presentation = await getRequestPresentation(sp);
  const messages = getHomeMessages(presentation.locale);
  const year = new Date().getFullYear();

  return (
    <HomePageView
      messages={messages}
      presentation={presentation}
      year={year}
    />
  );
}
