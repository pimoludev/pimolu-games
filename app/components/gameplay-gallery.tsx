import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Lightbox,
  Paragraph,
  Text,
} from "@pimolu/react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { gallery } from "../game-data";

export function useGameplayGallery() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  function openGallery(index: number) {
    setGalleryIndex(index);
    setGalleryOpen(true);
  }

  return { galleryOpen, setGalleryOpen, galleryIndex, setGalleryIndex, openGallery };
}

export function GameplayGallery({
  galleryOpen,
  setGalleryOpen,
  galleryIndex,
  setGalleryIndex,
  openGallery,
}: ReturnType<typeof useGameplayGallery>) {
  return (
    <>
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
                {String(galleryIndex + 1).padStart(2, "0")}{" "}
                <Text>/ {String(gallery.length).padStart(2, "0")}</Text>
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
          <Text>ORIGINAL FPS CONCEPT ART</Text>
          <Button
            appearance="ghost"
            onClick={() => openGallery(0)}
            endIcon={<ArrowUpRight size={15} />}
          >
            View full gallery
          </Button>
        </Box>
      </Box>

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
    </>
  );
}
