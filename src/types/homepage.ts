import type { Cta, MediaAsset, Footer } from "./common";

export type HomePageType = "HOMEPAGE";

export interface HeroContentBlock {
  type: "HERO";
  title: string;
  subtitle: string;
  description: string;
  backgroundAsset: MediaAsset;
  foregroundAsset: MediaAsset;
}

export type OfficeCardLayout = "default" | "wide";

export interface OfficeCard {
  id: string;
  type: "CARD";
  layout?: OfficeCardLayout;
  title: string;
  subtitle: string;
  description: string;
  backgroundAsset: MediaAsset;
  cta?: Cta;
}

export interface CardGridContentBlock {
  type: "CARD_GRID";
  title: string;
  cards: OfficeCard[];
}

export type HomeContentBlock = HeroContentBlock | CardGridContentBlock;

export interface HomePageData {
  title: string;
  keywords: string;
  pageType: HomePageType;
  content: HomeContentBlock[];
  footer: Footer;
}

export function isHeroContentBlock(
  block: HomeContentBlock,
): block is HeroContentBlock {
  return block.type === "HERO";
}

export function isCardGridContentBlock(
  block: HomeContentBlock,
): block is CardGridContentBlock {
  return block.type === "CARD_GRID";
}
