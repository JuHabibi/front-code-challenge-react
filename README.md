# Valtech Front Challenge

Next.js 14 implementation of the Valtech tech challenge (homepage + article).

## Run

```bash
npm install
npm run dev
```

- Home: [http://localhost:3000](http://localhost:3000)
- Article: [http://localhost:3000/article](http://localhost:3000/article)

```bash
npm test    # vitest
npm run lint
```

## Data & structure

Content lives in `src/data/` (`index.json`, `article.json`), loaded via repositories and rendered by page views with typed content blocks (`HERO`, `CARD_GRID`, `HERO_ARTICLE`, etc.).

## Design

[Figma](https://www.figma.com/design/VSzml7sK3UraIJpYwGg9eQ/Valtech-Tech-Challenge?node-id=0-1&t=IpHy7qL3ajJmN2W3-1)

## Notes

- Wide office cards use `layout: "wide"` in JSON (not grid index).
- Article back button: `router.back()` when history/referrer allows it, otherwise `router.push("/")`.
- Placeholder images use `<img>`; local assets use `next/image`.
