# Pimolu Games

An English FPS website template built with **Next.js 16**, **React 19**, **Pimolu UI**, and **Lucide**. It combines a dark visual style, electric green accents, Barlow Condensed typography, and cinematic imagery.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For production, run `npm run build` and then `npm start`.

## Checks

`npm test` runs four DOM tests covering player setup, Battle Pass tracks, gallery navigation, and mode selection. `npm run build` checks types and creates the production build.

## Experience

- Responsive navigation with a mobile menu.
- Battle Royale, Multiplayer, and Ranked Arena modes with detailed previews.
- Fracture Battle Pass with free and premium reward previews.
- Six-image gameplay gallery with a full-screen lightbox.
- Editorial updates and an accessible FAQ.
- Player setup with nickname validation, platform and mode selection, and browser-local persistence.
- Reduced-motion support and accessible controls.

The interface uses Pimolu UI components throughout: `Navbar`, `Button`, `Card`, `Badge`, `Dialog`, `Tabs`, `SegmentedControl`, `Input`, `Alert`, `Accordion`, `Lightbox`, `Image`, `Footer`, `Box`, `Heading`, `Paragraph`, `Text`, and `Link`. Lucide provides the icons.

## Customize

- `app/game-data.ts`: modes, rewards, gallery, and editorial content.
- `app/page.tsx`: sections and interactions.
- `app/globals.css`: theme, layout, and responsive styles.
- `public/images/`: locally stored visuals.
- `app/layout.tsx`: fonts and metadata. Set `NEXT_PUBLIC_SITE_URL` to the deployed site URL for Open Graph metadata.

## Scope

Pimolu Games is a **fictional game concept and website template**. It has no game engine, matchmaking, download, authentication, or payments. Demo player settings are stored only in browser `localStorage` under `nexus-player`; no data is sent to a server.

Halo Infinite images are visual references and are not royalty-free assets. See [ASSETS.md](./ASSETS.md) for sources and reuse information.
