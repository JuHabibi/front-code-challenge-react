import { HomePageView } from "@/components/home";
import { getHomePageData } from "@/data/repositories/home-page.repository";

export default function Home() {
  const homePageData = getHomePageData();

  return <HomePageView data={homePageData} />;
}
