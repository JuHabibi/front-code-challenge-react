import type { ParagraphContentBlock } from "@/types";

type ParagraphSectionProps = ParagraphContentBlock;

export function ParagraphSection({ highlight, text }: ParagraphSectionProps) {
  return (
    <section data-highlight={highlight ? "true" : undefined}>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </section>
  );
}
