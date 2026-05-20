import Link from "next/link";
import type { OfficeCard as OfficeCardData } from "@/types";

import styles from "./OfficeCard.module.scss";

type OfficeCardProps = OfficeCardData;

export function OfficeCard({
  title,
  subtitle,
  description,
  backgroundAsset,
  cta,
}: OfficeCardProps) {
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={backgroundAsset.url}
        alt={backgroundAsset.alt}
      />

      <div className={styles.content}>
        <p className={styles.subtitle}>{subtitle}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {cta ? (
          <Link
            href={cta.url}
            target={cta.target}
            aria-label={cta.ariaLabel}
            className={styles.cta}
          >
            {cta.text}
          </Link>
        ) : null}
      </div>
    </article>
  );
}
