import type { HeroContentBlock } from "@/types";

type HeroSectionProps = HeroContentBlock;

export function HeroSection({
  title,
  subtitle,
  description,
  backgroundAsset,
  foregroundAsset,
}: HeroSectionProps) {
  return (
    <section aria-label="Hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{description}</p>
      <img src={backgroundAsset.url} alt={backgroundAsset.alt} />
      <img src={foregroundAsset.url} alt={foregroundAsset.alt} />
    </section>
  );
}
