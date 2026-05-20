import { assertNever } from "@/lib/assert-never";
import type { HomeContentBlock, HomePageData } from "@/types";

import { Header } from "../layout";
import { CardGridSection } from "./CardGridSection";
import { HeroSection } from "./HeroSection";
import { Footer } from "../layout";

type HomePageViewProps = {
  data: HomePageData;
};

function renderContentBlock(block: HomeContentBlock, index: number) {
  const key = `${block.type}-${index}`;

  switch (block.type) {
    case "HERO":
      return <HeroSection key={key} {...block} />;
    case "CARD_GRID":
      return <CardGridSection key={key} {...block} />;
    default:
      return assertNever(block);
  }
}

export function HomePageView({ data }: HomePageViewProps) {
  return (
    <main>
      <Header title={data.title} />
      <div className="container">
        {data.content.map(renderContentBlock)}
      </div>
        <Footer {...data.footer} />
     
    </main>
  );
}
