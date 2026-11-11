import { Fragment, type ReactNode } from "react";

/**
 * Renders the hero, followed by optional main-site content (for example the
 * trust strip). With nothing to add it returns the hero element unchanged, so
 * the /lp/* landing pages, which never pass `after`, render exactly as before.
 */
export function withAfterHero(hero: ReactNode, after?: ReactNode): ReactNode {
  if (!after) return hero;
  return (
    <Fragment>
      {hero}
      {after}
    </Fragment>
  );
}
