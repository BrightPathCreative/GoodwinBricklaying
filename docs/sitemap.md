# Sitemap — Goodwin Bricklaying

## URL Structure

```
goodwinbricklaying.com.au/
├── /                                    → Home
├── /about                               → About / Our Story
├── /services                            → Services Overview
│   ├── /services/heritage               → Heritage & Restoration
│   ├── /services/architectural          → Architectural Masonry
│   ├── /services/chimneys               → Chimneys & Fireplaces
│   ├── /services/outdoor-kitchens-pizza-ovens → Outdoor Kitchens & Pizza Ovens
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
└── /privacy-policy        → Privacy Policy (includes the cookie disclosure, #cookies)
```

## Footer Navigation (Legal)

Include in footer bottom bar:
- Privacy Policy → /privacy-policy

/cookie-policy 301-redirects to /privacy-policy#cookies.

## robots.txt

```
User-agent: *
Allow: /

Disallow: /404

Sitemap: https://goodwinbricklaying.com.au/sitemap.xml
```

## Cookies

No consent banner (removed October 2026). GA4, Google Ads and GTM load for every visitor; an Australian site has no opt-in requirement under the Privacy Act, and the banner was suppressing ad conversion data. Cookies are disclosed in section 7 of the Privacy Policy.
