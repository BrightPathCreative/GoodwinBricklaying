# Image Manifest — Goodwin Bricklaying

Drop all client-supplied images into `/public/images/` using the naming conventions below.
Alt text for each image is defined in `docs/seo.md`.

## Naming Convention

`[service-type]-[description]-[location]-[number].webp`

Examples:
- `heritage-repointing-hawthorn-01.webp`
- `chimney-stack-collingwood-01.webp`
- `architectural-vault-toorak-01.webp`
- `team-on-site-fitzroy-01.webp`
- `texture-clinker-brick-01.webp`

## Images Still Required

| Image | Status | Source |
|---|---|---|
| Hero / banner (1920px+) | ⏳ Awaiting David's selection | David via WhatsApp |
| Heritage work (min 6 images) | ⏳ Awaiting | Laura's Saturday shoot + David WhatsApp |
| Architectural masonry (min 4) | ⏳ Awaiting | David WhatsApp |
| Chimney stacks (min 3) | ⏳ Awaiting | David WhatsApp |
| Fitzroy tunnel | ⏳ In production | @themelbournevideographer |
| Team on site (candid) | ⏳ Awaiting | Laura's shoot |
| Close-up texture shots | ⏳ Awaiting | Laura's shoot |
| Structural / commercial | ⏳ Awaiting | David WhatsApp |

## Image Treatment (apply in CSS or at export)

```css
filter: sepia(0.12) saturate(0.92) brightness(0.96);
```

Apply warm overlay on hero images:
```css
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(78, 67, 61, 0.72);
}
```
