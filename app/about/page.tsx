import type { Metadata } from "next";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BrewKit Lab is a small shop helping beginners get into homebrewing. We make the best beginner brewing kits — no intimidation, just good brewing.",
  alternates: { canonical: "https://brewkitlab.com/about" },
  openGraph: {
    title: "About BrewKit Lab",
    description: "A small shop helping beginners get into homebrewing without the intimidation.",
    url: "https://brewkitlab.com/about",
  },
};

export default function About() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-brown-900">
        Hey, we&apos;re BrewKit Lab
      </h1>

      <div className="mt-8 space-y-5 text-brown-700 leading-relaxed">
        <p>
          We started BrewKit Lab because we believe everyone deserves to try
          making their own beer, cider, or mead — and it shouldn&apos;t require a
          degree in fermentation science to get started. That&apos;s why we built
          the best beginner brewing kit we could: simple, affordable, and
          genuinely beginner-friendly.
        </p>
        <p>
          Our kits are designed for people who&apos;ve never brewed before. No
          confusing equipment lists, no walls of jargon, no gatekeeping. Just
          everything you need in one box, with{" "}
          <Link href="/fermentation-guide" className="underline hover:no-underline text-brown-900">
            clear instructions
          </Link>{" "}
          that actually make sense.
        </p>
        <p>
          Whether you&apos;re trying a{" "}
          <Link href="/1-gallon-brewing-kit" className="underline hover:no-underline text-brown-900">
            1 gallon brewing kit
          </Link>{" "}
          for the first time or upgrading to a full five-gallon batch, we&apos;re
          here to make home brewing simple, affordable, and genuinely fun.
        </p>
      </div>

      <div className="mt-10">
        <ImageSlot label="Team / shop photo" aspectRatio="aspect-video" />
      </div>

      <p className="mt-10 text-brown-700">
        Got questions? Drop us a line at{" "}
        <a
          href="mailto:gentlevoyage.assistance@gmail.com"
          className="text-brown-900 underline hover:no-underline"
        >
          gentlevoyage.assistance@gmail.com
        </a>
      </p>
    </article>
  );
}
