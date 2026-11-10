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
      <Text>NEXUS</Text>
      <Text className="wordmark-dot">®</Text>
    </Box>
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
      setSaveError("Choisissez un pseudo d'au moins 3 caractères.");
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
        "Le stockage de ce navigateur est indisponible. Votre configuration reste accessible tant que cette page est ouverte.",
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
        Aller au contenu
      </Link>
      <Box className="announcement">
        <Text className="announcement-label">NOUVEAU CHAPITRE</Text>
        <Text>SAISON 04 : FRACTURE</Text>
        <Link href="#battle-pass" aria-label="Découvrir la saison Fracture">
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
          <NavbarBrand href="#" aria-label="Nexus — accueil">
            <Mark />
          </NavbarBrand>
          <NavbarToggle
            icon={<Menu />}
            closeIcon={<X />}
            openLabel="Ouvrir le menu"
            closeLabel="Fermer le menu"
          />
          <NavbarContent aria-label="Navigation principale">
            {[
              ["L’univers", "univers"],
              ["Modes de jeu", "modes"],
              ["Battle Pass", "battle-pass"],
              ["Actualités", "actualites"],
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
              <Globe2 size={14} /> FR
            </Text>
            <Button
              className="cta nav-cta"
              onClick={() => openSetup()}
              endIcon={<ArrowUpRight size={16} />}
            >
              Rejoindre l’aventure
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
            alt="Soldat futuriste face à un monde montagneux et un immense anneau spatial"
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
              <Text>UN NOUVEAU MONDE VOUS ATTEND</Text>
            </Box>
            <Heading level={1} id="hero-title" className="hero-title">
              UN MONDE.
              <br />
              VOS <Text>RÈGLES.</Text>
            </Heading>
            <Paragraph className="hero-description">
              L’instinct d’un survivant. La force d’une escouade.
              <br />
              Entrez dans NEXUS et laissez votre empreinte.
            </Paragraph>
            <Box className="hero-actions">
              <Button
                className="cta"
                size="lg"
                onClick={() => openSetup()}
                endIcon={<ArrowUpRight size={19} />}
              >
                Entrez dans l’arène
              </Button>
              <Button
                className="secondary-cta"
                appearance="outline"
                size="lg"
                onClick={() => openGallery(0)}
                startIcon={<ScanLine size={18} />}
              >
                Explorer le gameplay
              </Button>
            </Box>
            <Box className="hero-platforms">
              <Text>IMAGINÉ POUR</Text>
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
              SECTEUR 07
              <br />
              35° 41′ N · 139° 41′ E
            </Text>
          </Box>
          <Box className="hero-bottom page-width">
            <Link className="scroll-link" href="#modes">
              <ArrowDown size={15} /> LE TERRAIN VOUS ATTEND
            </Link>
            <Text className="hero-edition">
              NEXUS / FRACTURE <Text>—</Text> VOL. 04
            </Text>
          </Box>
        </Box>
        <Box className="feature-strip">
          <Box className="page-width feature-strip-inner">
            <Text>
              <Crosshair /> FPS TACTIQUE
            </Text>
            <Text>
              <Users /> PENSÉ POUR L’ESCOUADE
            </Text>
            <Text>
              <Globe2 /> UN MONDE À CONQUÉRIR
            </Text>
            <Text>
              <Shield /> LE TALENT AVANT TOUT
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
              <Text className="eyebrow">01 / CHOISISSEZ VOTRE TERRAIN</Text>
              <Heading id="modes-title" className="section-title">
                À CHACUN SON <Text>COMBAT.</Text>
              </Heading>
            </Box>
            <Paragraph className="section-intro">
              Seul contre tous ou unis pour la victoire.
              <br />
              Une même intensité. Votre façon de jouer.
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
                        ? "Vallée boisée et architecture futuriste"
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
                      aria-label={`Découvrir le mode ${item.name}`}
                    >
                      Découvrir le mode
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
              <Text className="eyebrow">02 / BATTLE PASS · SAISON 04</Text>
              <Heading id="pass-title" className="pass-title">
                LAISSEZ
                <br />
                UNE <Text>TRACE.</Text>
              </Heading>
              <Paragraph>
                Devenez inoubliable. Explorez 100 paliers de récompenses et
                façonnez votre identité sur le terrain.
              </Paragraph>
              <Box className="pass-points">
                <Text>
                  <Layers3 size={17} /> 100 paliers
                </Text>
                <Text>
                  <Sparkles size={17} /> Des récompenses exclusives
                </Text>
              </Box>
              <Button
                className="cta"
                size="lg"
                onClick={() => setPassOpen(true)}
                endIcon={<ArrowUpRight size={18} />}
              >
                Explorer le Battle Pass
              </Button>
              <Text className="pass-note">
                VOTRE STYLE ÉVOLUE. VOTRE TALENT FAIT LE RESTE.
              </Text>
            </Box>
            <Box className="pass-visual">
              <Image
                src="/images/gameplay-0.jpg"
                alt="Armure dorée du palier Souverain"
                containerClassName="pass-background"
                rounded="none"
                loading="lazy"
              />
              <Box className="pass-visual-shade" />
              <Text className="pass-outline" aria-hidden="true">
                FRACTURE
              </Text>
              <Badge className="season-tag" appearance="outline">
                <Diamond size={13} /> SAISON 04
              </Badge>
              <Box className="pass-featured">
                <Text className="eyebrow">RÉCOMPENSE ULTIME</Text>
                <Heading level={3}>SOUVERAIN</Heading>
                <Text>Armure légendaire · Palier 100</Text>
              </Box>
              <Box className="reward-preview">
                {rewards.slice(1).map((reward) => (
                  <Button
                    key={reward.level}
                    appearance="ghost"
                    className="reward-mini"
                    onClick={() => setPassOpen(true)}
                    aria-label={`Voir ${reward.name}, palier ${reward.level}`}
                  >
                    <Image
                      src={`/images/${reward.image}.jpg`}
                      alt=""
                      rounded="none"
                      style={{ objectPosition: reward.position }}
                    />
                    <Text>PALIER {reward.level}</Text>
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
              <Text className="eyebrow">03 / AU PLUS PRÈS DE L’ACTION</Text>
              <Heading id="gameplay-title" className="section-title">
                ÇA NE SE RACONTE PAS.
                <br />
                <Text>ÇA SE VIT.</Text>
              </Heading>
            </Box>
            <Box className="gallery-heading-right">
              <Paragraph className="section-intro">
                Chaque instant peut tout changer.
                <br />
                Plongez au cœur du terrain.
              </Paragraph>
              <Box className="gallery-controls">
                <Button
                  appearance="outline"
                  iconOnly
                  startIcon={<ChevronLeft size={18} />}
                  aria-label="Image précédente"
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
                  aria-label="Image suivante"
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
              aria-label={`Agrandir : ${gallery[galleryIndex].alt}`}
            >
              <Image
                src={gallery[galleryIndex].src}
                alt={gallery[galleryIndex].alt}
                rounded="none"
                loading="lazy"
              />
              <Box className="gallery-overlay">
                <Text>
                  <Text className="status-dot" /> IMMERSION TOTALE
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
                    aria-label={`Agrandir : ${gallery[index].alt}`}
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
            <Text>CAPTURES D’INSPIRATION · HALO INFINITE</Text>
            <Button
              appearance="ghost"
              onClick={() => openGallery(0)}
              endIcon={<ArrowUpRight size={15} />}
            >
              Voir toute la galerie
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
              <Text className="eyebrow">04 / LE SIGNAL NEXUS</Text>
              <Heading id="news-title" className="section-title">
                DANS LE <Text>VISEUR.</Text>
              </Heading>
            </Box>
            <Text className="section-intro">
              Les histoires derrière votre prochaine partie.
            </Text>
          </Box>
          <Box className="news-grid">
            {articles.map((item, index) => (
              <Card key={item.title} className="news-card">
                <Button
                  appearance="ghost"
                  className="news-image media-button"
                  onClick={() => setArticle(index)}
                  aria-label={`Lire : ${item.title}`}
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
                  Lire le dossier
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
              LE PROCHAIN CHAPITRE S’ÉCRIT ENSEMBLE
            </Text>
            <Heading id="join-title">
              VOTRE ESCOUADE
              <br />
              <Text>N’ATTEND QUE VOUS.</Text>
            </Heading>
            <Paragraph>
              De grandes histoires commencent par une première partie.
            </Paragraph>
            <Button
              className="cta"
              size="lg"
              onClick={() => openSetup()}
              endIcon={<ArrowUpRight size={18} />}
            >
              Rejoindre l’aventure
            </Button>
            <Text className="join-signature">
              PRENEZ POSITION. TROUVEZ VOTRE ÉQUIPE. MARQUEZ L’HISTOIRE.
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
            <Text className="eyebrow">AVANT LE DÉPLOIEMENT</Text>
            <Heading id="faq-title" className="section-title">
              BIEN <Text>PRÉPARÉ.</Text>
            </Heading>
          </Box>
          <Accordion collapsible className="faq-list">
            <AccordionItem value="concept">
              <AccordionTrigger>Qu’est-ce que NEXUS ?</AccordionTrigger>
              <AccordionContent>
                NEXUS est un concept de site de jeu FPS créé par Pimolu Games
                pour présenter Pimolu UI. Les modes, saisons et récompenses sont
                fictifs. Ce site est une expérience interactive de
                démonstration, sans jeu téléchargeable ni serveur multijoueur.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pass">
              <AccordionTrigger>
                Comment fonctionne le Battle Pass ?
              </AccordionTrigger>
              <AccordionContent>
                Le concept propose 100 paliers, une piste gratuite et une piste
                premium avec des éléments cosmétiques. L’aperçu permet de
                comparer les récompenses. Aucun paiement ni achat n’est proposé
                sur cette démonstration.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="data">
              <AccordionTrigger>
                Où est enregistrée ma configuration ?
              </AccordionTrigger>
              <AccordionContent>
                Votre pseudo, votre plateforme et votre mode préféré sont
                conservés uniquement dans le stockage local de votre navigateur.
                Aucun compte n’est créé et aucune donnée n’est envoyée à un
                serveur. Vous pouvez les effacer dans les paramètres de votre
                navigateur.
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
          <Link href="#" aria-label="Retour en haut">
            <Mark />
          </Link>
        }
        description="Un monde. Vos règles."
        columns={[
          {
            title: "EXPLORER",
            links: [
              { label: "L’univers", href: "#univers" },
              { label: "Modes de jeu", href: "#modes" },
              { label: "Battle Pass", href: "#battle-pass" },
            ],
          },
          {
            title: "RESTER CONNECTÉ",
            links: [
              { label: "Actualités", href: "#actualites" },
              { label: "Galerie", href: "#gameplay" },
              { label: "Questions fréquentes", href: "#questions" },
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
                label: "Les composants",
                href: "https://pimolu.com/components",
                external: true,
              },
              {
                label: "Code source",
                href: "https://github.com/pimoludev/pimolu-games",
                external: true,
              },
            ],
          },
        ]}
        copyright={
          <Text>© 2026 PIMOLU GAMES · CONCEPT CRÉATIF, JEU FICTIF.</Text>
        }
        bottom={
          <Box className="footer-bottom">
            <Button appearance="ghost" onClick={() => setCreditsOpen(true)}>
              Crédits visuels
            </Button>
            <Text>
              CRAFTED WITH{" "}
              <Link href="https://pimolu.com" external showExternalIcon={false}>
                PIMOLU UI <ArrowUpRight size={12} />
              </Link>
            </Text>
          </Box>
        }
      />

      <Dialog
        open={mode !== null}
        onOpenChange={(open) => {
          if (!open) setMode(null);
        }}
      >
        <DialogContent size="lg" closeLabel="Fermer" className="nexus-dialog">
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
                Choisir ce mode
              </Button>
              <Text className="dialog-note">
                Mode imaginé pour le concept NEXUS.
              </Text>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={passOpen} onOpenChange={setPassOpen}>
        <DialogContent size="lg" closeLabel="Fermer" className="nexus-dialog">
          <DialogHeader>
            <Text className="eyebrow">SAISON 04 / FRACTURE</Text>
            <DialogTitle>100 paliers. Votre signature.</DialogTitle>
            <DialogDescription>
              Découvrez une sélection des récompenses imaginées pour cette
              saison. Des cosmétiques, aucun avantage en combat.
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="premium">
            <TabsList aria-label="Pistes du Battle Pass">
              <TabsTrigger value="premium">Pass premium</TabsTrigger>
              <TabsTrigger value="free">Piste gratuite</TabsTrigger>
            </TabsList>
            {["premium", "free"].map((track) => (
              <TabsContent key={track} value={track}>
                <Box className="rewards-grid">
                  {rewards
                    .filter((r) => track === "premium" || r.free)
                    .map((reward) => (
                      <Card className="reward-card" key={reward.level}>
                        <Image
                          src={`/images/${reward.image}.jpg`}
                          alt={reward.name}
                          rounded="none"
                          style={{ objectPosition: reward.position }}
                        />
                        <Box>
                          <Text className="eyebrow">PALIER {reward.level}</Text>
                          <Heading level={3}>{reward.name}</Heading>
                          <Text>{reward.type}</Text>
                        </Box>
                      </Card>
                    ))}
                </Box>
                <Paragraph className="track-description">
                  {track === "premium"
                    ? "La piste premium réunit les récompenses gratuites et les objets exclusifs, jusqu’à l’armure Souverain au palier 100."
                    : "La piste gratuite commence avec l’armure Éclaireur. Des défis imaginés pour découvrir les modes à votre rythme."}
                </Paragraph>
              </TabsContent>
            ))}
          </Tabs>
          <Text className="dialog-note">
            Aperçu de démonstration. Aucun achat ni paiement disponible.
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
          dialog: "Galerie de gameplay",
          close: "Fermer la galerie",
          previous: "Image précédente",
          next: "Image suivante",
          thumbnails: "Choisir une capture",
          goTo: (position) => `Afficher la capture ${position}`,
        }}
      />

      <Dialog
        open={article !== null}
        onOpenChange={(open) => {
          if (!open) setArticle(null);
        }}
      >
        <DialogContent size="lg" closeLabel="Fermer" className="nexus-dialog">
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
                Carnet de création · Univers fictif NEXUS
              </Text>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={playOpen} onOpenChange={setPlayOpen}>
        <DialogContent
          closeLabel="Fermer"
          className="nexus-dialog setup-dialog"
        >
          <DialogHeader>
            <Text className="eyebrow">VOTRE PROCHAINE MISSION</Text>
            <DialogTitle>
              {saved
                ? `Prêt, ${pseudo.trim()} ?`
                : "Préparez votre déploiement."}
            </DialogTitle>
            <DialogDescription>
              {saved
                ? "Votre configuration a été enregistrée dans ce navigateur."
                : "Créez votre profil de démonstration et choisissez votre terrain."}
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
                NEXUS est un concept créatif : aucune partie réelle n’est
                lancée. Explorez les modes, les récompenses et les images pour
                prolonger l’expérience.
              </Paragraph>
              <Button className="cta" onClick={() => setPlayOpen(false)}>
                Continuer l’exploration <ArrowRight size={16} />
              </Button>
              <Button appearance="ghost" onClick={() => setSaved(false)}>
                Modifier ma configuration
              </Button>
            </Box>
          ) : (
            <Box className="setup-fields">
              <Input
                label="Votre nom sur le terrain"
                placeholder="Ex. Ghost_07"
                value={pseudo}
                onValueChange={setPseudo}
                maxLength={20}
                minLength={3}
                autoComplete="nickname"
                helperText="Entre 3 et 20 caractères."
              />
              <Text className="field-label" id="platform-label">
                Votre plateforme
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
                Votre mode de jeu
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
                Enregistrer ma configuration
              </Button>
              <Text className="dialog-note">
                Démonstration locale · Aucun compte créé · Aucun téléchargement
              </Text>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={creditsOpen} onOpenChange={setCreditsOpen}>
        <DialogContent closeLabel="Fermer" className="nexus-dialog">
          <DialogHeader>
            <DialogTitle>Les images derrière l’univers.</DialogTitle>
            <DialogDescription>
              NEXUS est une vitrine indépendante de Pimolu UI. Les images de
              Halo Infinite illustrent le concept et restent la propriété de
              leurs ayants droit. Aucune affiliation avec Microsoft ou Halo
              Studios.
            </DialogDescription>
          </DialogHeader>
          <Box className="credit-links">
            <Link
              external
              href="https://store.steampowered.com/app/1240440/Halo_Infinite/"
            >
              Captures de gameplay · Halo Infinite sur Steam
            </Link>
            <Link external href="https://www.steamgriddb.com/hero/127070">
              Visuel principal · SteamGridDB / HalfSpeed
            </Link>
            <Link
              external
              href="https://www.windowscentral.com/halo-infinite-concept-art-treasure-trove"
            >
              Concept art d’Éden · Halo Infinite / Windows Central
            </Link>
            <Link external href="https://pimolu.com">
              Interface · Pimolu UI
            </Link>
            <Link external href="https://lucide.dev">
              Icônes · Lucide
            </Link>
          </Box>
        </DialogContent>
      </Dialog>
    </PimoluProvider>
  );
}
