"use client";

import { Box, PimoluProvider } from "@pimolu/react";
import { BattlePass } from "./components/battle-pass";
import { GameFaq } from "./components/game-faq";
import { GameModes } from "./components/game-modes";
import { GameNews } from "./components/game-news";
import { GameplayGallery, useGameplayGallery } from "./components/gameplay-gallery";
import { HeroSection } from "./components/hero-section";
import { JoinSection } from "./components/join-section";
import { PlayerSetup, usePlayerSetup } from "./components/player-setup";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export default function Home() {
  const { openSetup, dialogProps } = usePlayerSetup();
  const gameplayGallery = useGameplayGallery();

  return (
    <PimoluProvider
      theme="dark"
      stylePreset="monochrome"
      radius="medium"
      brandColor="#c0f65c"
      persist={false}
      className="nexus"
    >
      <SiteHeader onJoin={openSetup} />
      <Box as="main" id="main">
        <HeroSection
          onJoin={openSetup}
          onExploreGameplay={() => gameplayGallery.openGallery(0)}
        />
        <GameModes onChooseMode={openSetup} />
        <BattlePass />
        <GameplayGallery {...gameplayGallery} />
        <GameNews />
        <JoinSection onJoin={openSetup} />
        <GameFaq />
      </Box>
      <SiteFooter />
      <PlayerSetup {...dialogProps} />
    </PimoluProvider>
  );
}
