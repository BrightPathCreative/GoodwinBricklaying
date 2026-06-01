"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getConsent, setConsent } from "@/lib/consent";
import styles from "./CookieConsent.module.css";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  // Show 1s after load on first visit only (design.md §12).
  useEffect(() => {
    setMounted(true);
    if (getConsent()) return;
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const decide = (allowAnalytics: boolean) => {
    setConsent(allowAnalytics);
    setVisible(false);
  };

  return (
    <div
      className={`${styles.banner} ${visible ? styles.bannerVisible : ""}`}
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      aria-hidden={!visible}
    >
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.text}>
            We use cookies to improve your experience and understand how our
            site is used. See our{" "}
            <Link href="/cookie-policy" className={styles.link}>
              Cookie Policy
            </Link>{" "}
            for details.
          </p>

          {showPrefs && (
            <div className={styles.preferences}>
              <div className={styles.prefRow}>
                <input
                  type="checkbox"
                  id="consent-essential"
                  checked
                  disabled
                  readOnly
                />
                <label htmlFor="consent-essential">
                  <span className={styles.prefName}>Essential</span>
                  Required for the site to function. Always on.
                </label>
              </div>
              <div className={styles.prefRow}>
                <input
                  type="checkbox"
                  id="consent-analytics"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <label htmlFor="consent-analytics">
                  <span className={styles.prefName}>Analytics</span>
                  Helps us understand how the site is used. Optional.
                </label>
              </div>
            </div>
          )}
        </div>

        <div className={styles.actions}>
          {showPrefs ? (
            <button
              type="button"
              className="btn btn--light"
              onClick={() => decide(analytics)}
              tabIndex={visible ? 0 : -1}
            >
              Save Preferences
            </button>
          ) : (
            <button
              type="button"
              className="btn btn--light"
              onClick={() => setShowPrefs(true)}
              tabIndex={visible ? 0 : -1}
            >
              Manage Preferences
            </button>
          )}
          <button
            type="button"
            className={styles.accept}
            onClick={() => decide(true)}
            tabIndex={visible ? 0 : -1}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
