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
  title: "Pimolu Games — Un monde. Vos règles.",
  description:
    "Découvrez Pimolu Games, un concept FPS immersif : Battle Royale, multijoueur et Battle Pass Fracture. Une expérience créée avec Pimolu UI.",
  openGraph: {
    title: "Pimolu Games — Un monde. Vos règles.",
    description: "Le concept FPS signé Pimolu Games.",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 3840, height: 1240 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
