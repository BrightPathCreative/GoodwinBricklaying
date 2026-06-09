"use client";

import { createElement, useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealVariant = "up" | "left" | "right" | "fade" | "grid";

const variantClass: Record<RevealVariant, string> = {
  up: "reveal",
  left: "reveal reveal--left",
  right: "reveal reveal--right",
  fade: "reveal reveal--fade",
  grid: "reveal-grid",
};

type RevealProps = {
  children: ReactNode;
  /** HTML element to render. Defaults to a div. */
  as?: ElementType;
  variant?: RevealVariant;
  className?: string;
  /** Fraction of the element visible before revealing (design.md: 15%). */
  threshold?: number;
} & Record<string, unknown>;

/**
 * Wraps content in a scroll-reveal container driven by IntersectionObserver
 * (no scroll listeners, per design.md §3/§14). Reveals once, then stops
 * observing. Reduced-motion users see content immediately via globals.css.
 */
export function Reveal({
  children,
  as = "div",
  variant = "up",
  className = "",
  threshold = 0.15,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.classList.add("is-visible");
      return;
    }

    // A fixed visibility fraction can never be reached for elements taller than
    // the viewport (e.g. the long projects gallery on mobile), which would leave
    // them stuck at opacity:0. Cap the threshold to what is actually attainable.
    const viewportRatio = window.innerHeight / (el.offsetHeight || window.innerHeight);
    const safeThreshold = Math.min(threshold, viewportRatio * 0.6);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: safeThreshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return createElement(
    as,
    { ref, className: `${variantClass[variant]} ${className}`.trim(), ...rest },
    children
  );
}
