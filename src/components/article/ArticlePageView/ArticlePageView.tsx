import { assertNever } from "@/lib/assert-never";
import type { ArticleContentBlock, ArticlePageData } from "@/types";
import { Footer, Header } from "@/components/layout";

import { CarouselSection } from "../CarouselSection";
import { HeroArticleSection } from "../HeroArticleSection";
import { ParagraphSection } from "../ParagraphSection";
import { BackButton } from "./BackButton";

import styles from "./ArticlePageView.module.scss";

type ArticlePageViewProps = {
  data: ArticlePageData;
};

function renderContentBlock(block: ArticleContentBlock, index: number) {
  const key = `${block.type}-${index}`;

  switch (block.type) {
    case "HERO_ARTICLE":
      return <HeroArticleSection key={key} {...block} />;
    case "PARAGRAPH":
      return <ParagraphSection key={key} {...block} />;
    case "CAROUSEL":
      return <CarouselSection key={key} {...block} />;
    default:
      return assertNever(block);
  }
}

export function ArticlePageView({ data }: ArticlePageViewProps) {
  return (
    <>
      <Header title={data.title} />
      <main>
        <div className={styles.backBar}>
          <BackButton />
        </div>
        <div className="container">{data.content.map(renderContentBlock)}</div>
      </main>
      <Footer {...data.footer} />
    </>
  );
}
