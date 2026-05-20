import type { Metadata } from "next";

import { HomePageView } from "@/components/home";
import { getHomePageData } from "@/data/repositories/home-page.repository";

export function generateMetadata(): Metadata {
  const { title, keywords } = getHomePageData();

  return {
    title,
    keywords: keywords.split(","),
  };
}

export default function Home() {
  const homePageData = getHomePageData();

  return <HomePageView data={homePageData} />;
}
