# Pimolu Games

![Original science-fiction key art](public/images/hero.jpg)

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
| Page copy and interactions | [`app/page.tsx`](app/page.tsx) |
| Colour, typography, and responsive layout | [`app/globals.css`](app/globals.css) |
| Fonts, language, and metadata | [`app/layout.tsx`](app/layout.tsx) |
| Images | [`public/images/`](public/images/) |

Demo player settings are stored only in the browser under `nexus-player`; they are not sent to a server. The science-fiction images were AI-generated for this demo. Review [image credits and reuse information](ASSETS.md) before adapting the project.

## Resources

- [Pimolu UI](https://pimolu.com/)
- [Pimolu component catalogue](https://pimolu.com/components)
- [Pimolu UI source](https://github.com/pimoludev/ui)
