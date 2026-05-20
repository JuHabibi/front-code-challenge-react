import type { Footer, MediaAsset } from "./common";

export type ArticlePageType = "ARTICLE";

export interface HeroArticleContentBlock {
  type: "HERO_ARTICLE";
  title: string;
  subtitle: string;
  author: string;
  publishingDate: string;
  backgroundAsset: MediaAsset;
  sideAsset: MediaAsset;
}

export interface ParagraphContentBlock {
  type: "PARAGRAPH";
  highlight: boolean;
  text: string;
}

export interface CarouselItem extends MediaAsset {
  description: string;
}

export interface CarouselContentBlock {
  type: "CAROUSEL";
  items: CarouselItem[];
}

export type ArticleContentBlock =
  | HeroArticleContentBlock
  | ParagraphContentBlock
  | CarouselContentBlock;

export interface ArticlePageData {
  title: string;
  keywords: string;
  pageType: ArticlePageType;
  content: ArticleContentBlock[];
  footer: Footer;
}
