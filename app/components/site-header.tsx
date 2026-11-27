import { useState } from "react";
import {
  Box,
  Button,
  Link,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarToggle,
  Text,
} from "@pimolu/react";
import { ArrowUpRight, Globe2, Menu, X } from "lucide-react";
import { Wordmark } from "./wordmark";

export function SiteHeader({ onJoin }: { onJoin: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Link href="#main" className="skip-link">
        Skip to content
      </Link>
      <Box className="announcement">
        <Text className="announcement-label">NEW CHAPTER</Text>
        <Text>SEASON 04: FRACTURE</Text>
        <Link href="#battle-pass" aria-label="Explore the Fracture season">
          <ArrowUpRight size={14} />
        </Link>
      </Box>
      <Box className="site-header">
        <Navbar
          className="site-nav page-width"
          appearance="transparent"
          bordered={false}
          itemsPosition="center"
          collapsible
          open={menuOpen}
          onOpenChange={setMenuOpen}
        >
          <NavbarBrand href="#" aria-label="Pimolu Games — home">
            <Wordmark />
          </NavbarBrand>
          <NavbarToggle
            icon={<Menu />}
            closeIcon={<X />}
            openLabel="Open menu"
            closeLabel="Close menu"
          />
          <NavbarContent aria-label="Main navigation">
            {[
              ["The world", "univers"],
              ["Game modes", "modes"],
              ["Battle Pass", "battle-pass"],
              ["Updates", "actualites"],
            ].map(([label, id]) => (
              <NavbarItem
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarActions>
            <Text className="nav-language">
              <Globe2 size={14} /> EN
            </Text>
            <Button
              className="cta nav-cta"
              onClick={() => {
                setMenuOpen(false);
                onJoin();
              }}
              endIcon={<ArrowUpRight size={16} />}
            >
              Join the fight
            </Button>
          </NavbarActions>
        </Navbar>
      </Box>
    </>
  );
}
