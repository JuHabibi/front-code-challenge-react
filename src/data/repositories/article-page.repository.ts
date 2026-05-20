import articleJson from "@/data/article.json";
import type { ArticlePageData } from "@/types";

const articlePageData = articleJson as ArticlePageData;

export function getArticlePageData(): ArticlePageData {
  return articlePageData;
}
