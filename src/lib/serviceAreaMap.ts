/**
 * Label positions for the Melbourne service-area maps, in SVG viewBox units.
 * Generated from the Victorian suburb boundary data (see the SVGs in
 * public/images/outdoor-kitchens). Labels live in HTML so they use the site fonts.
 */
export type MapLabel = { text: string; x: number; y: number; anchor?: "start" | "middle" | "end"; kind?: "place" | "served" | "context" };

export const mainMap = {
  width: 760,
  height: 808.5,
  labels: [{"text": "Melbourne CBD", "x": 318.7, "y": 387.0, "anchor": "end"}, {"text": "Frankston", "x": 460.4, "y": 687.6, "anchor": "start"}, {"text": "Werribee", "x": 62.7, "y": 474.0, "anchor": "middle"}, {"text": "Dandenong", "x": 513.7, "y": 528.8, "anchor": "start"}, {"text": "Lilydale", "x": 624.3, "y": 300.5, "anchor": "middle"}, {"text": "Craigieburn", "x": 285.7, "y": 125.7, "anchor": "middle"}, {"text": "Ringwood", "x": 526.5, "y": 349.2, "anchor": "start"}, {"text": "Essendon", "x": 264.9, "y": 291.6, "anchor": "end"}, {"text": "Brighton", "x": 327.9, "y": 454.2, "anchor": "end"}] as MapLabel[],
  water: { text: "Port Phillip Bay", x: 304.0, y: 582.1 },
  scale: { text: "10 km", x: 118.5, y: 780.5 },
  detailBox: { x: 300.2, y: 322.4, w: 144.4, h: 96.3 },
  camberwell: { x: 386.6, y: 371.8 },
} as const;

export const detailMap = {
  width: 560,
  height: 373.3,
  labels: [{"text": "Camberwell", "x": 380.6, "y": 233.2, "kind": "served"}, {"text": "Hawthorn", "x": 270.0, "y": 199.0, "kind": "served"}, {"text": "Toorak", "x": 221.0, "y": 264.6, "kind": "served"}, {"text": "Canterbury", "x": 386.1, "y": 152.2, "kind": "served"}, {"text": "Glen Iris", "x": 361.5, "y": 307.4, "kind": "served"}, {"text": "Surrey Hills", "x": 483.6, "y": 201.3, "kind": "served"}, {"text": "Richmond", "x": 167.6, "y": 177.4, "kind": "served"}, {"text": "Fitzroy", "x": 94.7, "y": 80.7, "kind": "served"}, {"text": "Kew", "x": 283.7, "y": 100.2, "kind": "context"}, {"text": "Balwyn", "x": 420.2, "y": 130.3, "kind": "context"}, {"text": "Malvern", "x": 263.0, "y": 318.0, "kind": "context"}, {"text": "Box Hill", "x": 529.7, "y": 167.7, "kind": "context"}, {"text": "Prahran", "x": 177.4, "y": 289.9, "kind": "context"}, {"text": "Burwood", "x": 499.2, "y": 276.9, "kind": "context"}, {"text": "Ashburton", "x": 409.8, "y": 341.2, "kind": "context"}, {"text": "Abbotsford", "x": 161.7, "y": 106.9, "kind": "context"}, {"text": "Hawksburn", "x": 189.2, "y": 241.4, "kind": "served", "anchor": "end"}] as MapLabel[],
  scale: { text: "2 km", x: 95.1, y: 351.3 },
  camberwell: { x: 335.1, y: 191.3 },
} as const;
