/**
 * Project / portfolio data for the /projects gallery.
 * Image paths point at the curated set under public/images/. Alt text follows
 * the conventions in docs/seo.md. No claims beyond docs/brief.md.
 */

export type ProjectCategory =
  | "Heritage"
  | "Architectural"
  | "Chimneys"
  | "Structural"
  | "Tuck Pointing";

export type FeaturedProject = {
  title: string;
  location: string;
  category: string;
  blurb: string;
  image: string;
  alt: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  category: ProjectCategory;
};

/** Landmark and signature work, shown as large editorial rows. */
export const featuredProjects: ReadonlyArray<FeaturedProject> = [
  {
    title: "Fitzroy Vaulted Brick Tunnel",
    location: "Fitzroy",
    category: "Architectural Masonry",
    blurb:
      "A sweeping barrel-vaulted brick tunnel with every course set by hand to hold a true curve, where structural engineering meets fine craft.",
    image: "/images/hero-fitzroy-brick-arch-tunnel-melbourne.jpg",
    alt: "Vaulted brick archway and tunnel by Goodwin Bricklaying, Fitzroy Melbourne",
  },
  {
    title: "Cairo Flats Heritage Wall",
    location: "Fitzroy",
    category: "Heritage & Restoration",
    blurb:
      "The heritage-listed boundary wall along Hanover Street, opposite the Royal Exhibition Building, is more than 150 years old. It was carefully deconstructed, given new footings and drainage, then historically reconstructed brick by brick under expert heritage guidance across an eight-month project.",
    image:
      "/images/heritage-restoration/carlton-garden-wall/photo-2026-05-23-10-34-26.jpg",
    alt: "Restored 10,000-brick heritage garden wall with capped pier by Goodwin Bricklaying, Fitzroy Melbourne",
  },
  {
    title: "Highett Gasworks Chimney",
    location: "Highett",
    category: "Chimneys & Restoration",
    blurb:
      "Full restoration of the 27-metre heritage gasworks chimney, with a rebuilt crown and red-brick repairs carried out at height on a landmark structure.",
    image:
      "/images/chimneys-fireplaces/highett-gasworks/goodwin-bricklaying-highett-gasworks-chimney-completed-restoration-red-brick.jpg",
    alt: "Restored 27-metre heritage gasworks brick chimney stack Melbourne by Goodwin Bricklaying",
  },
  {
    title: "Prahran Park Curved Wall",
    location: "Prahran",
    category: "Architectural Masonry",
    blurb:
      "A serpentine brick retaining wall and bench seating for a council park, with curved masonry faced in warm brick and finished with timber.",
    image:
      "/images/architectural-masonry/prahran-park/goodwin-bricklaying-architectural-curved-brick-retaining-wall-prahran-council-park-completed.jpg",
    alt: "Completed curved brick retaining wall with timber bench seating by Goodwin Bricklaying, Prahran Melbourne",
  },
  {
    title: "Commercial Blockwork Development",
    location: "Melbourne",
    category: "Structural & Commercial",
    blurb:
      "Structural and curved blockwork for a multi-storey development, reinforced, waterproofed, and built to engineering specification on a live site.",
    image:
      "/images/structural-commercial/goodwin-bricklaying-commercial-blockwork-curved-walls-multi-storey-development.jpg",
    alt: "Curved structural blockwork walls under construction at a multi-storey Melbourne development by Goodwin Bricklaying",
  },
  {
    title: "Heritage Repointing & Tuck Pointing",
    location: "Inner Melbourne",
    category: "Tuck Pointing",
    blurb:
      "Period-accurate repointing on weathered heritage brickwork, raked out by hand and finished to the original mortar profile.",
    image: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-02-01.jpg",
    alt: "Heritage brickwork repointing and tuck pointing detail, Goodwin Bricklaying Melbourne",
  },
];

/** Filter order for the gallery. "All" first. */
export const galleryFilters = [
  "All",
  "Heritage",
  "Architectural",
  "Chimneys",
  "Structural",
  "Tuck Pointing",
] as const;

