import type { Footer as FooterData } from "@/types/common";

import styles from "./Footer.module.scss";

type FooterProps = FooterData;

export function Footer({ text, background }: FooterProps) {
  return (
    <footer
      className={styles.footer}
      style={{ backgroundImage: `url(${background})` }}
    >
      <p>{text}</p>
    </footer>
  );
}
