import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Brewing Instructions & Recipes — BrewKit Lab",
  description:
    "Step-by-step brewing instructions for your BrewKit Lab kit, plus easy beginner mead recipes. Just add yeast and let the kit do the work.",
  alternates: { canonical: "https://brewkitlab.com/instructions" },
  openGraph: {
    title: "Brewing Instructions & Recipes — BrewKit Lab",
    description:
      "Step-by-step brewing instructions plus easy beginner mead recipes.",
    url: "https://brewkitlab.com/instructions",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Brew Your First Batch with a BrewKit Lab Kit",
  description:
    "Step-by-step instructions for brewing beer or mead at home with a 1-gallon or 5-gallon BrewKit Lab starter kit.",
  totalTime: "P21D",
  step: [
    { "@type": "HowToStep", text: "Sanitize all equipment thoroughly with the included sanitizer packet." },
    { "@type": "HowToStep", text: "Mix your ingredients (water plus honey or malt extract) according to your recipe." },
    { "@type": "HowToStep", text: "Pour the liquid into the fermenter, leaving a few inches of headspace." },
    { "@type": "HowToStep", text: "Sprinkle the included yeast on top." },
    { "@type": "HowToStep", text: "Seal the fermenter and attach the airlock filled halfway with water." },
    { "@type": "HowToStep", text: "Wait 2-4 weeks for fermentation to finish — the airlock will bubble while it's working." },
    { "@type": "HowToStep", text: "Bottle and let condition for 1-2 weeks before enjoying." },
  ],
};

const brewingSteps = [
  {
    title: "Sanitize everything",
    body: "Mix the included sanitizer packet with water and rinse your fermenter, airlock, stopper, and any tools. Anything that touches your brew has to be clean.",
  },
  {
    title: "Mix your batch",
    body: "Combine water with your chosen ingredients (honey for mead, malt extract for beer). Stir well so everything dissolves. No boiling required for mead.",
  },
  {
    title: "Fill the fermenter",
    body: "Pour your liquid into the glass fermenter. Leave about 2 inches of headspace at the top so the yeast has room to do its thing without pushing through the airlock.",
  },
  {
    title: "Add the yeast",
    body: "Open the yeast packet that came in your kit and sprinkle it directly on top of the liquid. Don't stir — just let it settle.",
  },
  {
    title: "Seal and walk away",
    body: "Attach the stopper and airlock. Fill the airlock halfway with water. Within 24-48 hours you'll see bubbles — that's fermentation. Put it somewhere room-temperature (65-72°F) and let the BrewKit do the work.",
  },
  {
    title: "Bottle when ready",
    body: "Once bubbling slows to less than one per minute (usually 2-4 weeks), transfer to bottles with a little priming sugar. Wait another 1-2 weeks for carbonation, then chill and enjoy.",
  },
];

const recipes = [
  {
    name: "Classic Traditional Mead",
    yield: "1 gallon · ~10 bottles · finished in 4-6 weeks",
    description:
      "The simplest mead possible. Three ingredients, no boil, hard to mess up. Wildflower honey gives floral notes; orange blossom honey adds citrus brightness.",
    ingredients: [
      "2.5 lbs raw honey (wildflower or orange blossom)",
      "1 gallon filtered or spring water (about 3.5 liters)",
      "1 packet wine or mead yeast (Lalvin EC-1118 is forgiving)",
      "Optional: 1 tsp yeast nutrient for cleaner fermentation",
    ],
    steps: [
      "Sanitize all equipment.",
      "Warm half the water (don't boil — 110°F max) and dissolve the honey completely.",
      "Add the rest of the water cold to bring the mixture to room temperature.",
      "Pour into your sanitized fermenter, leaving headspace.",
      "Sprinkle yeast on top and seal with airlock.",
      "Ferment for 4-6 weeks. Bottle and age at least 2 more weeks (longer = better).",
    ],
  },
  {
    name: "Cinnamon Apple Mead (Cyser)",
    yield: "1 gallon · ~10 bottles · finished in 5-7 weeks",
    description:
      "A cozy fall and winter favorite. Apple cider replaces water for a smoother, fruitier mead. Great as a holiday gift batch.",
    ingredients: [
      "2 lbs raw honey",
      "1 gallon fresh apple cider or juice (no preservatives, no sorbates)",
      "1 cinnamon stick",
      "1 packet wine yeast (Lalvin 71B works beautifully)",
      "Optional: 1 whole vanilla bean, split lengthwise",
    ],
    steps: [
      "Sanitize all equipment.",
      "Warm the cider slightly (do not boil) and stir in the honey until fully dissolved.",
      "Pour into the sanitized fermenter and drop in the cinnamon stick (and vanilla bean if using).",
      "Add yeast, seal with airlock.",
      "Ferment for 4-6 weeks. Taste a sample — if you want more spice, leave the cinnamon in another week.",
      "Bottle and let condition 1-2 weeks before drinking. Best served slightly chilled.",
    ],
  },
];

