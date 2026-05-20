import type { PageFooter as PageFooterData } from "@/types";

type PageFooterProps = PageFooterData;

export function PageFooter({ background, text }: PageFooterProps) {
  return (
    <footer data-background={background}>
      <p>{text}</p>
    </footer>
  );
}

