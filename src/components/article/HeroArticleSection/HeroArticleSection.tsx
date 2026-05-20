import type { HeroArticleContentBlock } from "@/types";

type HeroArticleSectionProps = HeroArticleContentBlock;

export function HeroArticleSection({
  title,
  subtitle,
  author,
  publishingDate,
  backgroundAsset,
  sideAsset,
}: HeroArticleSectionProps) {
  return (
    <section>
      <img src={backgroundAsset.url} alt="" aria-hidden="true" />
      <img src={sideAsset.url} alt="" aria-hidden="true" />

      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>
          {author} · {publishingDate}
        </p>
      </div>
    </section>
  );
}
