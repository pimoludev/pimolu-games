import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Pimolu Games — One World. Your Rules.",
  description:
    "Explore Pimolu Games, an immersive FPS concept featuring Battle Royale, multiplayer, and the Fracture Battle Pass. Built with Pimolu UI.",
  openGraph: {
    title: "Pimolu Games — One World. Your Rules.",
    description: "An immersive FPS concept by Pimolu Games.",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 3840, height: 1240 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
