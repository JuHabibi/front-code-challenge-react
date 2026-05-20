"use client";

import { useRouter } from "next/navigation";

import styles from "./BackButton.module.scss";

export function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  };

  return (
    <button
      type="button"
      className={styles.backButton}
      onClick={handleBack}
      aria-label="Go back"
    >
      ← Back
    </button>
  );
}
