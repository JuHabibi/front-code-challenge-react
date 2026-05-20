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
        <img className={styles.leftImage} src={sideAsset.url} alt="" aria-hidden="true" />
        <div className={styles.rightPanel}>
        <img className={styles.rightImage} src={backgroundAsset.url} alt="" aria-hidden="true" />
          <div className={styles.content}>
          <p>{subtitle}</p>
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
