import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const GA_ID = "G-EZ0NGG3YFY";
const TIKTOK_PIXEL_ID = "D8KAT6JC77U48KTDT4EG";

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
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              ttq.load('${TIKTOK_PIXEL_ID}');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd data={organizationJsonLd} />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
