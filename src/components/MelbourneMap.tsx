"use client";

import { useState } from "react";
import styles from "./MelbourneMap.module.css";

type Suburb = {
  name: string;
  points: string;
  labelX: number;
  labelY: number;
  highlighted: boolean;
};

/**
 * Stylised (not geographically exact) map of inner Melbourne. Suburbs are
 * arranged in roughly their real relative positions: the northern belt
 * (Brunswick / Carlton / Fitzroy / Collingwood), Richmond and the CBD in the
 * middle, the river, then South Yarra / Prahran below, with bayside Highett
 * further south.
 */
const SUBURBS: ReadonlyArray<Suburb> = [
  // Neutral context suburbs
  { name: "Northcote", points: "300,30 430,20 450,95 320,110", labelX: 375, labelY: 70, highlighted: false },
  { name: "Melbourne CBD", points: "150,255 250,245 270,335 165,350", labelX: 210, labelY: 300, highlighted: false },
  { name: "Hawthorn", points: "470,250 575,260 560,355 460,340", labelX: 515, labelY: 305, highlighted: false },
  { name: "St Kilda", points: "150,470 250,460 265,555 160,565", labelX: 205, labelY: 515, highlighted: false },

  // Highlighted suburbs (terracotta)
  { name: "Brunswick", points: "140,55 280,45 295,140 150,150", labelX: 215, labelY: 100, highlighted: true },
  { name: "Carlton", points: "150,160 295,150 305,235 160,245", labelX: 225, labelY: 198, highlighted: true },
  { name: "Fitzroy", points: "315,150 415,140 425,225 325,235", labelX: 370, labelY: 190, highlighted: true },
  { name: "Collingwood", points: "435,135 525,130 535,215 445,222", labelX: 485, labelY: 178, highlighted: true },
  { name: "Richmond", points: "350,255 470,245 480,355 360,360", labelX: 415, labelY: 305, highlighted: true },
  { name: "South Yarra", points: "300,380 425,375 435,460 310,468", labelX: 367, labelY: 422, highlighted: true },
  { name: "Prahran", points: "300,480 425,475 433,560 308,568", labelX: 366, labelY: 522, highlighted: true },
  { name: "Highett", points: "330,600 450,595 460,675 340,682", labelX: 395, labelY: 642, highlighted: true },
];

export default function MelbourneMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={styles.wrap}>
      <svg
        viewBox="0 0 700 720"
        className={styles.svg}
        role="img"
        aria-label="Map of inner Melbourne suburbs served by Goodwin Bricklaying"
      >
        {/* Yarra River — a gentle band separating the northern suburbs from South Yarra/Prahran */}
        <path
          className={styles.river}
          d="M120,375 C220,355 320,400 430,370 C520,346 600,372 690,360"
          fill="none"
        />

        {SUBURBS.map((s) => {
          const isActive = active === s.name;
          return (
            <g
              key={s.name}
              className={styles.suburb}
              onMouseEnter={() => setActive(s.name)}
              onMouseLeave={() => setActive((prev) => (prev === s.name ? null : prev))}
              onFocus={() => setActive(s.name)}
              onBlur={() => setActive((prev) => (prev === s.name ? null : prev))}
              tabIndex={0}
              role="button"
              aria-label={s.name}
            >
              <polygon
                points={s.points}
                className={`${styles.region} ${
                  s.highlighted ? styles.highlighted : styles.neutral
                } ${isActive ? styles.regionActive : ""}`}
              />
              {isActive && (
                <g className={styles.tooltip} pointerEvents="none">
                  <rect
                    x={s.labelX - s.name.length * 4.6 - 10}
                    y={s.labelY - 26}
                    width={s.name.length * 9.2 + 20}
                    height={26}
                    rx={6}
                    className={styles.tooltipBg}
                  />
                  <text
                    x={s.labelX}
                    y={s.labelY - 8}
                    textAnchor="middle"
                    className={styles.tooltipText}
                  >
                    {s.name}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>

      <ul className={styles.legend}>
        <li className={styles.legendItem}>
          <span className={`${styles.swatch} ${styles.swatchHighlight}`} />
          Suburbs we serve
        </li>
        <li className={styles.legendItem}>
          <span className={`${styles.swatch} ${styles.swatchNeutral}`} />
          Surrounding areas
        </li>
      </ul>
    </div>
  );
}
