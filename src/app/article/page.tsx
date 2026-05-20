import type { Metadata } from "next";

import { ArticlePageView } from "@/components/article";
import { getArticlePageData } from "@/data/repositories/article-page.repository";

export function generateMetadata(): Metadata {
  const { title, keywords } = getArticlePageData();

  return {
    title,
    keywords: keywords.split(","),
  };
}

export default function ArticlePage() {
  const articlePageData = getArticlePageData();

  return <ArticlePageView data={articlePageData} />;
}