export default function Instructions() {
  return (
    <>
      <JsonLd data={howToJsonLd} />

      <section className="bg-cream" aria-label="Instructions hero">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="text-xs font-bold text-tan-600 uppercase tracking-widest">
            Brewing Instructions
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brown-900 leading-tight mt-3">
            Just add yeast and let the BrewKit do the work.
          </h1>
          <p className="text-brown-700 mt-5 text-lg leading-relaxed">
            Every kit ships with the same plain-English instruction card we
            walk through here. Six simple steps, two beginner recipes,
            and a first batch you can be drinking in under a month.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown-900">
            The 6-Step BrewKit Lab Process
          </h2>
          <p className="text-brown-700 mt-2 text-sm">
            Works for any beer, mead, or cider recipe. The yeast does the
            actual work — you just set the table.
          </p>
          <ol className="mt-6 space-y-5">
            {brewingSteps.map((step, i) => (
              <li
                key={step.title}
                className="bg-cream rounded-xl p-5 flex gap-4"
              >
                <div className="w-9 h-9 bg-brown-900 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900">
                    {step.title}
                  </h3>
                  <p className="text-brown-700 text-sm mt-1 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown-900">
            Two Beginner Mead Recipes
          </h2>
          <p className="text-brown-700 mt-2 text-sm">
            Mead is the easiest first brew — no boiling, no hops, no
            guesswork. Pick one of these and you&apos;ll be tasting your
            first batch within 6 weeks.
          </p>

          <div className="mt-8 space-y-8">
            {recipes.map((recipe) => (
              <div
                key={recipe.name}
                className="border border-tan-400 rounded-2xl p-6 bg-white"
              >
                <h3 className="font-heading text-xl font-bold text-brown-900">
                  {recipe.name}
                </h3>
                <p className="text-xs text-tan-600 font-semibold uppercase tracking-wide mt-1">
                  {recipe.yield}
                </p>
                <p className="text-brown-700 text-sm mt-3 leading-relaxed">
                  {recipe.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mt-5">
                  <div>
                    <p className="text-xs font-semibold text-brown-700 uppercase tracking-wide mb-2">
                      Ingredients
                    </p>
                    <ul className="space-y-1.5">
                      {recipe.ingredients.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-brown-700 flex items-start gap-2"
                        >
                          <span className="text-tan-600 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brown-700 uppercase tracking-wide mb-2">
                      Steps
                    </p>
                    <ol className="space-y-1.5">
                      {recipe.steps.map((step, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-brown-700 flex items-start gap-2"
                        >
                          <span className="text-tan-600 font-semibold shrink-0">
                            {idx + 1}.
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-tan-200 rounded-2xl p-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            Don&apos;t have a kit yet?
          </h2>
          <p className="text-brown-700 mt-2 text-sm max-w-md mx-auto">
            Our 1-gallon brewing kit has everything you need (except the
            honey). Pair it with one of the recipes above and you&apos;re
            brewing this weekend.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <Link
              href="/1-gallon-brewing-kit"
              className="inline-block bg-brown-900 text-white font-body font-semibold py-2.5 px-6 rounded-lg hover:bg-brown-700 transition-colors text-sm"
            >
              Shop 1-Gallon Kit
            </Link>
            <Link
              href="/5-gallon-brewing-kit"
              className="inline-block bg-white border border-brown-900 text-brown-900 font-body font-semibold py-2.5 px-6 rounded-lg hover:bg-cream transition-colors text-sm"
            >
              Shop 5-Gallon Kit
            </Link>
          </div>
        </section>

        <section className="mt-12 text-center">
          <p className="text-sm text-brown-700">
            Want more recipes and guides? Check out our{" "}
            <Link
              href="/blog"
              className="underline hover:no-underline text-brown-900"
            >
              brewing blog
            </Link>{" "}
            or read our{" "}
            <Link
              href="/how-to-brew-beer"
              className="underline hover:no-underline text-brown-900"
            >
              7-step beer brewing guide
            </Link>
            .
          </p>
        </section>
      </article>
    </>
  );
}
