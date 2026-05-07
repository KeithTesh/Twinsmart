import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style:  ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style:  ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://twinsmart.co.ke"
  ),
  title: {
    default: "Twinsmart Consultants Kenya",
    template: "%s | Twinsmart Consultants Kenya",
  },
  description:
    "Innovation in research, design and construction. Architects, landscape architects, interior designers and builders based in Nairobi and Meru, Kenya. Est. 2010.",
  keywords: [
    "architects Kenya",
    "architectural firm Nairobi",
    "design build Kenya",
    "landscape architects Kenya",
    "construction company Kenya",
    "Twinsmart Consultants",
    "interior design Nairobi",
  ],
  authors:  [{ name: "Twinsmart Consultants Kenya Ltd" }],
  creator:  "Twinsmart Consultants Kenya Ltd",
  openGraph: {
    type:     "website",
    locale:   "en_KE",
    url:      process.env.NEXT_PUBLIC_SITE_URL ?? "https://twinsmart.co.ke",
    siteName: "Twinsmart Consultants Kenya",
    title:    "Twinsmart Consultants Kenya — Innovation in Research, Design & Construction",
    description:
      "Architects, landscape architects, interior designers and builders. 200+ projects, KSh 2B+ in construction value.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Twinsmart Consultants Kenya" }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Twinsmart Consultants Kenya",
    description: "Innovation in research, design and construction.",
    images:      ["/og-image.png"],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="bg-cream text-charcoal antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
