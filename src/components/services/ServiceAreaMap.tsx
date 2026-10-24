import Image from "next/image";
import { detailMap, mainMap, type MapLabel } from "@/lib/serviceAreaMap";
import styles from "./service-area-map.module.css";

/**
 * Thin-line map of Melbourne with an approximate one hour travel area around
 * Camberwell, plus a close-up of the suburbs we list on our location pages.
 * Suburb shapes come from Victorian suburb boundary data; the one hour area is
 * an estimate (roughly 40 km), not a precise drive time. Labels are HTML so
 * they use the site fonts; the SVGs carry no text.
 */

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

function Label({
  label,
  width,
  height,
}: {
  label: MapLabel;
  width: number;
  height: number;
}) {
  const anchor = label.anchor ?? "middle";
  const kindClass =
    label.kind === "served"
      ? styles.labelServed
      : label.kind === "context"
        ? styles.labelContext
        : "";
  return (
    <span
      className={`${styles.label} ${styles[`anchor-${anchor}`]} ${kindClass}`}
      style={{ left: pct(label.x, width), top: pct(label.y, height) }}
    >
      {label.text}
    </span>
  );
}

export function ServiceAreaMap() {
  return (
    <figure
      className={styles.wrap}
      aria-label="Map of Melbourne showing the approximate one hour travel area around Camberwell"
    >
      <div className={styles.maps}>
        <div className={styles.mainCol}>
          <div
            className={styles.frame}
            style={{ aspectRatio: `${mainMap.width} / ${mainMap.height}` }}
          >
            <Image
              src="/images/outdoor-kitchens/melbourne-one-hour-map.svg"
              alt=""
              fill
              unoptimized
              sizes="(min-width: 960px) 45vw, 100vw"
              className={styles.mapImage}
            />
            {mainMap.labels.map((label) => (
              <Label
                key={label.text}
                label={{ ...label, kind: "place" }}
                width={mainMap.width}
                height={mainMap.height}
              />
            ))}
            <span
              className={`${styles.label} ${styles["anchor-middle"]} ${styles.water}`}
              style={{
                left: pct(mainMap.water.x, mainMap.width),
                top: pct(mainMap.water.y, mainMap.height),
              }}
            >
              {mainMap.water.text}
            </span>
            <span
              className={`${styles.label} ${styles["anchor-start"]}`}
              style={{
                left: pct(mainMap.scale.x, mainMap.width),
                top: pct(mainMap.scale.y, mainMap.height),
              }}
            >
              {mainMap.scale.text}
            </span>
            <span
              className={`${styles.label} ${styles["anchor-start"]} ${styles.labelContext}`}
              style={{
                left: pct(mainMap.detailBox.x, mainMap.width),
                top: pct(mainMap.detailBox.y - 14, mainMap.height),
              }}
            >
              Close-up
            </span>
          </div>
        </div>

        <div className={styles.detailCol}>
          <div
            className={styles.frame}
            style={{ aspectRatio: `${detailMap.width} / ${detailMap.height}` }}
          >
            <Image
              src="/images/outdoor-kitchens/camberwell-suburbs-detail-map.svg"
              alt=""
              fill
              unoptimized
              sizes="(min-width: 960px) 40vw, 100vw"
              className={styles.mapImage}
            />
            {detailMap.labels.map((label) => (
              <Label
                key={label.text}
                label={label}
                width={detailMap.width}
                height={detailMap.height}
              />
            ))}
            <span
              className={`${styles.label} ${styles["anchor-start"]}`}
              style={{
                left: pct(detailMap.scale.x, detailMap.width),
                top: pct(detailMap.scale.y, detailMap.height),
              }}
            >
              {detailMap.scale.text}
            </span>
          </div>
          <ul className={styles.legend}>
            <li>
              <span className={`${styles.swatch} ${styles.swatchZone}`} />
              Approximate one hour travel area from Camberwell
            </li>
            <li>
              <span className={`${styles.swatch} ${styles.swatchServed}`} />
              Suburbs on our location pages
            </li>
            <li>
              <span className={`${styles.swatch} ${styles.swatchPin}`} />
              Camberwell
            </li>
          </ul>
        </div>
      </div>
      <figcaption className={styles.caption}>
        The travel area is an estimate and drive times change with traffic.
        Outside the suburbs shown, tell us where the job is and we will confirm.
      </figcaption>
    </figure>
  );
}
