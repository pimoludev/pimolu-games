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
  Text,
} from "@pimolu/react";
import {
  ArrowUpRight,
  Check,
  Crosshair,
  Trophy,
  Users,
} from "lucide-react";
import { modes, type ModeId } from "../game-data";

const modeIcons = {
  royale: Crosshair,
  multi: Users,
  ranked: Trophy,
} satisfies Record<ModeId, typeof Crosshair>;

export function GameModes({ onChooseMode }: { onChooseMode: (modeId: ModeId) => void }) {
  const [mode, setMode] = useState<(typeof modes)[number] | null>(null);

  return (
    <>
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
            const Icon = modeIcons[item.id];
            return (
              <Card key={item.id} className="mode-card">
                <Image
                  src={`/images/${item.image}.jpg`}
                  alt={
                    item.id === "royale"
                      ? "Aerial view of Eden’s port and terraced hills"
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
                    onClick={() => setMode(item)}
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
                src={`/images/${mode.image}.jpg`}
                alt={mode.name}
                rounded="md"
              />
              <DialogHeader>
                <Text className="eyebrow">
                  {mode.players} / {mode.format}
                </Text>
                <DialogTitle>{mode.name}</DialogTitle>
                <DialogDescription>{mode.description}</DialogDescription>
              </DialogHeader>
              <Box className="detail-list">
                {mode.features.map((feature) => (
                  <Text key={feature}>
                    <Check size={16} />
                    {feature}
                  </Text>
                ))}
              </Box>
              <Button
                className="cta"
                onClick={() => {
                  setMode(null);
                  onChooseMode(mode.id);
                }}
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
    </>
  );
}
