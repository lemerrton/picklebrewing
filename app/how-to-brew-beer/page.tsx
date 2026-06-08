import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "Your First Beer in 7 Steps — Beginner Home Brewing Guide",
  description:
    "Brew your first beer at home in 7 simple steps. A beginner-friendly walkthrough using a 1-gallon brewing kit. No experience needed.",
  alternates: { canonical: "https://brewkitlab.com/how-to-brew-beer" },
  openGraph: {
    title: "Your First Beer in 7 Steps — Beginner Home Brewing Guide",
    description:
      "Brew your first beer at home in 7 simple steps. No experience needed.",
    url: "https://brewkitlab.com/how-to-brew-beer",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Your First Beer in 7 Steps",
  description:
    "A beginner-friendly guide to brewing your first beer at home using a 1-gallon brewing kit.",
  totalTime: "P21D",
  step: [
    { "@type": "HowToStep", text: "Sanitize all your equipment thoroughly." },
    {
      "@type": "HowToStep",
      text: "Steep your grains (if using) and boil your wort.",
    },
    { "@type": "HowToStep", text: "Add hops at the correct intervals." },
    {
      "@type": "HowToStep",
      text: "Cool the wort to fermentation temperature.",
    },
    {
      "@type": "HowToStep",
      text: "Pitch the yeast and seal the fermenter with an airlock.",
    },
    {
      "@type": "HowToStep",
      text: "Wait 1-2 weeks for primary fermentation to finish.",
    },
    { "@type": "HowToStep", text: "Bottle, carbonate, and enjoy your beer." },
  ],
};

const steps = [
  {
    title: "Sanitize everything",
    body: "This is the single most important step. Anything that touches your wort after the boil must be sanitized — fermenter, airlock, spoon, funnel, all of it. Use the sanitizer packet that comes with your kit. Most failed first batches come down to skipping this.",
  },
  {
    title: "Make your wort",
    body: "Heat water to about 160°F and steep your grains for 20-30 minutes (if your recipe uses them). Remove the grains, then bring the liquid to a gentle boil and stir in your malt extract. This sweet liquid is called wort — yeast food.",
  },
  {
    title: "Add hops on schedule",
    body: "Hops added early in the boil produce bitterness. Hops added late produce flavor and aroma. Follow your recipe's hop schedule exactly — timing here defines what your beer will taste like.",
  },
  {
    title: "Cool the wort",
    body: "Bring your wort down to around 70°F before adding yeast. Hot wort will kill the yeast. An ice bath in your sink works fine for a 1-gallon batch. Take your time — pitching at the wrong temperature is a common rookie error.",
  },
  {
    title: "Pitch the yeast",
    body: "Pour the cooled wort into your sanitized fermenter, then sprinkle the included dry yeast on top. Seal the fermenter and attach the airlock. Don't shake or stir after pitching — let the yeast do its thing.",
  },
  {
    title: "Wait for fermentation",
    body: "Within 24-48 hours, you should see steady bubbling in the airlock — that's the yeast converting sugars into alcohol and CO2. Primary fermentation takes 1-2 weeks. Read why airlocks bubble for more on what to expect.",
  },
  {
    title: "Bottle and condition",
    body: "Once bubbling has slowed to less than one bubble per minute, transfer your beer into sanitized bottles with a small amount of priming sugar. Cap, then wait 1-2 weeks for natural carbonation. Chill, crack open, and enjoy.",
  },
];

export default function HowToBrewBeer() {
  return (
    <>
      <JsonLd data={howToJsonLd} />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-heading text-4xl font-bold text-brown-900 leading-tight">
          Your First Beer in 7 Steps
        </h1>
        <p className="text-brown-700 mt-4 text-lg leading-relaxed">
          Brewing your first beer at home sounds intimidating, but the process
          is genuinely simple when you break it down. Grab a{" "}
          <Link
            href="/1-gallon-brewing-kit"
            className="underline hover:no-underline text-brown-900"
          >
            1-gallon brewing kit
          </Link>{" "}
          and a beer ingredient kit, follow these 7 steps, and you&apos;ll have
          fresh homebrew in about 3 weeks.
        </p>
        <div className="mt-4">
          <ShareButtons
            url="https://brewkitlab.com/how-to-brew-beer"
            title="Your First Beer in 7 Steps"
          />
        </div>

        <section className="mt-10">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            What You Need
          </h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="bg-cream rounded-xl p-4">
              <p className="font-semibold text-brown-900">Equipment</p>
              <ul className="text-sm text-brown-700 mt-2 space-y-1">
                <li>• 1-gallon glass fermenter</li>
                <li>• Airlock and stopper</li>
                <li>• Sanitizer</li>
                <li>• Hydrometer (optional but helpful)</li>
                <li>• Bottles + caps</li>
              </ul>
              <p className="text-xs text-brown-700 mt-3">
                Our{" "}
                <Link
                  href="/1-gallon-brewing-kit"
                  className="underline text-brown-900"
                >
                  1-gallon brewing kit
                </Link>{" "}
                includes everything except the ingredient kit.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-4">
              <p className="font-semibold text-brown-900">Ingredients</p>
              <ul className="text-sm text-brown-700 mt-2 space-y-1">
                <li>• Malt extract (or grains + extract)</li>
                <li>• Hops (timed additions)</li>
                <li>• Ale yeast (SafAle US-05 works great)</li>
                <li>• Priming sugar (for carbonation)</li>
                <li>• Water (filtered or spring)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            The 7-Step Process
          </h2>

          <ol className="mt-6 space-y-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <div className="w-8 h-8 bg-tan-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900">{step.title}</h3>
                  <p className="text-brown-700 text-sm mt-1 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            How Long Does Beer Take?
          </h2>
          <p className="text-brown-700 mt-3 leading-relaxed">
            From brew day to drinking, expect about 3 weeks total — 1-2 weeks
            for primary fermentation, plus 1-2 weeks of bottle conditioning. See
            our full breakdown of{" "}
            <Link
              href="/how-long-does-beer-take"
              className="underline hover:no-underline text-brown-900"
            >
              how long beer takes to brew
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 bg-tan-200 rounded-2xl p-8">
          <h2 className="font-heading text-xl font-bold text-brown-900">
            Ready to brew your first beer?
          </h2>
          <p className="text-brown-700 mt-2 text-sm">
            Our{" "}
            <Link
              href="/1-gallon-brewing-kit"
              className="underline text-brown-900"
            >
              1-gallon brewing kit
            </Link>{" "}
            has everything you need to follow these steps. Pair it with any
            beer ingredient kit and you&apos;re brewing this weekend.
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
