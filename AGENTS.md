<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

- Use Node.js `^20.19.0 || ^22.13.0 || >=24` and install with `npm ci`. The local demo needs no API keys or backend services.
- Develop with `npm run dev`; serve a production build with `npm run build` then `npm run start`.
- Verify with `npm run lint`, `npm test`, and `npm run build`. There is no standalone typecheck script; `next build` runs TypeScript after generating Next route types.
- Run one test file with `node --import tsx --test tests/experience.test.tsx`; filter cases with `node --import tsx --test --test-name-pattern="battle pass" tests/experience.test.tsx`.

## Code map

- This is one Next.js App Router route. `app/page.tsx` assembles the homepage and connects sections to the shared player setup and gameplay gallery.
- `app/components/` contains the header, footer, homepage sections, and their dialogs. See the README for the component map.
- Editable showcase content is in `app/game-data.ts`. Icons in `app/components/game-modes.tsx` are keyed by mode ID.
- `app/layout.tsx` owns fonts, language, and metadata. `app/globals.css` imports Pimolu styles and contains the theme and responsive overrides.
- Player setup is browser-only and persists under the `localStorage` key `nexus-player`; there is no account or server flow.

## Gotchas

- `next.config.ts` enables Cache Components and Partial Prefetching. Legacy route-segment exports such as `dynamic`, `revalidate`, and `fetchCache` are rejected; consult the bundled Next docs before changing caching behavior.
- Tailwind 4 is wired through the Turbopack `*.css` loader in `next.config.ts`, although most styling is plain CSS in `app/globals.css`.
- `NEXT_PUBLIC_SITE_URL` overrides the metadata base; the default is `https://games.pimolu.com` so Open Graph images never point at localhost in production.
- Tests use the Node test runner, Testing Library, and a manual JSDOM bootstrap—not Jest or Vitest. DOM globals and browser API stubs must be installed before dynamically importing `app/page.tsx`; only `tests/*.test.tsx` are selected.
- Read `ASSETS.md` for the provenance and reuse notes of the visuals and third-party assets.
