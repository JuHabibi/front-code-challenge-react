import { ArticlePageView } from "@/components/article";
import { getArticlePageData } from "@/data/repositories/article-page.repository";

export default function ArticlePage() {
  const articlePageData = getArticlePageData();

  return <ArticlePageView data={articlePageData} />;
}
