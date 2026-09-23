# Divina Gio — Executive Assistant Portfolio

Static one-page portfolio. No build step, no dependencies.

## Structure

- `index.html` — all markup and content
- `styles.css` — full design system (colors, type, layout, responsive)
- `script.js` — tools marquee, mobile menu, sticky nav, scroll reveal
- `images/` — portrait (webp + jpg) and favicon

## Preview locally

```
npx serve divina-gio-portfolio
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
| Tools list | `script.js` — `TOOLS` array |
| Services (6 cards) | `index.html` — `#services` |
| Work history | `index.html` — `#experience` |
| Education | `index.html` — `#education` |
| Email / phone / LinkedIn | `index.html` — `#contact` (and the JSON-LD block in `<head>`) |
| Colors | `styles.css` — `:root` variables |
