import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Box,
  Heading,
  Text,
} from "@pimolu/react";

export function GameFaq() {
  return (
    <Box
      as="section"
      id="questions"
      className="faq-section page-width"
      aria-labelledby="faq-title"
    >
      <Box>
        <Text className="eyebrow">BEFORE DEPLOYMENT</Text>
        <Heading id="faq-title" className="section-title">
          GOOD TO <Text>GO.</Text>
        </Heading>
      </Box>
      <Accordion collapsible className="faq-list">
        <AccordionItem value="concept">
          <AccordionTrigger>What is Pimolu Games?</AccordionTrigger>
          <AccordionContent>
            Pimolu Games is an FPS website concept built to showcase Pimolu
            UI. Its modes, seasons, and rewards are fictional. This is an
            interactive demo, with no downloadable game or multiplayer
            servers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="pass">
          <AccordionTrigger>
            How does the Battle Pass work?
          </AccordionTrigger>
          <AccordionContent>
            The concept features 100 tiers, with free and premium tracks
            offering cosmetic items. You can compare the rewards in the
            preview. Purchases and payments are unavailable in this demo.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="data">
          <AccordionTrigger>
            Where is my setup saved?
          </AccordionTrigger>
          <AccordionContent>
            Your nickname, platform, and preferred mode are saved only in
            your browser’s local storage. No account is created, and no
            data is sent to a server. You can clear it in your browser
            settings.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
