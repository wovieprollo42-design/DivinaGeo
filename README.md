# Divina Gio — Executive Assistant Portfolio

Static one-page portfolio. No build step, no dependencies.

## Structure

- `index.html` — all markup and content
- `styles.css` — full design system (colors, type, layout, responsive)
- `script.js` — tools marquee, mobile menu, sticky nav, scroll reveal
- `images/` — portrait (webp + jpg) and favicon
- `images/tools/` — toolkit logos, all 80x80 PNG on white so the marquee stays even
- `divina-gio-resume.pdf` — resume, opened in a new tab from the hero

## Preview locally

```
npx serve .
```

Or just open `index.html` in a browser.

## Deploy

Any static host works. From this folder:

```
npx vercel deploy --prod
```

## Where to edit content

| What | Where |
| --- | --- |
| Name / nav | `index.html` — `.wordmark` and `.nav__links` |
| Headline, intro, stats | `index.html` — `<section class="hero">` |
| About copy | `index.html` — `#about` |
| Tools list | `script.js` — `TOOLS` array, plus the logo in `images/tools/` |
| Services (6 cards) | `index.html` — `#services` |
| Work history | `index.html` — `#experience` |
| Education | `index.html` — `#education` |
| Email / phone / LinkedIn | `index.html` — `#contact` (and the JSON-LD block in `<head>`) |
| Resume PDF | replace `divina-gio-resume.pdf`, keeping the filename |
| Booking calendar | `index.html` — the `data-url` on `.calendly-inline-widget` |
| Colors | `styles.css` — `:root` variables |

## One thing not to do

Do not set the height of `.calendly-inline-widget` from JavaScript. Calendly's
`widget.js` already resizes that element, and a second writer racing it collapses
the embed to zero height. The CSS height is only the placeholder shown before the
iframe loads.
