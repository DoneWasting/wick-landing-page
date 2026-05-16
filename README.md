# Wick landing page

Marketing site for **Wick — Candle Timer for Traders**.

## Stack

- Next.js 14 (app router) + TypeScript
- Tailwind CSS — brand hex values written literally as arbitrary values (e.g. `bg-[#0E0E0E]`); no theme abstraction
- Static export — drops a `./out` directory that deploys to Vercel (or any static host)

## Run

```
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## What's stubbed

The Wick app source wasn't present in this repo when the page was built, so a handful of assets are placeholders. Replace before launching:

- **`public/wick-logo-large.png`** — referenced in the Open Graph meta. Currently missing; social cards render plain until it's added.
- **`public/favicon.png`** — referenced in `app/layout.tsx`. Currently missing; browsers will request and 404.
- **`public/screenshots/*.png`** — the three phone screenshots in `components/Screenshots.tsx` are placeholder cards. Drop the real PNGs in and swap the stub `<div>`s for `<img>` tags (max-height ~600px).
- **Nav logo** — the three-bar `WickLogo` is an inline SVG approximation of `assets/wick-logo-large.png`. If you want pixel-faithful, replace with an `<img>` of the real logo.

The signature **candle toggle** (`components/CandleToggle.tsx`) is hand-rolled to mirror the in-app interaction: 52px wick rail, 18×28 candle body that slides red → green on click with a 180ms transition.

## Brand tokens (literal hex from the prompt)

```
bg            #0E0E0E
surface       #161616
border        #242424
text/primary  #FFFFFF
text/2ndary   #9A9A9A
text/disabled #4A525C
bull green    #1FBF7A
bear red      #E24B4A
accent blue   #4A90E2
soft blue     #7FB0E8
dark blue     #1E3A5F
```

## Deploy

`npm run build` produces a static `out/` directory. Push the folder to Vercel as a static project, or to any S3/Netlify/Cloudflare bucket.
