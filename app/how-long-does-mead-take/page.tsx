import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "How Long Does Mead Take to Brew? Complete Timeline",
  description:
    "Wondering how long mead takes to brew? From start to drinkable in 4-6 weeks, with peak flavor at 3-6 months. Here's the full mead brewing timeline for beginners.",
  alternates: { canonical: "https://picklebrewing.com/how-long-does-mead-take" },
  openGraph: {
    title: "How Long Does Mead Take to Brew?",
    description: "Full mead brewing timeline: drinkable in 4-6 weeks, peak flavor at 3-6 months.",
    url: "https://picklebrewing.com/how-long-does-mead-take",
  },
};

export default function HowLongDoesMeadTake() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-brown-900 leading-tight">
        How Long Does Mead Take to Brew? A Beginner&apos;s Timeline
      </h1>
      <p className="text-brown-700 mt-4 text-lg leading-relaxed">
        If you just pitched yeast into your first batch of mead (or you&apos;re
        about to), you&apos;re probably wondering: how long does mead take? Short
        answer: drinkable in about 4-6 weeks, genuinely good at 3 months,
        amazing at 6+.
      </p>
      <div className="mt-4">
        <ShareButtons url="https://picklebrewing.com/how-long-does-mead-take" title="How Long Does Mead Take to Brew?" />
      </div>

      <section className="mt-10">
        <h2 className="font-heading text-2xl font-bold text-brown-900">
          The Mead Brewing Timeline
        </h2>
        <div className="mt-6 space-y-4">
          {[
            { time: "Day 1", phase: "Brew Day", desc: "Mix honey and water, add yeast, seal with airlock. Takes about 30 minutes." },
            { time: "Days 1-3", phase: "Lag Phase", desc: "Nothing visible happens. The yeast is waking up and adjusting. This is normal — don't panic." },
            { time: "Days 3-14", phase: "Active Fermentation", desc: "Airlock bubbles steadily. The yeast is eating sugar and producing alcohol. You might see foam on top." },
            { time: "Weeks 2-4", phase: "Slowing Down", desc: "Bubbling decreases. Most of the sugar is consumed. The mead starts clearing as yeast settles." },
            { time: "Week 4-6", phase: "Technically Drinkable", desc: "You can bottle now. It's mead! But it'll taste young — maybe a bit harsh or \"hot\" from the alcohol." },
            { time: "Months 2-3", phase: "Getting Good", desc: "Flavors mellow and blend. The harshness fades. This is where most people notice a big improvement." },
            { time: "Months 6+", phase: "Peak Flavor", desc: "Smooth, complex, balanced. This is the mead you'll be proud to share. Patience is the secret ingredient." },
          ].map((item) => (
            <div key={item.time} className="flex gap-4">
              <div className="w-24 shrink-0 text-right">
                <p className="text-xs font-semibold text-tan-600 uppercase">{item.time}</p>
              </div>
              <div className="border-l-2 border-tan-400 pl-4 pb-2">
                <h3 className="font-semibold text-brown-900 text-sm">{item.phase}</h3>
                <p className="text-brown-700 text-sm mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-brown-900">
          Can You Speed Up Mead?
        </h2>
        <div className="mt-3 space-y-3 text-brown-700 leading-relaxed">
          <p>
            Sort of. Adding yeast nutrients helps fermentation finish faster and
            cleaner. Keeping temperature steady (around 65-70°F) prevents stalls.
            But aging is aging — you can&apos;t rush that part without sacrificing
            flavor.
          </p>
          <p>
            For your first batch, we recommend patience. Brew it, forget about it
            for a month, then taste. If it&apos;s not great, give it another month.
            Mead almost always improves with time.
          </p>
        </div>
      </section>

      <section className="mt-12 bg-tan-200 rounded-2xl p-8">
        <h2 className="font-heading text-xl font-bold text-brown-900">
          Start your first mead
        </h2>
        <p className="text-brown-700 mt-2 text-sm">
          All you need is honey, water, yeast, and a{" "}
          <Link href="/1-gallon-brewing-kit" className="underline text-brown-900">
            1 gallon brewing kit
          </Link>
          . Check out our full{" "}
          <Link href="/how-to-brew-mead" className="underline text-brown-900">
            mead brewing guide
          </Link>{" "}
          for the step-by-step process.
        </p>
        <Link
          href="/shop"
          className="inline-block mt-4 bg-brown-900 text-white font-body font-semibold py-2.5 px-6 rounded-lg hover:bg-brown-700 transition-colors text-sm"
        >
          Shop Kits
        </Link>
      </section>
    </article>
  );
}
