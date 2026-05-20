import type { CardGridContentBlock } from "@/types";

import { OfficeCard } from "./OfficeCard";

type CardGridSectionProps = CardGridContentBlock;

export function CardGridSection({ title, cards }: CardGridSectionProps) {
  return (
    <section aria-label={title}>
      <h2>{title}</h2>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <OfficeCard {...card} />
          </li>
        ))}
      </ul>
    </section>
  );
}
