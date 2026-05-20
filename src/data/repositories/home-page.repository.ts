import homePageJson from "@/data/index.json";
import type { HomePageData } from "@/types";

const homePageData = homePageJson as HomePageData;

export function getHomePageData(): HomePageData {
  return homePageData;
}
