"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CarouselContentBlock } from "@/types";

import styles from "./CarouselSection.module.scss";

const ARROW_LEFT_SRC = "/assets/arrow-left.svg";
const ARROW_RIGHT_SRC = "/assets/arrow-right.svg";
const ARROW_ICON_SIZE = 40;
const IMAGE_TRANSITION_MS = 150;

type CarouselSectionProps = CarouselContentBlock;

export function CarouselSection({ items }: CarouselSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageVisible, setImageVisible] = useState(true);
  const transitionTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  if (items.length === 0) {
    return null;
  }

  const lastIndex = items.length - 1;
  const activeItem = items[activeIndex];

  const transitionTo = (newIndex: number) => {
    if (newIndex === activeIndex) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setActiveIndex(newIndex);
      return;
    }

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    setImageVisible(false);
    transitionTimeoutRef.current = window.setTimeout(() => {
      setActiveIndex(newIndex);
      setImageVisible(true);
      transitionTimeoutRef.current = null;
    }, IMAGE_TRANSITION_MS);
  };

  const goPrev = () => transitionTo(Math.max(0, activeIndex - 1));
  const goNext = () => transitionTo(Math.min(lastIndex, activeIndex + 1));

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  return (
    <section
      className={styles.carousel}
      aria-roledescription="carousel"
      aria-label="Article gallery"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.track}>
        <div
          className={styles.slide}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${activeIndex + 1} of ${items.length}`}
        >
          <div className={styles.media}>
            <img
              className={`${styles.image} ${imageVisible ? "" : styles.imageHidden}`}
              src={activeItem.url}
              alt={activeItem.alt}
            />
            <p className={styles.description} aria-live="polite">
              {activeItem.description}
            </p>
          </div>

          <button
            type="button"
            className={`${styles.navButton} ${styles.navButtonPrev}`}
            onClick={goPrev}
            disabled={activeIndex === 0}
            aria-label="Previous slide"
          >
            <Image
              src={ARROW_LEFT_SRC}
              alt=""
              width={ARROW_ICON_SIZE}
              height={ARROW_ICON_SIZE}
              className={styles.navIcon}
              aria-hidden
            />
          </button>

          <button
            type="button"
            className={`${styles.navButton} ${styles.navButtonNext}`}
            onClick={goNext}
            disabled={activeIndex === lastIndex}
            aria-label="Next slide"
          >
            <Image
              src={ARROW_RIGHT_SRC}
              alt=""
              width={ARROW_ICON_SIZE}
              height={ARROW_ICON_SIZE}
              className={styles.navIcon}
              aria-hidden
            />
          </button>
        </div>
      </div>
    </section>
  );
}
