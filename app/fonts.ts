import {
  Cormorant,
  Inter,
  JetBrains_Mono,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";

// Elegant high-contrast serif for display headings.
export const fontDisplay = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--ff-display",
});

export const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--ff-body",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--ff-mono",
});

export const fontArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--ff-arabic",
});

export const fontVariables = [
  fontDisplay.variable,
  fontBody.variable,
  fontMono.variable,
  fontArabic.variable,
].join(" ");
