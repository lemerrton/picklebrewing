import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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
  title: "Pickle Brewing — Beginner Brewing Kits",
  description:
    "Pickle Brewing sells beginner-friendly 1-gallon and 5-gallon homebrewing starter kits. Ships everywhere. Perfect for first-time brewers.",
  keywords: [
    "homebrewing",
    "brewing kit",
    "beginner brewing",
    "1 gallon kit",
    "5 gallon kit",
    "pickle brewing",
  ],
  metadataBase: new URL("https://picklebrewing.com"),
  openGraph: {
    title: "Pickle Brewing — Beginner Brewing Kits",
    description:
      "Starter brewing kits for curious beginners. Simple, affordable, ships everywhere.",
    url: "https://picklebrewing.com",
    siteName: "Pickle Brewing",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${nunito.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
