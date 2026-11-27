import { Box, Text } from "@pimolu/react";
import { Zap } from "lucide-react";

export function Wordmark() {
  return (
    <Box className="wordmark">
      <Zap fill="currentColor" aria-hidden="true" />
      <Text>PIMOLU GAMES</Text>
      <Text className="wordmark-dot">®</Text>
    </Box>
  );
}
