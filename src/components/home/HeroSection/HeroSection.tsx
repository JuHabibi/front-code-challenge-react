import type { HeroContentBlock } from "@/types";

import styles from "./HeroSection.module.scss";

type HeroSectionProps = HeroContentBlock;

export function HeroSection({
  title,
  subtitle,
  description,
  backgroundAsset,
  foregroundAsset,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <img
        className={styles.backgroundImage}
        src={backgroundAsset.url}
        alt=""
        fetchPriority="high"
        decoding="async"
        aria-hidden
      />

      <img
        className={styles.foregroundImage}
        src={foregroundAsset.url}
        alt=""
        decoding="async"
        aria-hidden
      />

      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{description}</p>
      </div>
    </section>
  );
}
