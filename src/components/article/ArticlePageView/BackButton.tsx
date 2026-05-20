"use client";

import { useRouter } from "next/navigation";

import { canNavigateBackInApp } from "@/lib/navigation";

import styles from "./BackButton.module.scss";

export function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    if (canNavigateBackInApp()) {
      router.back();
      return;
    }

    router.push("/");
  };

  return (
    <button
      type="button"
      className={styles.backButton}
      onClick={handleClick}
      aria-label="Go back"
    >
      ← Back
    </button>
  );
}
