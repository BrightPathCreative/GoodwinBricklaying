# Content & Design Notes — Goodwin Bricklaying

These rules apply to every page, every component, and every line of code in this project.
Read before building. Refer back often.

---

## Colour Palette

```css
:root {
  --color-primary:        #5B4F47;   /* Grey Brown — logo bg, primary brand */
  --color-white:          #FFFFFF;
  --color-black:          #000000;
  --color-taupe:          #66574F;   /* Warm Taupe Brown */
  --color-heritage:       #4E433D;   /* Deep Heritage Brown — dark sections */
  --color-stone:          #74665D;   /* Soft Stone Brown */
  --color-clay:           #8A7A70;   /* Clay Beige — labels, accents */
  --color-cream:          #F5F1EC;   /* Warm Cream — light backgrounds */
  --color-text-dark:      #2C2420;   /* Body text on light */
  --color-text-light:     #F5F1EC;   /* Body text on dark */
  --color-overlay:        rgba(78, 67, 61, 0.72);
  --color-overlay-light:  rgba(91, 79, 71, 0.45);
  --color-divider:        #8A7A70;
  --color-star:           #C9A96E;   /* Gold — star ratings only */
}
```

**Rules:**
- NEVER use cool greys, blues, or corporate colours
- Dark backgrounds: #4E433D or #5B4F47
- Light backgrounds: #F5F1EC or white
- Never use black (#000) as a background — it is too stark for this brand

---

## Typography

```css
/* Import */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Jost:wght@300;400&display=swap');

--font-display: 'Cormorant Garamond', Georgia, serif;
--font-body:    'Jost', system-ui, sans-serif;
```

**Usage:**
- `--font-display`: All headings, hero text, pull quotes, section statements
- `--font-body`: Body copy, nav, labels, buttons, captions, form fields
- Weight: 300–400 only. **Never bold (700+).**
- Labels/eyebrows: font-body, ALL CAPS, letter-spacing: 0.2em–0.3em
- Never tight letter-spacing on body text
- Heading line-height: 1.1–1.2
- Body line-height: 1.7–1.8

---

## Copy Rules

- **Do not use:** "affordable", "cheap", "budget", "competitive rates", "free quote"
- **Do not use:** Trades clichés — "no job too big or small", "quality guaranteed"
- **Do not use:** Exclamation marks in hero or heading copy
- **Do not claim:** Licensed builder — David is NOT a licensed builder
- **Do use:** Confident, authoritative language — David is an expert
- **Do use:** Specific detail — project names, suburb names, years of experience
- **Do use:** Heritage-specific vocabulary — repointing, mortar profiles, crack stitching
- Keep headlines short and architectural — not descriptive
- Copy is SEO-informed but must read naturally — never keyword-stuffed
- Suburb names and service types appear naturally throughout copy for local SEO

---

## Layout Rules

- Generous negative space is a **design feature** — do not fill empty space
- Max content width: 1280px, centred
- Narrow text blocks: max-width 780px
- Section padding: 8rem top/bottom desktop, 4rem mobile
- Full-bleed sections have no max-width constraint
- Asymmetric layouts are encouraged (5/7 or 4/8 column splits)
- **Never crowd elements**

---

## Image Rules

- All images carry warm earthy treatment:
  ```css
  filter: sepia(0.12) saturate(0.92) brightness(0.96);
  ```
- Hero overlay:
  ```css
  background: rgba(78, 67, 61, 0.72);
  ```
- Never display cool-toned, blue-filtered, or flat images
- All images: lazy-loaded except above-the-fold hero
- Format: WebP preferred, JPG fallback
- Hero/banner: min 1920px wide
- Cards: min 800px wide
- All images MUST have descriptive alt text — see `docs/seo.md` for alt text conventions

---

## Navigation

- Transparent over hero → solid `var(--color-heritage)` after 80px scroll
- Sticky / fixed on scroll
- Logo: white PNG `/public/logo/goodwin-logo-white-transparent.png`
- Nav links: uppercase, letter-spacing: 0.15em, font-size: 0.75rem, weight 300
- Menu items: HOME · PROJECTS · HERITAGE · SERVICES · ABOUT · CONTACT
- Mobile: hamburger, full-screen overlay, earthy dark background

---

## Buttons & CTAs

```css
/* Primary outlined button */
.btn-primary {
  border: 1px solid currentColor;
  padding: 0.75rem 2rem;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}
/* On dark background: white text/border → fill on hover */
/* On light background: dark text/border → fill on hover */
```

- All button text: UPPERCASE, spaced, weight 300
- Never use rounded corners (border-radius: 0 or max 2px)
- Never use filled/solid buttons as primary — outlined is the brand standard

---

## What This Site Is NOT

- Not a trades directory listing
- Not a budget or mid-market builder site
- Not corporate, blocky, or heavy
- Not loud, colourful, or energetic
- Not a site with stock photography of generic bricklayers

## What This Site IS

- A luxury architecture studio aesthetic applied to a masonry specialist
- Image-led, editorial, refined
- Designed to make the right client feel: "this is exactly who I want"
- Designed to make the wrong client feel: "this is probably out of my budget"

---

## Placeholders

Where the following appear in copy files, replace with:

| Placeholder | Replace with |
|---|---|
| `[CRM Number]` | CRM tracking phone number (supplied post-setup) |
| `[BUTTON]` | Styled CTA button per above spec |
| `[PHONE]` | Click-to-call CRM number link |

---

## Breadcrumbs

Add to all inner pages (not homepage). Use BreadcrumbList schema alongside visible breadcrumb nav.

### HTML Pattern
```html
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="https://goodwinbricklaying.com.au">
        <span itemprop="name">Home</span>
      </a>
      <meta itemprop="position" content="1" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="https://goodwinbricklaying.com.au/services">
        <span itemprop="name">Services</span>
      </a>
      <meta itemprop="position" content="2" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <span itemprop="name">Heritage & Restoration</span>
      <meta itemprop="position" content="3" />
    </li>
  </ol>
</nav>
```

### Breadcrumb Paths by Page

| Page | Breadcrumb Trail |
|---|---|
| About | Home > About |
| Services | Home > Services |
| Heritage | Home > Services > Heritage & Restoration |
| Architectural | Home > Services > Architectural Masonry |
| Chimneys | Home > Services > Chimneys & Fireplaces |
| Structural | Home > Services > Structural & Commercial |
| Tuck Pointing | Home > Services > Tuck Pointing |
| Testimonials | Home > Testimonials |
| Contact | Home > Contact |
| Camberwell | Home > Locations > Camberwell |
| Hawthorn | Home > Locations > Hawthorn |
| Toorak | Home > Locations > Toorak |
| Canterbury | Home > Locations > Canterbury |
| Glen Iris | Home > Locations > Glen Iris |
| Surrey Hills | Home > Locations > Surrey Hills |
| Richmond | Home > Locations > Richmond |
| Fitzroy | Home > Locations > Fitzroy |
| Hawksburn | Home > Locations > Hawksburn |
| Privacy Policy | Home > Privacy Policy |
| Cookie Policy | Home > Cookie Policy |

### Styling
- Minimal, small text — var(--color-clay), font-size: 0.8rem
- Separator: " / " or "›" between items
- Current page: not linked, slightly lighter tone
- Position: below nav, above page hero

---

## Skip Link (Accessibility — Required on Every Page)

Place as the very first element inside <body>:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  background: var(--color-heritage);
  color: var(--color-cream);
  padding: 0.75rem 1.5rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  text-decoration: none;
  z-index: 9999;
  transition: top 0.2s;
}
.skip-link:focus {
  top: 1rem;
}
```

Add `id="main-content"` to the <main> element on every page.
