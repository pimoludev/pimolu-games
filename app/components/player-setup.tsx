import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Heading,
  Input,
  Paragraph,
  SegmentedControl,
  Text,
} from "@pimolu/react";
import { ArrowRight, Check } from "lucide-react";
import { modes, type ModeId } from "../game-data";

const storageKey = "nexus-player";

export function usePlayerSetup() {
  const [playOpen, setPlayOpen] = useState(false);
  const [platform, setPlatform] = useState("PC");
  const [selectedMode, setSelectedMode] = useState("royale");
  const [pseudo, setPseudo] = useState("");
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState("");

  function openSetup(modeId?: ModeId) {
    setSaved(false);
    setSaveError("");
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey) || "null");
      if (stored && typeof stored.pseudo === "string")
        setPseudo(stored.pseudo.slice(0, 20));
      if (["PC", "PlayStation", "Xbox"].includes(stored?.platform))
        setPlatform(stored.platform);
      const storedMode = modes.find((item) => item.id === stored?.mode);
      if (storedMode) setSelectedMode(storedMode.id);
    } catch {
      /* Setup remains available when browser storage is blocked. */
    }
    if (modeId) setSelectedMode(modeId);
    setPlayOpen(true);
  }

  function saveSetup() {
    if (pseudo.trim().length < 3) {
      setSaveError("Choose a player name with at least 3 characters.");
      return;
    }
    try {
      localStorage.setItem(
        storageKey,
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

  return {
    openSetup,
    dialogProps: {
      playOpen,
      setPlayOpen,
      platform,
      setPlatform,
      selectedMode,
      setSelectedMode,
      pseudo,
      setPseudo,
      saved,
      setSaved,
      saveError,
      saveSetup,
    },
  };
}

type PlayerSetupProps = ReturnType<typeof usePlayerSetup>["dialogProps"];

export function PlayerSetup({
  playOpen,
  setPlayOpen,
  platform,
  setPlatform,
  selectedMode,
  setSelectedMode,
  pseudo,
  setPseudo,
  saved,
  setSaved,
  saveError,
  saveSetup,
}: PlayerSetupProps) {
  return (
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
  );
}
