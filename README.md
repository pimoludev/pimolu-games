# Pimolu Games

![Pimolu Games campaign artwork](public/images/hero.jpg)

**One world. Your rules.** Pimolu Games is a cinematic FPS website showcase built with [Pimolu UI](https://pimolu.com/). It presents a fictional game universe through a Battle Royale, squad multiplayer, a ranked arena, and the Fracture Battle Pass.

The experience pairs bold typography, electric green accents, and gameplay imagery with an English interface. Explore the site to see how Pimolu UI can support a complete, responsive game presentation, from the first impression to the smallest interaction.

## What this showcase demonstrates

- **Game modes:** Battle Royale, Multiplayer, and Ranked Arena cards with detailed previews.
- **Battle Pass:** a 100-tier season concept with free and premium reward tracks.
- **Gameplay gallery:** six images, carousel controls, and a full-screen lightbox.
- **Player setup:** nickname, platform, and preferred mode saved in the browser.
- **World and updates:** editorial stories, visual sections, and an FAQ.
- **Responsive interaction:** mobile navigation, accessible dialogs, keyboard controls, and reduced-motion support.

Pimolu Games is a **website concept**, not a playable game. Modes, seasons, rewards, and player profiles are illustrative. There is no multiplayer server, download, account, or payment flow.

## Built with Pimolu UI

Pimolu components form the interface throughout the showcase:

| Area | Components |
| --- | --- |
| Layout and typography | `Box`, `Heading`, `Paragraph`, `Text` |
| Navigation and actions | `Navbar`, `Link`, `Button` |
| Game modes and rewards | `Card`, `Badge`, `Image` |
| Overlays and gallery | `Dialog`, `Lightbox`, `Tabs` |
| Player setup | `Input`, `SegmentedControl`, `Alert` |
| Additional content | `Accordion`, `Footer` |
| Theme | `PimoluProvider` |

The visual direction lives in [`app/globals.css`](app/globals.css), while [`app/page.tsx`](app/page.tsx) composes the experience. [Lucide](https://lucide.dev/) supplies the icons.

## Tech stack

- Next.js 16 App Router, React 19, and TypeScript
- `@pimolu/react` and `@pimolu/web-styles`
- `lucide-react`
- ESLint and the Node.js test runner

## Getting started

Use Node.js 24 or later. Node.js 22.13+ and 20.19+ are also supported within their respective major versions. Run these commands from the repository root.

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No API keys or external services are needed for the local demo.

For a production build:

```sh
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` to override the public site URL used by social sharing metadata. It defaults to `https://games.pimolu.com`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production site and check types |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run interaction tests |

## Make it your own

| What to change | Where to start |
| --- | --- |
| Modes, rewards, gallery, and stories | [`app/game-data.ts`](app/game-data.ts) |
| Homepage layout and shared interactions | [`app/page.tsx`](app/page.tsx) |
| Navigation and announcement | [`app/components/site-header.tsx`](app/components/site-header.tsx) |
| Hero and feature strip | [`app/components/hero-section.tsx`](app/components/hero-section.tsx) |
| Mode cards and detail dialog | [`app/components/game-modes.tsx`](app/components/game-modes.tsx) |
| Battle Pass section and rewards dialog | [`app/components/battle-pass.tsx`](app/components/battle-pass.tsx) |
| Gallery carousel and lightbox | [`app/components/gameplay-gallery.tsx`](app/components/gameplay-gallery.tsx) |
| News cards and article dialog | [`app/components/game-news.tsx`](app/components/game-news.tsx) |
| Join section and FAQ | [`join-section.tsx`](app/components/join-section.tsx), [`game-faq.tsx`](app/components/game-faq.tsx) |
| Footer and image credits | [`app/components/site-footer.tsx`](app/components/site-footer.tsx) |
| Player setup dialog and browser storage | [`app/components/player-setup.tsx`](app/components/player-setup.tsx) |
| Colour, typography, and responsive layout | [`app/globals.css`](app/globals.css) |
| Fonts, language, and metadata | [`app/layout.tsx`](app/layout.tsx) |
| Images | [`public/images/`](public/images/) |

Demo player settings are stored only in the browser under `nexus-player`; they are not sent to a server. The FPS concept images were AI-generated for this demo. Review [image credits and reuse information](ASSETS.md) before adapting the project.

## License

The source code is available under the [MIT License](LICENSE). See [ASSETS.md](ASSETS.md) for the visuals and third-party assets.

## Resources

- [Pimolu UI](https://pimolu.com/)
- [Pimolu component catalogue](https://pimolu.com/components)
- [Pimolu UI source](https://github.com/pimoludev/ui)
