import styles from "./Header.module.scss";
import Image from "next/image";

type HeaderProps = {
  title?: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Image
          src="/assets/valtech-logo.png"
          width={180}
          height={40}
          alt="Valtech Logo"
          priority
        />
        {title ? <span className={styles.title}>{title}</span> : null}
      </div>
    </header>
  );
}

