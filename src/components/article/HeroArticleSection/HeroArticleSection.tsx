import type { HeroArticleContentBlock } from "@/types";

import styles from "./HeroArticleSection.module.scss";

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
    <section className={styles.hero}>
      <div className={styles.media}>
        <img
          className={styles.leftImage}
          src={sideAsset.url}
          alt=""
          fetchPriority="high"
          decoding="async"
          aria-hidden
        />

        <div className={styles.rightPanel}>
          <img
            className={styles.rightImage}
            src={backgroundAsset.url}
            alt=""
            decoding="async"
            aria-hidden
          />
          <div className={styles.content}>
            <p className={styles.subtitle}>{subtitle}</p>
            <h1>{title}</h1>
          </div>
        </div>
      </div>

      <p className={styles.meta}>
        <span>{author}</span> · <span>{publishingDate}</span>
      </p>
    </section>
  );
}
