import type { OfficeCard as OfficeCardData } from "@/types";

type OfficeCardProps = OfficeCardData;

export function OfficeCard({
  title,
  subtitle,
  description,
  backgroundAsset,
  cta,
}: OfficeCardProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p>{description}</p>
      <img src={backgroundAsset.url} alt={backgroundAsset.alt} />
      {cta ? (
        <a href={cta.url} target={cta.target} aria-label={cta.ariaLabel}>
          {cta.text}
        </a>
      ) : null}
    </article>
  );
}
