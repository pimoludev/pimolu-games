import {
  Box,
  Button,
  Heading,
  Image,
  Link,
  Paragraph,
  Text,
} from "@pimolu/react";
import {
  ArrowDown,
  ArrowUpRight,
  Crosshair,
  Gamepad2,
  Globe2,
  Monitor,
  Orbit,
  ScanLine,
  Shield,
  Users,
} from "lucide-react";

export function HeroSection({
  onJoin,
  onExploreGameplay,
}: {
  onJoin: () => void;
  onExploreGameplay: () => void;
}) {
  return (
    <>
      <Box
        as="section"
        className="hero"
        id="univers"
        aria-labelledby="hero-title"
      >
        <Image
          src="/images/hero.jpg"
          alt="Eden operator in a weathered ochre jacket at the freight terminal"
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
              onClick={onJoin}
              endIcon={<ArrowUpRight size={19} />}
            >
              Enter the arena
            </Button>
            <Button
              className="secondary-cta"
              appearance="outline"
              size="lg"
              onClick={onExploreGameplay}
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
    </>
  );
}
