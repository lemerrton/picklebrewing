import Link from "next/link";
import Image from "next/image";
import { PackageOpen, ShieldCheck, Gift } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Stars from "@/components/Stars";
import { getReviews, RATING_VALUE } from "@/lib/reviews";

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BrewKit Lab",
  url: "https://brewkitlab.com",
  description:
    "The best beginner brewing kit for first-time brewers. 1 gallon and 5 gallon starter fermentation kits that ship everywhere.",
};

const oneGallonReviews = getReviews("1-gallon-brewing-kit");
const fiveGallonReviews = getReviews("5-gallon-brewing-kit");

const featuredReviews = [
  { ...oneGallonReviews[1], tag: "Birthday gift for brother" },
  { ...oneGallonReviews[3], tag: "Father's Day gift" },
  { ...fiveGallonReviews[2], tag: "Gift for husband" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={webSiteJsonLd} />

      {/* 1. HERO */}
      <section className="bg-cream" aria-label="Hero">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brown-900 leading-tight">
              The Gift Every Beer Lover Secretly Wants
            </h1>
            <p className="text-brown-700 mt-4 text-lg">
              Give them the kit that turns &quot;I should try brewing&quot; into
              their new favorite hobby — everything in one box, plain-English
              instructions, and a first batch we guarantee turns out great.
            </p>
            <Link
              href="/shop"
              className="inline-block mt-6 bg-brown-900 text-white font-body font-semibold py-3 px-8 rounded-lg hover:bg-brown-700 transition-colors"
            >
              Find Their Kit
            </Link>
          </div>
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-white border border-tan-400">
            <Image
              src="/images/brewing-setup.png"
              alt="Two friends cheering with glasses of homebrew next to a 1-gallon BrewKit Lab fermenter and wrapped gift box"
              width={1456}
              height={1080}
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 2. OBJECTION HANDLER */}
      <section className="bg-white" aria-label="Why our kit doesn't end up in a closet">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown-900 leading-tight">
            Most Brewing Kits End Up in a Closet. Ours Don&apos;t.
          </h2>
          <p className="text-brown-700 mt-5 text-lg leading-relaxed">
            The #1 reason a gifted brewing kit goes unused is that it&apos;s
            confusing and intimidating. We fixed that. Every box opens to one
            plain-English instruction card — no homebrew jargon, no guessing —
            so they brew their first batch the same week they unwrap it.
          </p>
        </div>
      </section>

      {/* 3. PRODUCT CARDS */}
      <section className="max-w-5xl mx-auto px-6 py-16" aria-label="Kit options">
        <h2 className="font-heading text-3xl font-bold text-brown-900 text-center mb-4">
          Small Batch Brewing Kits for Every Level
        </h2>
        <p className="text-brown-700 text-center max-w-xl mx-auto mb-10">
          Whether you&apos;re trying your first 1 gallon brewing kit or scaling up to
          5 gallons, we&apos;ve got the home brewing kit for beginners that actually
          makes sense.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/1-gallon-brewing-kit"
            className="relative bg-white border border-tan-400 rounded-2xl p-6 text-center hover:shadow-md transition-shadow block"
          >
            <span className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-sm">
              Most Gifted
            </span>
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/images/1-gallon-kit.png"
                alt="1 gallon brewing kit with glass fermenter and airlock"
                width={600}
                height={400}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="font-heading text-xl font-bold text-brown-900 mt-6">
              1 Gallon Brewing Kit — $59.99
            </h3>
            <p className="text-brown-700 mt-2 text-sm">
              The perfect small batch brewing kit for your first brew. Kitchen-counter
              sized, beginner-friendly, and actually fun.
            </p>
            <span className="inline-block mt-4 bg-brown-900 text-white font-body font-semibold py-2.5 px-6 rounded-lg text-sm">
              Shop Now
            </span>
          </Link>

          <Link
            href="/5-gallon-brewing-kit"
            className="bg-white border border-tan-400 rounded-2xl p-6 text-center hover:shadow-md transition-shadow block"
          >
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/images/5-gallon-kit.png"
                alt="5 gallon glass carboy brewing kit"
                width={600}
                height={400}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="font-heading text-xl font-bold text-brown-900 mt-6">
              5 Gallon Brewing Kit — $105.00
            </h3>
            <p className="text-brown-700 mt-2 text-sm">
              Ready to brew for friends? Our full-size starter fermentation kit
              scales up without scaling up the complexity.
            </p>
            <span className="inline-block mt-4 bg-brown-900 text-white font-body font-semibold py-2.5 px-6 rounded-lg text-sm">
              Shop Now
            </span>
          </Link>
        </div>
      </section>

      {/* 4. FIRST BATCH GUARANTEE */}
      <section className="bg-cream" aria-label="First Batch Guarantee">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brown-900 mb-6">
            <ShieldCheck className="w-8 h-8 text-white" strokeWidth={2} aria-hidden="true" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brown-900 leading-tight">
            First Batch Guarantee
          </h2>
          <p className="text-brown-700 mt-5 text-lg leading-relaxed">
            We&apos;re so confident in our kits that we back every order with
            this promise: if their first batch doesn&apos;t turn out, we&apos;ll
            send replacement ingredients free and walk them through it
            personally. No questions, no fine print.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
            {[
              {
                title: "Step-by-step support",
                body: "Email us anytime — we'll troubleshoot in plain English.",
              },
              {
                title: "Free replacement ingredients",
                body: "If batch #1 doesn't work, batch #2 is on us.",
              },
              {
                title: "30-day guarantee",
                body: "Plenty of time to brew, taste, and decide.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-4 border border-tan-400">
                <p className="font-semibold text-brown-900 text-sm">
                  {item.title}
                </p>
                <p className="text-brown-700 text-xs mt-1 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REVIEWS / SOCIAL PROOF */}
      <section className="max-w-5xl mx-auto px-6 py-16" aria-label="Customer reviews">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-brown-900">
            What Gift-Givers Are Saying
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Stars rating={RATING_VALUE} size="md" />
            <span className="text-lg font-bold text-brown-900">
              {RATING_VALUE.toFixed(1)}
            </span>
            <span className="text-sm text-brown-700">out of 5</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {featuredReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-cream rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-2">
                <Stars rating={review.rating} />
                <span className="text-[10px] font-bold text-tan-600 uppercase tracking-wide">
                  {review.tag}
                </span>
              </div>
              <p className="mt-3 text-brown-900 leading-relaxed text-sm flex-1">
                &ldquo;{review.body}&rdquo;
              </p>
              <p className="mt-4 text-xs font-semibold text-brown-700 uppercase tracking-wide">
                Verified buyer
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/1-gallon-brewing-kit#reviews"
            className="text-sm font-semibold text-brown-900 underline hover:no-underline"
          >
            Read all reviews →
          </Link>
        </div>
      </section>

      {/* 6. WHY BREWKIT LAB */}
      <section className="bg-tan-200" aria-label="Why BrewKit Lab">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-heading text-3xl font-bold text-brown-900 text-center mb-10">
            Why BrewKit Lab?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: PackageOpen,
                title: "Opens and Brews Same-Day",
                text: "No experience needed. They'll be brewing their first batch the week it arrives, not reading a manual.",
              },
              {
                Icon: ShieldCheck,
                title: "Real Gear They'll Keep Using",
                text: "Glass fermenters, real airlocks, sanitizer included — the same equipment serious brewers trust.",
              },
              {
                Icon: Gift,
                title: "Gift-Ready, Ships Fast",
                text: "Arrives clean, complete, and ready to wrap. Order in time for the big day.",
              },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 bg-tan-600 rounded-full mx-auto flex items-center justify-center text-white">
                  <Icon className="w-7 h-7" strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold text-brown-900 mt-4">
                  {title}
                </h3>
                <p className="text-brown-700 mt-2 text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LEARN TO BREW */}
      <section className="max-w-5xl mx-auto px-6 py-16" aria-label="Learn to brew">
        <h2 className="font-heading text-3xl font-bold text-brown-900 text-center mb-4">
          Learn to Brew
        </h2>
        <p className="text-brown-700 text-center max-w-xl mx-auto mb-8">
          New to brewing? We&apos;ve got guides for that.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { href: "/how-to-brew-beer", label: "Your First Beer in 7 Steps" },
            { href: "/how-long-does-beer-take", label: "How Long Does Beer Take to Brew?" },
            { href: "/fermentation-guide", label: "Fermentation Guide" },
            { href: "/blog/how-to-start-brewing-at-home", label: "Start Brewing at Home" },
            { href: "/blog/common-fermentation-mistakes", label: "Fermentation Mistakes" },
            { href: "/blog/why-airlock-bubbles", label: "Why Airlocks Bubble" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block bg-white border border-tan-400 rounded-xl px-5 py-4 text-brown-900 font-semibold text-sm hover:shadow-md transition-shadow"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
