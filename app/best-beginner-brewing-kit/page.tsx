import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { products, productJsonLd } from "@/lib/products";

export const metadata: Metadata = {
  title: "Best Beginner Brewing Kit (2026) — Start Brewing Today",
  description:
    "Looking for the best beginner brewing kit? BrewKit Lab's starter kits include everything first-time brewers need — fermenter, airlock, sanitizer, and step-by-step instructions.",
  alternates: { canonical: "https://brewkitlab.com/best-beginner-brewing-kit" },
  openGraph: {
    title: "Best Beginner Brewing Kit — BrewKit Lab",
    description: "The best starter brewing kit for first-time brewers. Everything you need in one box.",
    url: "https://brewkitlab.com/best-beginner-brewing-kit",
  },
};

export default function BestBeginnerBrewingKit() {
  const oneGallon = products[0];

  return (
    <>
      <JsonLd data={productJsonLd(oneGallon)} />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-heading text-4xl font-bold text-brown-900 leading-tight">
          Best Beginner Brewing Kit: Everything You Need to Start Brewing at Home
        </h1>
        <p className="text-brown-700 mt-4 text-lg leading-relaxed">
          The best beginner brewing kit doesn&apos;t overwhelm you with gear you
          don&apos;t understand. It gives you exactly what you need, tells you
          what to do with it, and gets out of the way so you can actually enjoy
          your first brew.
        </p>

        <div className="mt-10 bg-cream rounded-2xl p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <Image
                src="/images/1-gallon-kit.png"
                alt="Best beginner brewing kit — BrewKit Lab 1 gallon starter kit"
                width={400}
                height={400}
                className="object-contain w-full"
              />
            </div>
            <div className="flex-1">
              <h2 className="font-heading text-2xl font-bold text-brown-900">
                Our Pick: 1-Gallon Starter Kit — $59.99
              </h2>
              <p className="text-brown-700 mt-3 leading-relaxed">
                {oneGallon.description}
              </p>
              <Link
                href="/shop"
                className="inline-block mt-4 bg-brown-900 text-white font-body font-semibold py-3 px-6 rounded-lg hover:bg-brown-700 transition-colors"
              >
                Get This Kit
              </Link>
            </div>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            What Makes a Great Beginner Brewing Kit?
          </h2>
          <div className="mt-4 space-y-4 text-brown-700 leading-relaxed">
            <p>
              If you&apos;re searching for the best beginner brewing kit, you&apos;ve
              probably noticed there are hundreds of options out there. Most of
              them are either way too complicated or missing key pieces.
            </p>
            <p>Here&apos;s what actually matters for your first brew:</p>
          </div>

          <ul className="mt-4 space-y-3">
            {[
              { title: "A real fermenting vessel", desc: "Glass is best — it doesn't scratch, doesn't absorb odors, and lets you watch fermentation happen." },
              { title: "An airlock and stopper", desc: "This lets CO2 escape without letting bacteria in. Non-negotiable for any home brewing kit for beginners." },
              { title: "Sanitizer", desc: "Sanitizing is the most important step in brewing. A good starter fermentation kit includes it." },
              { title: "Clear instructions", desc: "If the instructions read like a chemistry textbook, it's not beginner-friendly. Period." },
            ].map((item) => (
              <li key={item.title} className="bg-white border border-tan-400 rounded-xl p-4">
                <p className="font-semibold text-brown-900">{item.title}</p>
                <p className="text-brown-700 text-sm mt-1">{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            1 Gallon vs 5 Gallon: Which Size Should You Start With?
          </h2>
          <div className="mt-4 space-y-4 text-brown-700 leading-relaxed">
            <p>
              For most first-time brewers, we recommend starting with a{" "}
              <Link href="/1-gallon-brewing-kit" className="underline hover:no-underline text-brown-900">
                1 gallon brewing kit
              </Link>
              . It&apos;s small enough to do on your kitchen counter, the ingredients
              cost less, and if something goes wrong you&apos;ve only lost a gallon —
              not five.
            </p>
            <p>
              Once you&apos;re comfortable with the process, our 5-gallon kit ($105.00)
              scales everything up without adding complexity. Same process, bigger
              batches, more to share.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            Ready to Start?
          </h2>
          <p className="text-brown-700 mt-3 leading-relaxed">
            Check out our{" "}
            <Link href="/shop" className="underline hover:no-underline text-brown-900">
              full kit lineup
            </Link>
            , or learn more about the brewing process with our{" "}
            <Link href="/fermentation-guide" className="underline hover:no-underline text-brown-900">
              fermentation guide
            </Link>{" "}
            and{" "}
            <Link href="/how-to-brew-mead" className="underline hover:no-underline text-brown-900">
              mead brewing guide
            </Link>
            .
          </p>
        </section>
      </article>
    </>
  );
}
