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
        aria-hidden="true"
        width={1196}
        height={480}
      />

      <img
        className={styles.foregroundImage}
        src={foregroundAsset.url}
        alt=""
        aria-hidden="true"
        width={345}
        height={570}
      />

      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{description}</p>
      </div>
    </section>
  );
}
