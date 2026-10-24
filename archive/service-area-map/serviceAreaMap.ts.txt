/**
 * Label positions for the Melbourne service-area map, in SVG viewBox units.
 * Generated from Victorian suburb boundary data. Labels are HTML so they use
 * the site fonts; the SVG in public/images/outdoor-kitchens carries no text.
 */
export type MapLabel = { text: string; x: number; y: number; anchor: "start" | "middle" | "end" };

export const mainMap = {
  width: 720,
  height: 710.2,
  labels: [{"text": "Melbourne CBD", "x": 295.5, "y": 327.8, "anchor": "end"}, {"text": "Werribee", "x": 64.1, "y": 433.4, "anchor": "middle"}, {"text": "Craigieburn", "x": 267.2, "y": 111.6, "anchor": "middle"}, {"text": "Lilydale", "x": 575.6, "y": 270.9, "anchor": "middle"}, {"text": "Dandenong", "x": 475.8, "y": 482.1, "anchor": "start"}, {"text": "Frankston", "x": 427.2, "y": 626.7, "anchor": "start"}] as MapLabel[],
  camberwell: { x: 375.1, y: 342.6 },
  water: { x: 207.7, y: 508.5 },
  scale: { x: 110.8, y: 684.2 },
} as const;