/** Curated gallery grid, grouped by category for the on-page filter. */
export const galleryImages: ReadonlyArray<GalleryImage> = [
  // --- Heritage & Restoration ---
  {
    src: "/images/heritage-restoration/carlton-garden-wall/photo-2026-05-23-10-34-22.jpg",
    alt: "Heritage garden wall rebuild in progress by Goodwin Bricklaying, Fitzroy Melbourne",
    category: "Heritage",
  },
  {
    src: "/images/heritage-restoration/carlton-garden-wall/photo-2026-05-23-10-34-28.jpg",
    alt: "Rebuilt heritage brick pier with stone capping by Goodwin Bricklaying, Fitzroy Melbourne",
    category: "Heritage",
  },
  {
    src: "/images/heritage-restoration/renovation/photo-2026-05-23-10-19-36.jpg",
    alt: "Heritage brickwork restoration on a period weatherboard home by Goodwin Bricklaying, Melbourne",
    category: "Heritage",
  },
  {
    src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-26.jpg",
    alt: "Remedial heritage brickwork repair by Goodwin Bricklaying, Melbourne",
    category: "Heritage",
  },
  {
    src: "/images/heritage-restoration/remedial/photo-2026-05-23-10-12-23.jpg",
    alt: "Heritage masonry remedial work detail by Goodwin Bricklaying, Melbourne",
    category: "Heritage",
  },
  // --- Architectural Masonry ---
  {
    src: "/images/architectural-masonry/herringbone/goodwin-bricklaying-herringbone-brick-pattern-completed-interior-feature-wall.jpg",
    alt: "Reclaimed brick herringbone feature wall by Goodwin Bricklaying, Melbourne",
    category: "Architectural",
  },
  {
    src: "/images/architectural-masonry/dental-pattern/goodwin-bricklaying-dental-brick-pattern-modern-residential-facade-street-view.jpg",
    alt: "Dentil brick pattern facade on a contemporary home by Goodwin Bricklaying, Melbourne",
    category: "Architectural",
  },
  {
    src: "/images/architectural-masonry/hit-and-miss/goodwin-bricklaying-hit-and-miss-decorative-brick-screen-wall-melbourne.jpg",
    alt: "Hit-and-miss decorative brick screen wall by Goodwin Bricklaying, Melbourne",
    category: "Architectural",
  },
  {
    src: "/images/architectural-masonry/vaulted-ceiling-fitzroy/photo-2026-05-23-09-56-32.jpg",
    alt: "Vaulted brick ceiling detail by Goodwin Bricklaying, Fitzroy Melbourne",
    category: "Architectural",
  },
  {
    src: "/images/architectural-masonry/prahran-park/goodwin-bricklaying-architectural-masonry-curved-wall-timber-seating-prahran-park.jpg",
    alt: "Curved architectural brick wall with timber seating by Goodwin Bricklaying, Prahran Melbourne",
    category: "Architectural",
  },
  // --- Chimneys & Fireplaces ---
  {
    src: "/images/chimneys-fireplaces/collingwood-chimney/goodwin-bricklaying-collingwood-40-metre-chimney-stack-full-height-ground-view.jpg",
    alt: "40-metre heritage brick chimney stack restoration Melbourne by Goodwin Bricklaying, Collingwood",
    category: "Chimneys",
  },
  {
    src: "/images/chimneys-fireplaces/collingwood-chimney/goodwin-bricklaying-collingwood-40-metre-chimney-crown-aerial-drone-view.jpg",
    alt: "Chimney stack crown restoration aerial view Melbourne by Goodwin Bricklaying, Collingwood",
    category: "Chimneys",
  },
  {
    src: "/images/chimneys-fireplaces/brunswick-licorice-factory/goodwin-bricklaying-brunswick-licorice-factory-chimney-restoration-new-brickwork-corbelling.jpg",
    alt: "Heritage chimney crown rebuild with corbelled brickwork Melbourne by Goodwin Bricklaying, Brunswick",
    category: "Chimneys",
  },
  {
    src: "/images/chimneys-fireplaces/highett-gasworks/goodwin-bricklaying-highett-gasworks-chimney-full-scaffolding-during-restoration.jpg",
    alt: "Heritage gasworks chimney restoration under full scaffolding Melbourne by Goodwin Bricklaying, Highett",
    category: "Chimneys",
  },
  // --- Structural & Commercial ---
  {
    src: "/images/structural-commercial/goodwin-bricklaying-commercial-blockwork-retaining-walls-construction-site-melbourne.jpg",
    alt: "Commercial blockwork retaining walls on a construction site by Goodwin Bricklaying, Melbourne",
    category: "Structural",
  },
  {
    src: "/images/structural-commercial/goodwin-bricklaying-commercial-curved-blockwork-basement-parking-construction.jpg",
    alt: "Curved commercial blockwork to a basement car park by Goodwin Bricklaying, Melbourne",
    category: "Structural",
  },
  {
    src: "/images/structural-commercial/goodwin-bricklaying-commercial-rendered-blockwork-planter-wall-waterproofed.jpg",
    alt: "Rendered and waterproofed commercial blockwork planter wall by Goodwin Bricklaying, Melbourne",
    category: "Structural",
  },
  {
    src: "/images/structural-commercial/goodwin-bricklaying-commercial-geometric-blockwork-walls-aerial-view-construction.jpg",
    alt: "Geometric commercial blockwork walls aerial view by Goodwin Bricklaying, Melbourne",
    category: "Structural",
  },
  // --- Tuck Pointing ---
  {
    src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-58.jpg",
    alt: "Tuck pointing on heritage red brickwork, Goodwin Bricklaying Melbourne",
    category: "Tuck Pointing",
  },
  {
    src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-01-59.jpg",
    alt: "Repointing detail on weathered brickwork, Goodwin Bricklaying Melbourne",
    category: "Tuck Pointing",
  },
  {
    src: "/images/tuck-pointing/repointing-styles/photo-2026-05-23-10-02-00.jpg",
    alt: "Period-accurate mortar pointing profile, Goodwin Bricklaying Melbourne",
    category: "Tuck Pointing",
  },
];
