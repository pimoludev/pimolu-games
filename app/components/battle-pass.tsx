import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Heading,
  Image,
  Paragraph,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from "@pimolu/react";
import {
  ArrowUpRight,
  Diamond,
  Layers3,
  Sparkles,
} from "lucide-react";
import { rewards } from "../game-data";

export function BattlePass() {
  const [passOpen, setPassOpen] = useState(false);

  return (
    <>
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
              alt="Sovereign operator in a navy jacket and orange shoulder armor"
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
    </>
  );
}
