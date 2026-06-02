import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Goodwin Bricklaying" },
  description:
    "The page you're looking for doesn't exist. Return to Goodwin Bricklaying — Melbourne's heritage masonry specialist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>This page doesn&apos;t exist.</h1>
        <p className={styles.subtitle}>But the craftsmanship does.</p>
        <p className={styles.body}>
          It looks like the page you were after has moved or no longer exists.
          Let&apos;s get you back on track.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn--light">
            Return Home
          </Link>
          <Link href="/services" className="btn btn--light">
            View Our Services
          </Link>
          <Link href="/contact" className="btn btn--light">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
