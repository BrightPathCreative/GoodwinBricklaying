"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navCta, primaryNav, site } from "@/lib/site";
import styles from "./Nav.module.css";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // href of a dropdown parent whose menu should stay closed after a click,
  // even if the cursor is still hovering it. Cleared on re-enter / leave.
  const [suppressed, setSuppressed] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setSuppressed(null);
    // Release focus after client-side navigation so a hover/focus dropdown
    // (kept open via :focus-within) doesn't linger on the new page.
    if (typeof document !== "undefined") {
      (document.activeElement as HTMLElement | null)?.blur();
    }
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Single section highlight: the section whose path the URL falls under.
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logoLink} aria-label={`${site.name} home`}>
          <Image
            src="/logo/goodwin-logo.svg"
            alt="Goodwin Bricklaying logo"
            width={1671}
            height={413}
            className={styles.logo}
            priority
            unoptimized
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {primaryNav.map((item) => (
              <li
                key={item.href}
                className={`${
                  item.children ? styles.navItemHasMenu : styles.navItem
                } ${suppressed === item.href ? styles.menuSuppressed : ""}`}
                onMouseEnter={() => setSuppressed(null)}
                onMouseLeave={() => setSuppressed(null)}
              >
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${
                    isActive(item.href) ? styles.navLinkActive : ""
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  aria-haspopup={item.children ? "true" : undefined}
                >
                  {item.label}
                  {item.children ? (
                    <span className={styles.caret} aria-hidden="true" />
                  ) : null}
                </Link>

                {item.children ? (
                  <ul className={styles.dropdown}>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`${styles.dropdownLink} ${
                            pathname === child.href ? styles.dropdownLinkActive : ""
                          }`}
                          onClick={(e) => {
                            setSuppressed(item.href);
                            e.currentTarget.blur();
                          }}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>

          <Link href={navCta.href} className={styles.cta}>
            {navCta.label}
          </Link>
        </nav>

        <button
          type="button"
          className={`${styles.toggle} ${menuOpen ? styles.toggleOpen : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          <ul className={styles.overlayList}>
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.overlayLink} ${
                    isActive(item.href) ? styles.overlayLinkActive : ""
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {item.label}
                </Link>

                {item.children ? (
                  <ul className={styles.overlaySubList}>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={styles.overlaySubLink}
                          tabIndex={menuOpen ? 0 : -1}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={navCta.href}
          className={styles.overlayCta}
          tabIndex={menuOpen ? 0 : -1}
        >
          {navCta.label}
        </Link>
        <a
          href={site.phoneHref}
          className={styles.overlayPhone}
          tabIndex={menuOpen ? 0 : -1}
        >
          {site.phoneLabel}
        </a>
      </div>
    </header>
  );
}
