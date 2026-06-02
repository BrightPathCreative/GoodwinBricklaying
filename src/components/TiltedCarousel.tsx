"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./TiltedCarousel.module.css";

const ASSETS = [
  { src: "/images/architectural-masonry/dental-pattern/goodwin-bricklaying-dental-brick-pattern-close-up-detail-textured-facade.jpg", title: "Dental Brick Pattern", location: "Melbourne" },
  { src: "/images/architectural-masonry/dental-pattern/goodwin-bricklaying-dental-brick-pattern-construction-scaffolding-rooftop-view.jpg", title: "Dental Brick Pattern", location: "Melbourne" },
  { src: "/images/architectural-masonry/dental-pattern/goodwin-bricklaying-dental-brick-pattern-modern-residential-facade-street-view.jpg", title: "Dental Brick Pattern", location: "Melbourne" },
  { src: "/images/architectural-masonry/dental-pattern/goodwin-bricklaying-dental-brick-pattern-two-storey-contemporary-home-exterior.jpg", title: "Dental Brick Pattern", location: "Melbourne" },
  { src: "/images/architectural-masonry/herringbone/goodwin-bricklaying-herringbone-brick-pattern-completed-interior-feature-wall.jpg", title: "Herringbone Feature Wall", location: "Melbourne" },
  { src: "/images/architectural-masonry/herringbone/goodwin-bricklaying-herringbone-brick-pattern-feature-wall-construction-in-progress.jpg", title: "Herringbone Feature Wall", location: "Melbourne" },
  { src: "/images/architectural-masonry/hit-and-miss/goodwin-bricklaying-hit-and-miss-decorative-brick-screen-wall-melbourne.jpg", title: "Hit and Miss Screen Wall", location: "Melbourne" },
  { src: "/images/architectural-masonry/prahran-park/goodwin-bricklaying-architectural-brick-wall-construction-detail-red-cream-bricks.jpg", title: "Prahran Park", location: "Prahran" },
  { src: "/images/architectural-masonry/prahran-park/goodwin-bricklaying-architectural-curved-brick-retaining-wall-prahran-council-park-completed.jpg", title: "Prahran Park", location: "Prahran" },
  { src: "/images/architectural-masonry/prahran-park/goodwin-bricklaying-architectural-masonry-curved-wall-timber-seating-prahran-park.jpg", title: "Prahran Park", location: "Prahran" },
  { src: "/images/architectural-masonry/prahran-park/goodwin-bricklaying-curved-brick-retaining-wall-construction-in-progress-melbourne.jpg", title: "Prahran Park", location: "Prahran" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-32.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-34.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-35.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-36.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-38.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-42.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-43.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-43-1.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-44.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-44-1.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-44-2.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-44-3.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-45.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-45-1.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-46.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-46-1.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-46-2.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-47.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-47-1.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-47-2.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
  { src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-47-3.jpg", title: "Vaulted Ceiling", location: "Fitzroy" },
];

export default function TiltedCarousel() {
  const [activeIndex, setActiveIndex] = useState(3);

  const toPrev = () => setActiveIndex((prev) => Math.max(0, prev - 1));
  const toNext = () =>
    setActiveIndex((prev) => Math.min(ASSETS.length - 1, prev + 1));
  const toSlide = (index: number) => setActiveIndex(index);

  return (
    <div className={styles.root}>
      <div className={styles.viewport}>
        <motion.div
          className={styles.track}
          animate={{ x: `${(-activeIndex * 100) / ASSETS.length}%` }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
        >
          {ASSETS.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <div className={styles.perspective} key={item.src}>
                <motion.div
                  className={styles.slide}
                  animate={{
                    rotateY: (activeIndex - i) * 60,
                    scale: isActive ? 1 : 0.85,
                  }}
                  transition={{ type: "spring", bounce: 0.1, duration: 1 }}
                >
                  <div
                    className={styles.imageWrap}
                    onClick={() => toSlide(i)}
                  >
                    <Image
                      src={item.src}
                      alt={`${item.title}, ${item.location}`}
                      fill
                      sizes="(min-width: 768px) 200px, 120px"
                      className={styles.image}
                    />
                  </div>
                  <motion.div
                    className={styles.label}
                    animate={{
                      filter: isActive ? "blur(0px)" : "blur(2px)",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.location}>{item.location}</div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          onClick={toPrev}
          aria-label="Previous"
          className={styles.navButton}
        >
          <ChevronLeft />
        </button>
        <div className={styles.dots}>
          {ASSETS.map((item, i) => (
            <div
              key={item.src}
              onClick={() => toSlide(i)}
              className={`${styles.dot} ${
                activeIndex === i ? styles.dotActive : styles.dotInactive
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={toNext}
          aria-label="Next"
          className={styles.navButton}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
