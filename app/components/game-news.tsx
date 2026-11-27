import { useState } from "react";
import {
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
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { articles } from "../game-data";

export function GameNews() {
  const [article, setArticle] = useState<(typeof articles)[number] | null>(null);

  return (
    <>
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
          {articles.map((item) => (
            <Card key={item.title} className="news-card">
              <Button
                appearance="ghost"
                className="news-image media-button"
                onClick={() => setArticle(item)}
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
                onClick={() => setArticle(item)}
                endIcon={<ArrowRight size={15} />}
              >
                Read the story
              </Button>
            </Card>
          ))}
        </Box>
      </Box>

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
                src={`/images/${article.image}.jpg`}
                alt={article.title}
                rounded="md"
              />
              <DialogHeader>
                <Text className="eyebrow">
                  {article.category} / {article.date}
                </Text>
                <DialogTitle>{article.title}</DialogTitle>
                <DialogDescription>{article.body}</DialogDescription>
              </DialogHeader>
              <Paragraph className="article-detail">
                {article.detail}
              </Paragraph>
              <Text className="dialog-note">
                Creative journal · The fictional world of Pimolu Games
              </Text>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
