"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  Badge,
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Footer,
  Heading,
  Image,
  Input,
  Lightbox,
  Link,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarToggle,
  Paragraph,
  PimoluProvider,
  SegmentedControl,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from "@pimolu/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Crosshair,
  Diamond,
  Gamepad2,
  Globe2,
  Layers3,
  Maximize2,
  Menu,
  Monitor,
  Orbit,
  ScanLine,
  Shield,
  Sparkles,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { articles, gallery, modes, rewards } from "./game-data";

const modeIcons = [Crosshair, Users, Trophy];

function Mark() {
  return (
    <Box className="wordmark">
      <Zap fill="currentColor" aria-hidden="true" />
      <Text>PIMOLU GAMES</Text>
      <Text className="wordmark-dot">®</Text>
    </Box>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState<number | null>(null);
  const [article, setArticle] = useState<number | null>(null);
  const [passOpen, setPassOpen] = useState(false);
  const [playOpen, setPlayOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [platform, setPlatform] = useState("PC");
  const [selectedMode, setSelectedMode] = useState("royale");
  const [pseudo, setPseudo] = useState("");
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [creditsOpen, setCreditsOpen] = useState(false);

  function openSetup(modeId?: string) {
    setSaved(false);
    setSaveError("");
    try {
      const stored = JSON.parse(localStorage.getItem("nexus-player") || "null");
      if (stored && typeof stored.pseudo === "string")
        setPseudo(stored.pseudo.slice(0, 20));
      if (["PC", "PlayStation", "Xbox"].includes(stored?.platform))
        setPlatform(stored.platform);
      if (modes.some((item) => item.id === stored?.mode))
        setSelectedMode(stored.mode);
    } catch {
      /* Setup remains available when browser storage is blocked. */
    }
    if (modeId) setSelectedMode(modeId);
    setMode(null);
    setPlayOpen(true);
    setMenuOpen(false);
  }
  function saveSetup() {
    if (pseudo.trim().length < 3) {
      setSaveError("Choose a player name with at least 3 characters.");
      return;
    }
    try {
      localStorage.setItem(
        "nexus-player",
        JSON.stringify({ pseudo: pseudo.trim(), platform, mode: selectedMode }),
      );
      setSaveError("");
      setSaved(true);
    } catch {
      setSaveError(
        "Browser storage is unavailable. Your setup will remain visible until you close this page.",
      );
    }
  }
  function openGallery(index: number) {
    setGalleryIndex(index);
    setGalleryOpen(true);
  }

  return (
    <PimoluProvider
      theme="dark"
      stylePreset="monochrome"
      radius="medium"
      brandColor="#c0f65c"
      persist={false}
      className="nexus"
    >
      <Link href="#main" className="skip-link">
        Skip to content
      </Link>
      <Box className="announcement">
        <Text className="announcement-label">NEW CHAPTER</Text>
        <Text>SEASON 04: FRACTURE</Text>
        <Link href="#battle-pass" aria-label="Explore the Fracture season">
          <ArrowUpRight size={14} />
        </Link>
      </Box>
      <Box className="site-header">
        <Navbar
          className="site-nav page-width"
          appearance="transparent"
          bordered={false}
          itemsPosition="center"
          collapsible
          open={menuOpen}
          onOpenChange={setMenuOpen}
        >
          <NavbarBrand href="#" aria-label="Pimolu Games — home">
            <Mark />
          </NavbarBrand>
          <NavbarToggle
            icon={<Menu />}
            closeIcon={<X />}
            openLabel="Open menu"
            closeLabel="Close menu"
          />
          <NavbarContent aria-label="Main navigation">
            {[
              ["The world", "univers"],
              ["Game modes", "modes"],
              ["Battle Pass", "battle-pass"],
              ["Updates", "actualites"],
            ].map(([label, id]) => (
              <NavbarItem
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarActions>
            <Text className="nav-language">
              <Globe2 size={14} /> EN
            </Text>
            <Button
              className="cta nav-cta"
              onClick={() => openSetup()}
              endIcon={<ArrowUpRight size={16} />}
            >
              Join the fight
            </Button>
          </NavbarActions>
        </Navbar>
      </Box>

      <Box as="main" id="main">
        <Box
          as="section"
          className="hero"
          id="univers"
          aria-labelledby="hero-title"
        >
          <Image
            src="/images/hero.jpg"
            alt="Futuristic soldier facing a mountainous world and a vast ring in the sky"
            containerClassName="hero-image"
            rounded="none"
            loading="eager"
            fetchPriority="high"
            showSkeleton={false}
          />
          <Box className="hero-shade" />
          <Box className="hero-grid" aria-hidden="true" />
          <Box className="page-width hero-content">
            <Box className="hero-eyebrow">
              <Text className="status-dot" />
              <Text>A NEW WORLD AWAITS</Text>
            </Box>
            <Heading level={1} id="hero-title" className="hero-title">
              ONE WORLD.
              <br />
              YOUR <Text>RULES.</Text>
            </Heading>
            <Paragraph className="hero-description">
              The instinct of a survivor. The strength of a squad.
              <br />
              Step into Pimolu Games and leave your mark.
            </Paragraph>
            <Box className="hero-actions">
              <Button
                className="cta"
                size="lg"
                onClick={() => openSetup()}
                endIcon={<ArrowUpRight size={19} />}
              >
                Enter the arena
              </Button>
              <Button
                className="secondary-cta"
                appearance="outline"
                size="lg"
                onClick={() => openGallery(0)}
                startIcon={<ScanLine size={18} />}
              >
                Explore gameplay
              </Button>
            </Box>
            <Box className="hero-platforms">
              <Text>IMAGINED FOR</Text>
              <Text>
                <Monitor size={16} /> PC
              </Text>
              <Text>
                <Gamepad2 size={17} /> PLAYSTATION
              </Text>
              <Text>
                <Orbit size={17} /> XBOX
              </Text>
            </Box>
          </Box>
          <Box className="hero-coordinate" aria-hidden="true">
            <Crosshair size={22} />
            <Text>
              SECTOR 07
              <br />
              35° 41′ N · 139° 41′ E
            </Text>
          </Box>
          <Box className="hero-bottom page-width">
            <Link className="scroll-link" href="#modes">
              <ArrowDown size={15} /> THE BATTLEFIELD AWAITS
            </Link>
            <Text className="hero-edition">
              PIMOLU GAMES / FRACTURE <Text>—</Text> VOL. 04
            </Text>
          </Box>
        </Box>
        <Box className="feature-strip">
          <Box className="page-width feature-strip-inner">
            <Text>
              <Crosshair /> TACTICAL FPS
            </Text>
            <Text>
              <Users /> BUILT FOR THE SQUAD
            </Text>
            <Text>
              <Globe2 /> A WORLD TO CLAIM
            </Text>
            <Text>
              <Shield /> SKILL ABOVE ALL
            </Text>
          </Box>
        </Box>

        <Box
          as="section"
          id="modes"
          className="section page-width"
          aria-labelledby="modes-title"
        >
          <Box className="section-heading">
            <Box>
              <Text className="eyebrow">01 / CHOOSE YOUR BATTLEGROUND</Text>
              <Heading id="modes-title" className="section-title">
                YOUR KIND OF <Text>COMBAT.</Text>
              </Heading>
            </Box>
            <Paragraph className="section-intro">
              Go it alone or fight for victory together.
              <br />
              Same intensity. Your way to play.
            </Paragraph>
          </Box>
          <Box className="mode-grid">
            {modes.map((item, index) => {
              const Icon = modeIcons[index];
              return (
                <Card key={item.id} className="mode-card">
                  <Image
                    src={`/images/${item.image}.jpg`}
                    alt={
                      item.name === "BATTLE ROYALE"
                        ? "Forested valley and futuristic architecture"
                        : item.tagline
                    }
                    containerClassName="mode-image"
                    rounded="none"
                    loading="lazy"
                  />
                  <Box className="mode-shade" />
                  <Box className="mode-top">
                    <Badge className="mode-tag" appearance="outline">
                      <Icon size={13} /> {item.players}
                    </Badge>
                    <Text className="mode-number">0{index + 1}</Text>
                  </Box>
                  <Box className="mode-bottom">
                    <Text className="mode-format">{item.format}</Text>
                    <Heading level={3} className="mode-title">
                      {item.name}
                    </Heading>
                    <Paragraph>{item.tagline}</Paragraph>
                    <Button
                      className="mode-link"
                      appearance="ghost"
                      onClick={() => setMode(index)}
                      endIcon={<ArrowUpRight size={20} />}
                      aria-label={`Explore ${item.name} mode`}
                    >
                      Explore mode
                    </Button>
                  </Box>
                </Card>
              );
            })}
          </Box>
        </Box>

        <Box
          as="section"
          id="battle-pass"
          className="pass-section"
          aria-labelledby="pass-title"
        >
          <Box className="page-width pass-layout">
            <Box className="pass-copy">
              <Text className="eyebrow">02 / BATTLE PASS · SEASON 04</Text>
              <Heading id="pass-title" className="pass-title">
                LEAVE
                <br />
                YOUR <Text>MARK.</Text>
              </Heading>
              <Paragraph>
                Make every match memorable. Unlock 100 reward tiers and shape
                your identity on the battlefield.
              </Paragraph>
              <Box className="pass-points">
                <Text>
                  <Layers3 size={17} /> 100 tiers
                </Text>
                <Text>
                  <Sparkles size={17} /> Exclusive rewards
                </Text>
              </Box>
              <Button
                className="cta"
                size="lg"
                onClick={() => setPassOpen(true)}
                endIcon={<ArrowUpRight size={18} />}
              >
                Explore the Battle Pass
              </Button>
              <Text className="pass-note">
                YOUR STYLE EVOLVES. YOUR SKILL DOES THE REST.
              </Text>
            </Box>
            <Box className="pass-visual">
              <Image
                src="/images/gameplay-0.jpg"
                alt="Gold Sovereign armor reward"
                containerClassName="pass-background"
                rounded="none"
                loading="lazy"
              />
              <Box className="pass-visual-shade" />
              <Text className="pass-outline" aria-hidden="true">
                FRACTURE
              </Text>
              <Badge className="season-tag" appearance="outline">
                <Diamond size={13} /> SEASON 04
              </Badge>
              <Box className="pass-featured">
                <Text className="eyebrow">ULTIMATE REWARD</Text>
                <Heading level={3}>SOUVERAIN</Heading>
                <Text>Legendary armor · Tier 100</Text>
              </Box>
              <Box className="reward-preview">
                {rewards.slice(1).map((reward) => (
                  <Button
                    key={reward.level}
                    appearance="ghost"
                    className="reward-mini"
                    onClick={() => setPassOpen(true)}
                    aria-label={`View ${reward.name}, tier ${reward.level}`}
                  >
                    <Image
                      src={`/images/${reward.image}.jpg`}
                      alt=""
                      rounded="none"
                      style={{ objectPosition: reward.position }}
                    />
                    <Text>TIER {reward.level}</Text>
                    <Diamond size={12} />
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          as="section"
          id="gameplay"
          className="section page-width gameplay-section"
          aria-labelledby="gameplay-title"
        >
          <Box className="section-heading">
            <Box>
              <Text className="eyebrow">03 / IN THE THICK OF IT</Text>
              <Heading id="gameplay-title" className="section-title">
                WORDS CAN’T
                <br />
                <Text>CAPTURE IT.</Text>
              </Heading>
            </Box>
            <Box className="gallery-heading-right">
              <Paragraph className="section-intro">
                Every second can change everything.
                <br />
                Step into the action.
              </Paragraph>
              <Box className="gallery-controls">
                <Button
                  appearance="outline"
                  iconOnly
                  startIcon={<ChevronLeft size={18} />}
                  aria-label="Previous image"
                  onClick={() =>
                    setGalleryIndex(
                      (galleryIndex + gallery.length - 1) % gallery.length,
                    )
                  }
                />
                <Text className="gallery-counter" aria-live="polite">
                  0{galleryIndex + 1} <Text>/ 06</Text>
                </Text>
                <Button
                  appearance="outline"
                  iconOnly
                  startIcon={<ChevronRight size={18} />}
                  aria-label="Next image"
                  onClick={() =>
                    setGalleryIndex((galleryIndex + 1) % gallery.length)
                  }
                />
              </Box>
            </Box>
          </Box>
          <Box className="gallery-grid">
            <Button
              className="gallery-main media-button"
              appearance="ghost"
              onClick={() => openGallery(galleryIndex)}
              aria-label={`Expand: ${gallery[galleryIndex].alt}`}
            >
              <Image
                src={gallery[galleryIndex].src}
                alt={gallery[galleryIndex].alt}
                rounded="none"
                loading="lazy"
              />
              <Box className="gallery-overlay">
                <Text>
                  <Text className="status-dot" /> TOTAL IMMERSION
                </Text>
                <Maximize2 size={19} />
              </Box>
            </Button>
            <Box className="gallery-side">
              {[1, 2].map((offset) => {
                const index = (galleryIndex + offset) % gallery.length;
                return (
                  <Button
                    className="media-button"
                    appearance="ghost"
                    key={index}
                    onClick={() => openGallery(index)}
                    aria-label={`Expand: ${gallery[index].alt}`}
                  >
                    <Image
                      src={gallery[index].src}
                      alt={gallery[index].alt}
                      rounded="none"
                      loading="lazy"
                    />
                    <Maximize2 className="expand-icon" size={18} />
                  </Button>
                );
              })}
            </Box>
          </Box>
          <Box className="gallery-foot">
            <Text>ORIGINAL SCI-FI CONCEPT ART</Text>
            <Button
              appearance="ghost"
              onClick={() => openGallery(0)}
              endIcon={<ArrowUpRight size={15} />}
            >
              View full gallery
            </Button>
          </Box>
        </Box>

        <Box
          as="section"
          id="actualites"
          className="section news-section page-width"
          aria-labelledby="news-title"
        >
          <Box className="section-heading">
            <Box>
              <Text className="eyebrow">04 / THE PIMOLU GAMES SIGNAL</Text>
              <Heading id="news-title" className="section-title">
                IN THE <Text>CROSSFIRE.</Text>
              </Heading>
            </Box>
            <Text className="section-intro">
              Stories from the world of Pimolu Games.
            </Text>
          </Box>
          <Box className="news-grid">
            {articles.map((item, index) => (
              <Card key={item.title} className="news-card">
                <Button
                  appearance="ghost"
                  className="news-image media-button"
                  onClick={() => setArticle(index)}
                  aria-label={`Read: ${item.title}`}
                >
                  <Image
                    src={`/images/${item.image}.jpg`}
                    alt={item.title}
                    rounded="none"
                    loading="lazy"
                  />
                  <ArrowUpRight className="expand-icon" size={20} />
                </Button>
                <Box className="news-meta">
                  <Text>{item.category}</Text>
                  <Text>{item.date}</Text>
                </Box>
                <Heading level={3}>{item.title}</Heading>
                <Button
                  appearance="ghost"
                  className="news-link"
                  onClick={() => setArticle(index)}
                  endIcon={<ArrowRight size={15} />}
                >
                  Read the story
                </Button>
              </Card>
            ))}
          </Box>
        </Box>

        <Box as="section" className="join-section" aria-labelledby="join-title">
          <Image
            src="/images/world.jpg"
            alt=""
            containerClassName="join-image"
            rounded="none"
            loading="lazy"
          />
          <Box className="join-shade" />
          <Box className="join-content page-width">
            <Crosshair size={34} strokeWidth={1.2} />
            <Text className="eyebrow">
              THE NEXT CHAPTER STARTS TOGETHER
            </Text>
            <Heading id="join-title">
              YOUR SQUAD
              <br />
              <Text>IS WAITING.</Text>
            </Heading>
            <Paragraph>
              Great stories begin with one match.
            </Paragraph>
            <Button
              className="cta"
              size="lg"
              onClick={() => openSetup()}
              endIcon={<ArrowUpRight size={18} />}
            >
              Join the adventure
            </Button>
            <Text className="join-signature">
              TAKE POSITION. FIND YOUR TEAM. MAKE HISTORY.
            </Text>
          </Box>
        </Box>

        <Box
          as="section"
          id="questions"
          className="faq-section page-width"
          aria-labelledby="faq-title"
        >
          <Box>
            <Text className="eyebrow">BEFORE DEPLOYMENT</Text>
            <Heading id="faq-title" className="section-title">
              GOOD TO <Text>GO.</Text>
            </Heading>
          </Box>
          <Accordion collapsible className="faq-list">
            <AccordionItem value="concept">
              <AccordionTrigger>What is Pimolu Games?</AccordionTrigger>
              <AccordionContent>
                Pimolu Games is an FPS website concept built to showcase Pimolu
                UI. Its modes, seasons, and rewards are fictional. This is an
                interactive demo, with no downloadable game or multiplayer
                servers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pass">
              <AccordionTrigger>
                How does the Battle Pass work?
              </AccordionTrigger>
              <AccordionContent>
                The concept features 100 tiers, with free and premium tracks
                offering cosmetic items. You can compare the rewards in the
                preview. Purchases and payments are unavailable in this demo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="data">
              <AccordionTrigger>
                Where is my setup saved?
              </AccordionTrigger>
              <AccordionContent>
                Your nickname, platform, and preferred mode are saved only in
                your browser’s local storage. No account is created, and no
                data is sent to a server. You can clear it in your browser
                settings.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>

      <Footer
        className="site-footer page-width"
        appearance="transparent"
        bordered={false}
        brand={
          <Link href="#" aria-label="Back to top">
            <Mark />
          </Link>
        }
        description="One world. Your rules."
        columns={[
          {
            title: "EXPLORE",
            links: [
              { label: "The world", href: "#univers" },
              { label: "Game modes", href: "#modes" },
              { label: "Battle Pass", href: "#battle-pass" },
            ],
          },
          {
            title: "STAY CONNECTED",
            links: [
              { label: "News", href: "#actualites" },
              { label: "Gallery", href: "#gameplay" },
              { label: "FAQ", href: "#questions" },
            ],
          },
          {
            title: "PIMOLU",
            links: [
              {
                label: "Pimolu UI",
                href: "https://pimolu.com/",
                external: true,
              },
              {
                label: "Components",
                href: "https://pimolu.com/components",
                external: true,
              },
              {
                label: "Source code",
                href: "https://github.com/pimoludev/pimolu-games",
                external: true,
              },
            ],
          },
        ]}
        copyright={
          <Text>© 2026 PIMOLU GAMES · CREATIVE CONCEPT, FICTIONAL GAME.</Text>
        }
        bottom={
          <Box className="footer-bottom">
            <Button appearance="ghost" onClick={() => setCreditsOpen(true)}>
              Image credits
            </Button>
            <Box className="footer-meta">
              <Link
                className="github-link"
                href="https://github.com/pimoludev/pimolu-games"
                aria-label="Pimolu Games on GitHub"
                external
                showExternalIcon={false}
              >
                <GitHubIcon />
              </Link>
              <Text className="footer-credit">
                CRAFTED WITH{" "}
                <Link href="https://pimolu.com" external showExternalIcon={false}>
                  PIMOLU UI <ArrowUpRight size={12} />
                </Link>
              </Text>
            </Box>
          </Box>
        }
      />

      <Dialog
        open={mode !== null}
        onOpenChange={(open) => {
          if (!open) setMode(null);
        }}
      >
        <DialogContent size="lg" closeLabel="Close" className="nexus-dialog">
          {mode !== null && (
            <>
              <Image
                className="dialog-cover"
                src={`/images/${modes[mode].image}.jpg`}
                alt={modes[mode].name}
                rounded="md"
              />
              <DialogHeader>
                <Text className="eyebrow">
                  {modes[mode].players} / {modes[mode].format}
                </Text>
                <DialogTitle>{modes[mode].name}</DialogTitle>
                <DialogDescription>{modes[mode].description}</DialogDescription>
              </DialogHeader>
              <Box className="detail-list">
                {modes[mode].features.map((feature) => (
                  <Text key={feature}>
                    <Check size={16} />
                    {feature}
                  </Text>
                ))}
              </Box>
              <Button
                className="cta"
                onClick={() => openSetup(modes[mode].id)}
                endIcon={<ArrowUpRight size={17} />}
              >
                Choose this mode
              </Button>
              <Text className="dialog-note">
                A fictional mode created for the Pimolu Games concept.
              </Text>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={passOpen} onOpenChange={setPassOpen}>
        <DialogContent size="lg" closeLabel="Close" className="nexus-dialog pass-dialog">
          <Box className="pass-dialog-banner">
            <Image
              src="/images/gameplay-5.jpg"
              alt=""
              containerClassName="pass-dialog-banner-image"
              rounded="none"
            />
            <Box className="pass-dialog-banner-shade" />
            <Box className="pass-dialog-banner-copy">
              <Text className="eyebrow">PIMOLU GAMES / SEASON 04</Text>
              <Text className="pass-dialog-banner-title">FRACTURE</Text>
              <Text className="pass-dialog-banner-subtitle">FORGE YOUR LEGEND</Text>
            </Box>
          </Box>
          <DialogHeader className="pass-dialog-header">
            <Text className="eyebrow">THE BATTLE PASS / SEASON 04</Text>
            <DialogTitle>100 tiers. One signature.</DialogTitle>
            <DialogDescription>
              Discover a curated preview of this season’s rewards. Every item
              is cosmetic, so your skill makes the difference.
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="premium">
            <TabsList aria-label="Battle Pass tracks">
              <TabsTrigger value="premium">Premium track</TabsTrigger>
              <TabsTrigger value="free">Free track</TabsTrigger>
            </TabsList>
            {["premium", "free"].map((track) => (
              <TabsContent key={track} value={track}>
                <Box className="pass-rewards-heading">
                  <Text className="eyebrow">SELECTED REWARDS</Text>
                  <Text>{track === "premium" ? "01 — 100" : "FREE ACCESS"}</Text>
                </Box>
                <Box className="rewards-grid" data-track={track}>
                  {rewards
                    .filter((r) => track === "premium" || r.free)
                    .map((reward) => (
                      <Card className="reward-card" key={reward.level}>
                        <Box className="reward-art">
                          <Image
                            src={`/images/${reward.image}.jpg`}
                            alt={reward.name}
                            rounded="none"
                            style={{ objectPosition: reward.position }}
                          />
                          <Text className="reward-level-chip">LVL {String(reward.level).padStart(2, "0")}</Text>
                        </Box>
                        <Box className="reward-info">
                          <Text className="eyebrow">{reward.free ? "FREE REWARD" : "PREMIUM REWARD"}</Text>
                          <Heading level={3}>{reward.name}</Heading>
                          <Text>{reward.type}</Text>
                        </Box>
                      </Card>
                    ))}
                </Box>
                <Paragraph className="track-description">
                  {track === "premium"
                    ? "The premium track includes free rewards and exclusive cosmetics, culminating in Sovereign armor at tier 100."
                    : "The free track begins with Pathfinder armor. Explore the modes and take on challenges at your own pace."}
                </Paragraph>
              </TabsContent>
            ))}
          </Tabs>
          <Text className="dialog-note">
            Concept preview. Purchases and payments are unavailable.
          </Text>
        </DialogContent>
      </Dialog>

      <Lightbox
        images={gallery}
        open={galleryOpen}
        onOpenChange={setGalleryOpen}
        index={galleryIndex}
        onIndexChange={setGalleryIndex}
        loop
        showThumbnails
        labels={{
          dialog: "Gameplay gallery",
          close: "Close gallery",
          previous: "Previous image",
          next: "Next image",
          thumbnails: "Choose a screenshot",
          goTo: (position) => `Show screenshot ${position}`,
        }}
      />

      <Dialog
        open={article !== null}
        onOpenChange={(open) => {
          if (!open) setArticle(null);
        }}
      >
        <DialogContent size="lg" closeLabel="Close" className="nexus-dialog">
          {article !== null && (
            <>
              <Image
                className="dialog-cover"
                src={`/images/${articles[article].image}.jpg`}
                alt={articles[article].title}
                rounded="md"
              />
              <DialogHeader>
                <Text className="eyebrow">
                  {articles[article].category} / {articles[article].date}
                </Text>
                <DialogTitle>{articles[article].title}</DialogTitle>
                <DialogDescription>{articles[article].body}</DialogDescription>
              </DialogHeader>
              <Paragraph className="article-detail">
                {articles[article].detail}
              </Paragraph>
              <Text className="dialog-note">
                Creative journal · The fictional world of Pimolu Games
              </Text>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={playOpen} onOpenChange={setPlayOpen}>
        <DialogContent
          closeLabel="Close"
          className="nexus-dialog setup-dialog"
        >
          <DialogHeader>
            <Text className="eyebrow">YOUR NEXT MISSION</Text>
            <DialogTitle>
              {saved
                ? `Ready, ${pseudo.trim()}?`
                : "Prepare for deployment."}
            </DialogTitle>
            <DialogDescription>
              {saved
                ? "Your setup has been saved in this browser."
                : "Create your demo profile and choose your battleground."}
            </DialogDescription>
          </DialogHeader>
          {saved ? (
            <Box className="saved-state">
              <Box className="saved-icon">
                <Check size={30} />
              </Box>
              <Heading level={3}>
                {modes.find((item) => item.id === selectedMode)?.name}
              </Heading>
              <Text>
                {platform} · {pseudo.trim()}
              </Text>
              <Paragraph>
                Pimolu Games is a creative concept: no real match will start.
                Explore the modes, rewards, and gallery to continue the
                experience.
              </Paragraph>
              <Button className="cta" onClick={() => setPlayOpen(false)}>
                Keep exploring <ArrowRight size={16} />
              </Button>
              <Button appearance="ghost" onClick={() => setSaved(false)}>
                Edit my setup
              </Button>
            </Box>
          ) : (
            <Box className="setup-fields">
              <Input
                label="Your battlefield name"
                fullWidth
                placeholder="E.g. Ghost_07"
                value={pseudo}
                onValueChange={setPseudo}
                maxLength={20}
                minLength={3}
                autoComplete="nickname"
                helperText="3 to 20 characters."
              />
              <Text className="field-label" id="platform-label">
                Your platform
              </Text>
              <SegmentedControl
                aria-labelledby="platform-label"
                value={platform}
                onValueChange={setPlatform}
                fullWidth
                options={[
                  { value: "PC", label: "PC" },
                  { value: "PlayStation", label: "PlayStation" },
                  { value: "Xbox", label: "Xbox" },
                ]}
              />
              <Text className="field-label" id="mode-label">
                Your game mode
              </Text>
              <SegmentedControl
                aria-labelledby="mode-label"
                value={selectedMode}
                onValueChange={setSelectedMode}
                orientation="vertical"
                fullWidth
                options={modes.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
              />
              {saveError && <Alert variant="danger">{saveError}</Alert>}
              <Button
                className="cta"
                fullWidth
                onClick={saveSetup}
                endIcon={<Check size={17} />}
              >
                Save my setup
              </Button>
              <Text className="dialog-note">
                Local demo · No account created · No download
              </Text>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={creditsOpen} onOpenChange={setCreditsOpen}>
        <DialogContent closeLabel="Close" className="nexus-dialog">
          <DialogHeader>
            <DialogTitle>Images behind the world.</DialogTitle>
            <DialogDescription>
              Pimolu Games is an independent showcase for Pimolu UI. The
              science-fiction images are original AI-generated concepts made
              for this demo. See the asset notes for details.
            </DialogDescription>
          </DialogHeader>
          <Box className="credit-links">
            <Text>Hero, world, and gameplay images · AI-generated for Pimolu Games</Text>
            <Link external href="https://pimolu.com">
              Interface · Pimolu UI
            </Link>
            <Link external href="https://lucide.dev">
              Icons · Lucide
            </Link>
          </Box>
        </DialogContent>
      </Dialog>
    </PimoluProvider>
  );
}
