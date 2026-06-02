import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Serves /llms.txt from the single source of truth at the project root
 * (llms.txt). Prerendered at build time so there's no per-request file read,
 * and no duplicate copy to keep in sync.
 */
export const dynamic = "force-static";

export function GET(): Response {
  const contents = readFileSync(join(process.cwd(), "llms.txt"), "utf8");
  return new Response(contents, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
