import type { ParagraphContentBlock } from "@/types";

import styles from "./ParagraphSection.module.scss";

type ParagraphSectionProps = ParagraphContentBlock;

export function ParagraphSection({ highlight, text }: ParagraphSectionProps) {
  return (
    <section
      className={`${styles.paragraph} ${highlight ? styles.highlight : ""}`}
    >
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </section>
  );
}
