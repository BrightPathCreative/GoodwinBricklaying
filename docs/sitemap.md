# Sitemap — Goodwin Bricklaying

## URL Structure

```
goodwinbricklaying.com.au/
├── /                                    → Home
├── /about                               → About / Our Story
├── /services                            → Services Overview
│   ├── /services/heritage-restoration   → Heritage & Restoration
│   ├── /services/architectural-masonry  → Architectural Masonry
│   ├── /services/chimneys-fireplaces    → Chimneys & Fireplaces
│   ├── /services/structural-commercial  → Structural & Commercial
│   └── /services/tuck-pointing          → Tuck Pointing
├── /projects                            → Gallery / Portfolio
├── /testimonials                        → Testimonials
├── /contact                             → Contact
└── /locations/
    ├── /locations/camberwell            → Camberwell
    ├── /locations/hawthorn              → Hawthorn
    ├── /locations/toorak                → Toorak
    ├── /locations/canterbury            → Canterbury
    ├── /locations/glen-iris             → Glen Iris
    ├── /locations/surrey-hills          → Surrey Hills
    ├── /locations/richmond              → Richmond
    ├── /locations/fitzroy               → Fitzroy
    └── /locations/hawksburn             → Hawksburn
```

## Redirect

```
goodwinbrickblockandheritage.com.au → 301 → goodwinbricklaying.com.au
```

## Notes

- All location pages target local SEO for that specific suburb
- Service pages are designed to support individual Google Ads campaigns (future phase)
- /projects page to be built once photography is supplied — placeholder until then
- Internal linking: each service page links to relevant location pages and vice versa

---

## Additional Required Pages

```
goodwinbricklaying.com.au/
├── /404                   → Custom 404 — Not Found (noindex)
├── /privacy-policy        → Privacy Policy
└── /cookie-policy         → Cookie Policy
```

## Footer Navigation (Legal)

Include in footer bottom bar:
- Privacy Policy → /privacy-policy
- Cookie Policy → /cookie-policy

## robots.txt

```
User-agent: *
Allow: /

Disallow: /404

Sitemap: https://goodwinbricklaying.com.au/sitemap.xml
```

## Cookie Consent Banner

Display on first visit. Options: Accept All / Manage Preferences.
Required before GA4 / Google Ads cookies fire.
Use a lightweight solution — do not use heavy third-party consent platforms that slow page load.
