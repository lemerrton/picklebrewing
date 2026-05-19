import type { Metadata } from "next";
import ImageSlot from "@/components/ImageSlot";

export const metadata: Metadata = {
  title: "About — Pickle Brewing",
  description:
    "Learn about Pickle Brewing — a small shop focused on helping beginners get into homebrewing without the intimidation.",
};

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-brown-900">
        Hey, we&apos;re Pickle Brewing
      </h1>

      <div className="mt-8 space-y-5 text-brown-700 leading-relaxed">
        <p>
          We started Pickle Brewing because we believe everyone deserves to try
          making their own beer, cider, or ale — and it shouldn&apos;t require a
          degree in fermentation science to get started.
        </p>
        <p>
          Our kits are built for beginners. No confusing equipment lists, no
          walls of jargon, no gatekeeping. Just everything you need in one box,
          with clear instructions that actually make sense.
        </p>
        <p>
          Whether you&apos;re brewing your very first gallon or upgrading to a
          full five-gallon batch, we&apos;re here to make the process simple,
          affordable, and genuinely fun.
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
    </section>
  );
}
