import type { CardGridContentBlock } from "@/types";

import { OfficeCard } from "../OfficeCard";
import styles from "./CardGridSection.module.scss";

type CardGridSectionProps = CardGridContentBlock;

export function CardGridSection({ title, cards }: CardGridSectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      <ul className={styles.grid}>
        {cards.map((card) => (
            <li
              key={card.id}
              className={`${styles.gridItem} ${card.layout === "wide" ? styles.cardWide : ""}`}
            >
              <OfficeCard {...card} />
            </li>
        ))}
      </ul>
    </section>
  );
}
