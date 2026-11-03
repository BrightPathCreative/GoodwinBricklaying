"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/**
 * Saves gclid/UTM tags from the landing URL on first page load, so the
 * enquiry form can still pass them to GHL if the visitor enquires on a later
 * page. See lib/attribution.ts.
 */
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}
