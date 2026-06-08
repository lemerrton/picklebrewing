import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "How Long Does Beer Take to Brew? A Beginner's Timeline",
  description:
    "Beer takes about 3 weeks from brew day to drinking. Here's a full timeline of every stage — primary fermentation, bottling, conditioning, and serving.",
  alternates: { canonical: "https://brewkitlab.com/how-long-does-beer-take" },
  openGraph: {
    title: "How Long Does Beer Take to Brew?",
    description:
      "About 3 weeks total. Here's a full timeline for first-time homebrewers.",
    url: "https://brewkitlab.com/how-long-does-beer-take",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to brew beer at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most beginner ales take about 3 weeks from brew day to drinking — 1-2 weeks for primary fermentation, plus 1-2 weeks of bottle conditioning to carbonate.",
      },
    },
    {
      "@type": "Question",
      name: "How long is primary fermentation for beer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Primary fermentation for most ales finishes in 1-2 weeks. You'll see active bubbling in the airlock during peak fermentation (usually days 2-5), with activity slowing toward the end.",
      },
    },
    {
      "@type": "Question",
      name: "Why does bottle conditioning take so long?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bottle conditioning is a slow secondary fermentation where leftover yeast eats priming sugar and creates CO2 inside sealed bottles. It usually takes 1-2 weeks to build full carbonation.",
      },
    },
  ],
};

const stages = [
  {
    range: "Day 0",
    title: "Brew day",
    body: "Boiling, hopping, cooling, pitching yeast. The hands-on portion takes about 2-3 hours from start to fermenter.",
  },
  {
    range: "Days 1-3",
    title: "Active fermentation begins",
    body: "You'll see steady bubbling in the airlock within 24-48 hours. Peak yeast activity happens here — the beer is busy converting sugars into alcohol and CO2.",
  },
  {
    range: "Days 4-10",
    title: "Primary fermentation continues",
    body: "Bubbling gradually slows down. The yeast is finishing the bulk of fermentation. Resist the urge to peek inside.",
  },
  {
    range: "Days 10-14",
    title: "Primary fermentation finishes",
    body: "Airlock activity drops to less than one bubble per minute. Two identical hydrometer readings 2-3 days apart confirm fermentation is done.",
  },
  {
    range: "Days 14-15",
    title: "Bottling day",
    body: "Transfer beer into sanitized bottles with priming sugar. Cap the bottles. The remaining yeast will carbonate the beer naturally over the next 1-2 weeks.",
  },
  {
    range: "Days 14-28",
    title: "Bottle conditioning",
    body: "Bottles sit at room temperature while leftover yeast eats priming sugar and builds carbonation. Don't refrigerate yet — yeast slows in the cold.",
  },
  {
    range: "Day 21+",
    title: "Ready to drink",
    body: "Chill a bottle in the fridge for 24 hours before drinking to settle yeast and improve flavor. Pour carefully to avoid kicking up the sediment at the bottom.",
  },
];

export default function HowLongDoesBeerTake() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-heading text-4xl font-bold text-brown-900 leading-tight">
          How Long Does Beer Take to Brew?
        </h1>
        <p className="text-brown-700 mt-4 text-lg leading-relaxed">
          The short answer: <strong>about 3 weeks</strong> from brew day to
          drinking. The long answer breaks down into a few clear stages — and
          knowing what to expect makes the wait easier.
        </p>
        <div className="mt-4">
          <ShareButtons
            url="https://brewkitlab.com/how-long-does-beer-take"
            title="How Long Does Beer Take to Brew?"
          />
        </div>

        <section className="mt-10">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            The Full Timeline
          </h2>
          <ol className="mt-6 space-y-5">
            {stages.map((stage) => (
              <li
                key={stage.title}
                className="bg-cream rounded-xl p-5 flex flex-col sm:flex-row gap-3 sm:items-start"
              >
                <div className="sm:w-32 shrink-0">
                  <span className="text-xs font-bold text-tan-600 uppercase tracking-wide">
                    {stage.range}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900">
                    {stage.title}
                  </h3>
                  <p className="text-brown-700 text-sm mt-1 leading-relaxed">
                    {stage.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            What If It&apos;s Taking Longer?
          </h2>
          <div className="mt-4 space-y-3 text-brown-700 leading-relaxed text-sm">
            <p>
              <strong>Fermentation is taking 3+ weeks:</strong> Usually fine.
              Cold temperatures slow yeast — move the fermenter somewhere
              warmer (65-72°F). Read about{" "}
              <Link
                href="/blog/why-airlock-bubbles"
                className="underline hover:no-underline text-brown-900"
              >
                why airlocks bubble (and why they sometimes don&apos;t)
              </Link>
              .
            </p>
            <p>
              <strong>Bottles aren&apos;t carbonating:</strong> Check that
              you&apos;re storing them at room temperature, not in the fridge.
              Yeast goes dormant when cold. Give it another week.
            </p>
            <p>
              <strong>Beer tastes off after 3 weeks:</strong> Give it another
              week or two. Beer almost always improves with conditioning. See
              our list of{" "}
              <Link
                href="/blog/common-fermentation-mistakes"
                className="underline hover:no-underline text-brown-900"
              >
                common fermentation mistakes
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            Want a Faster First Batch?
          </h2>
          <p className="text-brown-700 mt-3 leading-relaxed text-sm">
            Pick a beer style that ferments quickly — most pale ales,
            wheat beers, and blondes finish primary fermentation in just over a
            week. Lagers and Belgian styles take significantly longer, so save
            those for batch #2 or #3.
          </p>
        </section>

        <section className="mt-12 bg-tan-200 rounded-2xl p-8">
          <h2 className="font-heading text-xl font-bold text-brown-900">
            Start your first batch
          </h2>
          <p className="text-brown-700 mt-2 text-sm">
            Our{" "}
            <Link
              href="/1-gallon-brewing-kit"
              className="underline text-brown-900"
            >
              1-gallon brewing kit
            </Link>{" "}
            includes the yeast, sanitizer, fermenter, and instructions — pick
            up an ingredient kit locally and you&apos;re three weeks away from
            your first homebrew.
          </p>
          <Link
            href="/shop"
            className="inline-block mt-4 bg-brown-900 text-white font-body font-semibold py-2.5 px-6 rounded-lg hover:bg-brown-700 transition-colors text-sm"
          >
            Shop Kits
          </Link>
        </section>
      </article>
    </>
  );
}
