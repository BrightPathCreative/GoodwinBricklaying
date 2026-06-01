"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  galleryFilters,
  galleryImages,
  type GalleryImage,
} from "@/lib/projects";
import styles from "./ProjectGallery.module.css";

type Filter = (typeof galleryFilters)[number];

export function ProjectGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const visible =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === filter);

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close]);

  return (
    <div>
      <div className={styles.filters} role="group" aria-label="Filter projects by category">
        {galleryFilters.map((option) => (
          <button
            key={option}
            type="button"
            className={`${styles.filter} ${filter === option ? styles.filterActive : ""}`}
            aria-pressed={filter === option}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <ul className={styles.grid}>
        {visible.map((image) => (
          <li key={image.src} className={styles.item}>
            <button
              type="button"
              className={styles.tile}
              onClick={() => setLightbox(image)}
              aria-label={`Enlarge image: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                className={styles.image}
                loading="lazy"
              />
              <span className={styles.tag}>{image.category}</span>
            </button>
          </li>
        ))}
      </ul>

      {lightbox ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={close}
        >
          <button type="button" className={styles.close} aria-label="Close image" onClick={close}>
            &times;
          </button>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              sizes="90vw"
              className={styles.lightboxImage}
            />
          </div>
          <p className={styles.caption}>{lightbox.alt}</p>
        </div>
      ) : null}
    </div>
  );
}
