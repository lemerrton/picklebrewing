import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "How to Brew Mead — Easy Beginner Guide",
  description:
    "Learn how to brew mead at home with this simple beginner guide. All you need is honey, water, yeast, and a basic brewing kit. Step-by-step instructions included.",
  alternates: { canonical: "https://brewkitlab.com/how-to-brew-mead" },
  openGraph: {
    title: "How to Brew Mead — Easy Beginner Guide",
    description: "Learn how to brew mead at home. Honey + water + yeast = mead. It's that simple.",
    url: "https://brewkitlab.com/how-to-brew-mead",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Brew Mead at Home",
  description: "A simple guide to brewing mead at home with a beginner brewing kit.",
  step: [
    { "@type": "HowToStep", text: "Sanitize all your equipment thoroughly." },
    { "@type": "HowToStep", text: "Heat water and dissolve honey to create must." },
    { "@type": "HowToStep", text: "Cool the must and pour it into your fermenter." },
    { "@type": "HowToStep", text: "Add yeast and seal with an airlock." },
    { "@type": "HowToStep", text: "Wait 2-4 weeks for primary fermentation." },
    { "@type": "HowToStep", text: "Bottle and age for at least 2 more weeks." },
  ],
};

export default function HowToBrewMead() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-heading text-4xl font-bold text-brown-900 leading-tight">
          How to Brew Mead at Home: A Beginner&apos;s Guide
        </h1>
        <p className="text-brown-700 mt-4 text-lg leading-relaxed">
          Mead is one of the easiest things you can brew as a beginner. Three
          ingredients — honey, water, and yeast — plus an{" "}
          <Link href="/1-gallon-brewing-kit" className="underline hover:no-underline text-brown-900">
            easy mead brewing kit
          </Link>{" "}
          and you&apos;re in business. Here&apos;s exactly how to do it.
        </p>
        <div className="mt-4">
          <ShareButtons url="https://brewkitlab.com/how-to-brew-mead" title="How to Brew Mead at Home" />
        </div>

        <section className="mt-10">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            What You Need
          </h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="bg-cream rounded-xl p-4">
              <p className="font-semibold text-brown-900">Equipment</p>
              <ul className="text-sm text-brown-700 mt-2 space-y-1">
                <li>• Fermenting vessel (glass recommended)</li>
                <li>• Airlock and stopper</li>
                <li>• Sanitizer</li>
                <li>• Bottles for storing</li>
              </ul>
              <p className="text-xs text-brown-700 mt-3">
                Our{" "}
                <Link href="/1-gallon-brewing-kit" className="underline text-brown-900">
                  1 gallon brewing kit
                </Link>{" "}
                includes everything except the honey.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-4">
              <p className="font-semibold text-brown-900">Ingredients</p>
              <ul className="text-sm text-brown-700 mt-2 space-y-1">
                <li>• 2-3 lbs honey (for 1 gallon)</li>
                <li>• Water (filtered or spring)</li>
                <li>• Wine or mead yeast</li>
                <li>• Optional: fruits, spices</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            Step-by-Step Mead Brewing Process
          </h2>

          <ol className="mt-6 space-y-6">
            {[
              { title: "Sanitize everything", body: "This is the most important step. Every piece of equipment that touches your mead needs to be sanitized. Use the sanitizer included in your kit. If bacteria gets in, your batch is toast." },
              { title: "Make your must", body: "Heat about half your water (don't boil) and dissolve the honey into it. This honey-water mixture is called \"must.\" Add the rest of the water to bring it to room temperature." },
              { title: "Pour into your fermenter", body: "Transfer the must into your sanitized fermenting vessel. Leave some headspace at the top — fermentation creates CO2 and things can get fizzy." },
              { title: "Add yeast", body: "Sprinkle your yeast on top of the must. Some people rehydrate it first, but for your first batch, just sprinkling works fine. Seal with your airlock." },
              { title: "Wait (the hard part)", body: "Primary fermentation takes 2-4 weeks. You'll see your airlock bubbling — that's the yeast doing its thing. Check out our guide on why airlocks bubble for more on what to expect." },
              { title: "Bottle and age", body: "Once bubbling slows down significantly, your mead is ready to bottle. It'll be drinkable immediately but gets much better with 2-4 weeks of aging. Patience pays off." },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <div className="w-8 h-8 bg-tan-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-brown-900">{step.title}</h3>
                  <p className="text-brown-700 text-sm mt-1 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            How Long Does Mead Take?
          </h2>
          <p className="text-brown-700 mt-3 leading-relaxed">
            From start to drinkable, expect about 4-6 weeks minimum. But mead
            improves dramatically with age — 3 months is noticeably better, and 6
            months is where it really shines. Read our full breakdown on{" "}
            <Link href="/how-long-does-mead-take" className="underline hover:no-underline text-brown-900">
              how long mead takes to brew
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 bg-tan-200 rounded-2xl p-8">
          <h2 className="font-heading text-xl font-bold text-brown-900">
            Ready to brew your first mead?
          </h2>
          <p className="text-brown-700 mt-2 text-sm">
            Our{" "}
            <Link href="/1-gallon-brewing-kit" className="underline text-brown-900">
              1 gallon brewing kit
            </Link>{" "}
            has everything you need except the honey. Grab a kit, pick up some
            local honey, and you&apos;re brewing this weekend.
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
