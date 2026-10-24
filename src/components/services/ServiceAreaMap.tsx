import Image from "next/image";
import { mainMap } from "@/lib/serviceAreaMap";
import type { ReactNode } from "react";
import styles from "./service-area-map.module.css";

/**
 * Simple map of Melbourne with an approximate one hour travel area around
 * Camberwell. The coastline comes from Victorian suburb boundary data; the one
 * hour area is an estimate (roughly 40 km), not a precise drive time. Labels
 * are HTML so they use the site fonts; the SVG carries no text.
 */

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

export function ServiceAreaMap({ children }: { children?: ReactNode }) {
  const at = (x: number, y: number) => ({
    left: pct(x, mainMap.width),
    top: pct(y, mainMap.height),
  });

  return (
    <div className={styles.layout}>
      <div className={styles.copy}>{children}</div>
      <figure
        className={styles.wrap}
        aria-label="Map of Melbourne showing the approximate one hour travel area around Camberwell"
      >
        <div
          className={styles.frame}
          style={{ aspectRatio: `${mainMap.width} / ${mainMap.height}` }}
        >
          <Image
            src="/images/outdoor-kitchens/melbourne-one-hour-map.svg"
            alt=""
            fill
            unoptimized
            sizes="(min-width: 960px) 640px, 100vw"
            className={styles.mapImage}
          />
          {mainMap.labels.map((label) => (
            <span
              key={label.text}
              className={`${styles.label} ${styles[`anchor-${label.anchor}`]}`}
              style={at(label.x, label.y)}
            >
              {label.text}
            </span>
          ))}
          <span
            className={`${styles.label} ${styles["anchor-start"]} ${styles.labelStrong}`}
            style={at(mainMap.camberwell.x, mainMap.camberwell.y)}
          >
            Camberwell
          </span>
          <span
            className={`${styles.label} ${styles["anchor-middle"]} ${styles.water}`}
            style={at(mainMap.water.x, mainMap.water.y)}
          >
            Port Phillip Bay
          </span>
          <span
            className={`${styles.label} ${styles["anchor-start"]}`}
            style={at(mainMap.scale.x, mainMap.scale.y)}
          >
            10 km
          </span>
        </div>
        <figcaption className={styles.caption}>
          Approximate one hour travel area from Camberwell. Drive times change
          with traffic.
        </figcaption>
      </figure>
    </div>
  );
}
