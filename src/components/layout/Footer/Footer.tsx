import type { Footer as FooterData } from "@/types/common";

import styles from "./Footer.module.scss";

type FooterProps = FooterData;

export function Footer({ text }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <p>{text}</p>
    </footer>
  );
}
