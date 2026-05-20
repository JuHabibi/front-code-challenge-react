import type { CarouselContentBlock } from "@/types";

type CarouselSectionProps = CarouselContentBlock;

export function CarouselSection({ items }: CarouselSectionProps) {
  return (
    <section aria-label="Article gallery">
      <ul>
        {items.map((item, index) => (
          <li key={`${item.url}-${index}`}>
            <img src={item.url} alt={item.alt} />
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
