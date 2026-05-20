import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "Fermentation Guide for Beginners",
  description:
    "Everything you need to know about fermentation as a beginner brewer. Learn what fermentation is, how it works, and what to expect during your first brew.",
  alternates: { canonical: "https://brewkitlab.com/fermentation-guide" },
  openGraph: {
    title: "Fermentation Guide for Beginners — BrewKit Lab",
    description: "A clear, beginner-friendly guide to understanding fermentation.",
    url: "https://brewkitlab.com/fermentation-guide",
  },
};

export default function FermentationGuide() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-brown-900 leading-tight">
        Fermentation Guide: What Every Beginner Brewer Needs to Know
      </h1>
      <p className="text-brown-700 mt-4 text-lg leading-relaxed">
        Fermentation is the magic behind every beer, mead, cider, and kombucha.
        If you&apos;re new to brewing with a{" "}
        <Link href="/best-beginner-brewing-kit" className="underline hover:no-underline text-brown-900">
          beginner brewing kit
        </Link>
        , understanding the basics of fermentation will make your first brew way
        less mysterious.
      </p>
      <div className="mt-4">
        <ShareButtons url="https://brewkitlab.com/fermentation-guide" title="Fermentation Guide for Beginners" />
      </div>

      <section className="mt-10">
        <h2 className="font-heading text-2xl font-bold text-brown-900">
          What Is Fermentation?
        </h2>
        <p className="text-brown-700 mt-3 leading-relaxed">
          Fermentation is the process where yeast eats sugar and produces alcohol
          and CO2. That&apos;s the short version. Yeast is a living organism — you feed
          it sugar (from honey, malt, fruit juice, etc.), and it does its thing.
          The CO2 escapes through your airlock, and the alcohol stays in your brew.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl font-bold text-brown-900">
          The Three Phases of Fermentation
        </h2>
        <div className="mt-4 space-y-4">
          {[
            { phase: "Lag Phase (0-24 hours)", desc: "Nothing seems to happen. The yeast is adjusting to its new environment, absorbing oxygen, and getting ready to multiply. Don't panic — this is normal." },
            { phase: "Active Fermentation (1-7 days)", desc: "This is where the action is. Your airlock will be bubbling steadily, you might see foam (called krausen) on top of your brew, and the yeast is chewing through sugar fast." },
            { phase: "Conditioning (1-4+ weeks)", desc: "Bubbling slows way down. The yeast is cleaning up after itself — eating byproducts that cause off-flavors. This is where patience pays off. The longer you wait, the better it tastes." },
          ].map((item) => (
            <div key={item.phase} className="bg-cream rounded-xl p-5">
              <h3 className="font-semibold text-brown-900">{item.phase}</h3>
              <p className="text-brown-700 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl font-bold text-brown-900">
          Temperature Matters
        </h2>
        <p className="text-brown-700 mt-3 leading-relaxed">
          Most ale yeasts work best between 60-75°F (15-24°C). Too cold and
          fermentation stalls. Too hot and the yeast produces off-flavors
          (fusel alcohols — they give you headaches). A consistent room
          temperature is usually fine for your first brew.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-heading text-2xl font-bold text-brown-900">
          Common Beginner Questions
        </h2>
        <div className="mt-4 space-y-4">
          {[
            { q: "My airlock isn't bubbling — is something wrong?", a: "Not necessarily. Check your seal first. If the lid or stopper isn't tight, CO2 escapes around it instead of through the airlock. Read more about why airlocks bubble." },
            { q: "How do I know when fermentation is done?", a: "When airlock bubbling slows to less than one bubble per minute for a few days straight. A hydrometer gives you a definitive answer if you want to be precise." },
            { q: "Can I open the fermenter to check?", a: "Try not to. Every time you open it, you risk introducing bacteria or wild yeast. If you must, sanitize everything and be quick." },
          ].map((item) => (
            <div key={item.q} className="border border-tan-400 rounded-xl p-5">
              <h3 className="font-semibold text-brown-900 text-sm">{item.q}</h3>
              <p className="text-brown-700 text-sm mt-2 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 bg-tan-200 rounded-2xl p-8">
        <h2 className="font-heading text-xl font-bold text-brown-900">
          Keep learning
        </h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/how-to-brew-mead" className="text-brown-900 underline hover:no-underline">How to Brew Mead →</Link></li>
          <li><Link href="/how-long-does-mead-take" className="text-brown-900 underline hover:no-underline">How Long Does Mead Take? →</Link></li>
          <li><Link href="/blog/common-fermentation-mistakes" className="text-brown-900 underline hover:no-underline">Common Fermentation Mistakes →</Link></li>
          <li><Link href="/blog/why-airlock-bubbles" className="text-brown-900 underline hover:no-underline">Why Airlocks Bubble →</Link></li>
          <li><Link href="/shop" className="text-brown-900 underline hover:no-underline">Shop Beginner Brewing Kits →</Link></li>
        </ul>
      </section>
    </article>
  );
}
