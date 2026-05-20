import type { CardGridContentBlock } from "@/types";

import { OfficeCard } from "../OfficeCard";
import styles from "./CardGridSection.module.scss";

type CardGridSectionProps = CardGridContentBlock;

export function CardGridSection({ title, cards }: CardGridSectionProps) {
  return (
    <section aria-label={title}>
      <div className="container">
        <h2>{title}</h2>

        <ul className={styles.grid}>
          {cards.map((card, index) => {
            const isWide = index === 0 || index === 5;

            return (
              <li
                key={card.id}
                className={`${styles.gridItem} ${isWide ? styles.cardWide : ""}`}
              >
                <OfficeCard {...card} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
