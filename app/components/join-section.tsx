import {
  Box,
  Button,
  Heading,
  Image,
  Paragraph,
  Text,
} from "@pimolu/react";
import { ArrowUpRight, Crosshair } from "lucide-react";

export function JoinSection({ onJoin }: { onJoin: () => void }) {
  return (
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
          onClick={onJoin}
          endIcon={<ArrowUpRight size={18} />}
        >
          Join the adventure
        </Button>
        <Text className="join-signature">
          TAKE POSITION. FIND YOUR TEAM. MAKE HISTORY.
        </Text>
      </Box>
    </Box>
  );
}
