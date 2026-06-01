"use client";

import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

/**
 * Hero scroll cue. Fades out once the visitor scrolls past 200px (design.md §15).
 */
export function ScrollIndicator() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setHidden(window.scrollY > 200);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`${styles.scrollIndicator} ${
        hidden ? styles.scrollIndicatorHidden : ""
      }`}
      aria-hidden="true"
    >
      Scroll
      <span />
    </div>
  );
}
