import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BrewKit Lab — Beginner Brewing Kits for First-Time Brewers",
    template: "%s | BrewKit Lab",
  },
  description:
    "BrewKit Lab sells beginner-friendly 1-gallon and 5-gallon homebrewing starter kits. The best starter fermentation kit for first-time brewers. Ships everywhere.",
  keywords: [
    "best beginner brewing kit",
    "1 gallon brewing kit",
    "starter fermentation kit",
    "home brewing kit for beginners",
    "small batch brewing kit",
    "easy mead brewing kit",
    "TikTok brewing kit",
    "brewkitlab",
  ],
  metadataBase: new URL("https://brewkitlab.com"),
  alternates: {
    canonical: "https://brewkitlab.com",
  },
  openGraph: {
    title: "BrewKit Lab — Beginner Brewing Kits",
    description:
      "The best beginner brewing kit for first-time brewers. Simple starter kits, clear instructions, ships everywhere.",
    url: "https://brewkitlab.com",
    siteName: "BrewKit Lab",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrewKit Lab — Beginner Brewing Kits",
    description:
      "The best beginner brewing kit for first-time brewers. Simple starter kits, clear instructions, ships everywhere.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BrewKit Lab",
  url: "https://brewkitlab.com",
  contactPoint: {
    "@type": "ContactPoint",
    email: "gentlevoyage.assistance@gmail.com",
    contactType: "customer service",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${nunito.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd data={organizationJsonLd} />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
