import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ImageSlot from "@/components/ImageSlot";
import Stars from "@/components/Stars";
import { getReviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "The Father's Day Gift That Doesn't End Up in the Garage",
  description:
    "Why thousands of 'impossible to shop for' dads are getting a brewing kit this year. The gift that turns into a hobby, a story, and his new favorite thing.",
  alternates: { canonical: "https://brewkitlab.com/fathers-day" },
  openGraph: {
    title: "The Father's Day Gift That Doesn't End Up in the Garage",
    description:
      "The Father's Day gift that breaks the tie-and-mug pattern. Beginner brewing kits dads actually use.",
    url: "https://brewkitlab.com/fathers-day",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Father's Day Gift That Doesn't End Up in the Garage",
  description:
    "Why a beginner brewing kit is the Father's Day gift that breaks the tie-and-mug pattern.",
  author: {
    "@type": "Organization",
    name: "BrewKit Lab",
  },
  publisher: {
    "@type": "Organization",
    name: "BrewKit Lab",
    url: "https://brewkitlab.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://brewkitlab.com/fathers-day",
  },
};

// Real dad-focused testimonial from our reviews data
const dadReview = getReviews("1-gallon-brewing-kit")[3];

export default function FathersDayAdvertorial() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {/* Eyebrow + Headline */}
        <header className="text-center mb-10">
          <p className="text-xs font-bold text-tan-600 uppercase tracking-widest">
            Father&apos;s Day Gift Guide
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brown-900 leading-tight mt-3">
            The Father&apos;s Day Gift That Doesn&apos;t End Up in the Garage
          </h1>
          <p className="text-brown-700 mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
            Why thousands of &ldquo;impossible to shop for&rdquo; dads are
            getting a brewing kit this year.
          </p>
        </header>

        {/* HERO IMAGE — payoff moment */}
        <figure className="mb-10">
          <div className="aspect-[4/5] sm:aspect-video w-full rounded-xl overflow-hidden bg-white border border-tan-400">
            <Image
              src="/images/fathers-day-hero.png"
              alt="Dad laughing in his kitchen, holding up a glass of his own homemade amber ale next to a bottle labeled 'Dad's Homebrew'"
              width={896}
              height={1180}
              priority
              className="object-cover w-full h-full"
            />
          </div>
          <figcaption className="text-xs text-tan-600 text-center mt-2 italic">
            The moment that makes it worth it.
          </figcaption>
        </figure>

        {/* Opening narrative */}
        <section className="prose-brewkit space-y-5 text-brown-700 leading-relaxed text-[17px]">
          <p>It happens every June.</p>
          <p>
            You ask your dad what he wants for Father&apos;s Day. And he says
            the same thing he says every year:{" "}
            <em>&ldquo;I don&apos;t need anything.&rdquo;</em>
          </p>
          <p>
            So you panic. You get him a tie. A mug. A gift card. He smiles. He
            says thanks. And then the gift disappears into a drawer — and you
            both quietly know it&apos;s never coming out again.
          </p>
          <p>
            Here&apos;s the worst part: you weren&apos;t being lazy. Dads are
            genuinely the hardest people on earth to shop for. If they want
            something, they just buy it themselves. So everything you give
            them feels like a polite formality.
          </p>
          <p className="text-xl font-heading font-semibold text-brown-900 border-l-4 border-tan-600 pl-5 py-2 my-8">
            But there&apos;s one gift that breaks the pattern. And it&apos;s
            not what you&apos;d expect.
          </p>
        </section>

        {/* H2: The problem with beer stuff */}
        <section className="mt-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown-900 leading-tight">
            The problem with &ldquo;beer stuff&rdquo;
          </h2>
          <div className="mt-4 space-y-5 text-brown-700 leading-relaxed text-[17px]">
            <p>
              If your dad loves beer, you&apos;ve probably already tried the
              beer gifts. The novelty koozie. The fancy glasses. The case of
              his favorite.
            </p>
          </div>

          <figure className="my-8">
            <ImageSlot
              label="Flat-lay of failed dad gifts: tie, 'World's Okayest Dad' mug, gift card, koozie"
              aspectRatio="aspect-video"
            />
            <figcaption className="text-xs text-tan-600 text-center mt-2 italic">
              The lineup of polite, forgettable gifts.
            </figcaption>
          </figure>

          <div className="space-y-5 text-brown-700 leading-relaxed text-[17px]">
            <p>
              The problem? None of those give him anything to{" "}
              <em>do</em>. They&apos;re things. He already has things.
            </p>
            <p>
              What dads actually light up about is a <strong>project</strong>.
              Something to master. Something to show off. Ask anyone whose dad
              has a smoker, a garden, or a garage full of half-built furniture.
            </p>
            <p>
              That&apos;s why a beginner brewing kit hits different. You&apos;re
              not giving him beer. You&apos;re giving him{" "}
              <strong>&ldquo;I made this.&rdquo;</strong>
            </p>
          </div>
        </section>

        {/* H2: What happens after he opens it */}
        <section className="mt-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown-900 leading-tight">
            What happens after he opens it
          </h2>
          <div className="mt-4 space-y-5 text-brown-700 leading-relaxed text-[17px]">
            <p>
              The first weekend, he brews his first batch — about an hour of
              hands-on time, then the kit does the work while he checks on it
              like a proud parent.
            </p>
          </div>

          <figure className="my-8">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-white border border-tan-400">
              <Image
                src="/images/1-gallon-fermenting.png"
                alt="Glass fermenter actively fermenting with airlock bubbling"
                width={1456}
                height={1080}
                className="object-cover w-full h-full"
              />
            </div>
            <figcaption className="text-xs text-tan-600 text-center mt-2 italic">
              The sound of beer making itself.
            </figcaption>
          </figure>

          <div className="space-y-5 text-brown-700 leading-relaxed text-[17px]">
            <p>
              Two weeks later, he&apos;s pouring his own beer. His name on it
              if he wants.
            </p>
            <p>
              And then the part nobody warns you about:{" "}
              <strong>he will not shut up about it</strong>. Every person who
              walks into that house is trying &ldquo;the beer he made.&rdquo;
              It becomes his thing. His brag. His new personality.
            </p>
            <p className="text-xl font-heading font-semibold text-brown-900 border-l-4 border-tan-600 pl-5 py-2 my-8">
              That&apos;s the real gift. Not the beer — the pride.
            </p>
          </div>

          {/* Real dad testimonial pulled from reviews */}
          {dadReview && (
            <div className="mt-8 bg-cream rounded-2xl p-6">
              <div className="flex items-center gap-2">
                <Stars rating={dadReview.rating} />
                <span className="text-xs font-semibold text-brown-700 uppercase tracking-wide">
                  Father&apos;s Day buyer · Verified
                </span>
              </div>
              <p className="mt-3 text-brown-900 leading-relaxed text-[17px] italic">
                &ldquo;{dadReview.body}&rdquo;
              </p>
            </div>
          )}
        </section>

        {/* H2: But what if it collects dust? */}
        <section className="mt-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown-900 leading-tight">
            &ldquo;But what if it just collects dust?&rdquo;
          </h2>
          <p className="mt-4 text-brown-700 leading-relaxed text-[17px]">
            Fair question. It&apos;s the #1 fear with any hobby gift — and
            honestly, with most brewing kits, it&apos;s a fair fear.
            Here&apos;s why it happens, and how BrewKit Lab was built to
            prevent it:
          </p>

          {/* Objection 1 */}
          <div className="mt-8">
            <h3 className="font-heading text-xl font-bold text-brown-900">
              1. Most kits are confusing.
            </h3>
            <p className="mt-2 text-brown-700 leading-relaxed text-[17px]">
              Forums are full of stories about instructions that take an hour
              just to understand. BrewKit Lab comes with{" "}
              <strong>one plain-English instruction card</strong>. No jargon.
              No guesswork. If he can follow a chili recipe, he can brew.
            </p>

            <figure className="mt-6">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-white border border-tan-400">
                <Image
                  src="/images/1-gallon-kit.png"
                  alt="Overhead open-box shot of 1 gallon brewing kit with instruction card, glass carboy, airlock, hydrometer, and yeast packet"
                  width={1456}
                  height={1080}
                  className="object-cover w-full h-full"
                />
              </div>
              <figcaption className="text-xs text-tan-600 text-center mt-2 italic">
                Open the box. Read one page. Brew.
              </figcaption>
            </figure>
          </div>

          {/* Objection 2 */}
          <div className="mt-10">
            <h3 className="font-heading text-xl font-bold text-brown-900">
              2. Most kits arrive incomplete.
            </h3>
            <p className="mt-2 text-brown-700 leading-relaxed text-[17px]">
              The most common complaint about the big-name kits is finding out
              after gift day that bottles, caps, or other gear cost extra.
              BrewKit Lab includes <strong>everything he needs</strong> for his
              first brew. Open the box, make beer.
            </p>
          </div>

          {/* Objection 3 */}
          <div className="mt-10">
            <h3 className="font-heading text-xl font-bold text-brown-900">
              3. Most kits gamble his first batch.
            </h3>
            <p className="mt-2 text-brown-700 leading-relaxed text-[17px]">
              If batch one tastes bad, the kit goes in the closet forever.
              That&apos;s why every BrewKit Lab kit is covered by the{" "}
              <strong>First Batch Guarantee</strong>: if his first brew
              doesn&apos;t come out great, we replace the ingredients free and
              walk him through it.
            </p>

            {/* Inline guarantee badge */}
            <div className="mt-6 flex items-center gap-4 bg-cream rounded-2xl p-5 border border-tan-400">
              <div className="shrink-0 w-14 h-14 rounded-full bg-brown-900 flex items-center justify-center">
                <ShieldCheck
                  className="w-7 h-7 text-white"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-brown-900">
                  First Batch Guarantee
                </p>
                <p className="text-sm text-brown-700 mt-0.5">
                  Free replacement ingredients if batch #1 doesn&apos;t turn
                  out. 30-day window.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Historical fact */}
        <section className="mt-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown-900 leading-tight">
            One more thing he&apos;ll love telling people
          </h2>
          <div className="mt-4 space-y-5 text-brown-700 leading-relaxed text-[17px]">
            <p>
              Here&apos;s a fact your dad will repeat at every barbecue for the
              rest of his life:{" "}
              <strong>
                brewing beer at home was federally illegal in America until
                1978.
              </strong>
            </p>
            <p>
              Americans brewed at home for centuries — George Washington did
              it — until Prohibition wiped the tradition out, and Congress
              didn&apos;t fix the law for 45 years.
            </p>
            <p>
              So this isn&apos;t a gimmick gift. It&apos;s a craft older than
              the country, and he gets to be part of bringing it back.
            </p>
          </div>
        </section>

        {/* H2: Urgency + Product CTAs */}
        <section className="mt-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown-900 leading-tight">
            The part where you have to hurry
          </h2>
          <p className="mt-4 text-brown-700 leading-relaxed text-[17px]">
            Father&apos;s Day shipping windows tighten fast. Order this week
            and your kit arrives in time to wrap.
          </p>

          {/* Product cards */}
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <Link
              href="/1-gallon-brewing-kit"
              className="relative bg-white border border-tan-400 rounded-2xl p-5 hover:shadow-md transition-shadow block"
            >
              <span className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-sm">
                Most Gifted
              </span>
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-white">
                <Image
                  src="/images/1-gallon-kit.png"
                  alt="1 gallon brewing kit open box"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-brown-900 mt-4">
                1 Gallon Kit — $59.99
              </h3>
              <p className="text-brown-700 text-sm mt-1">
                Counter-sized, low-stakes, everything included. The best
                first-brew kit for any dad.
              </p>
              <span className="inline-block mt-4 bg-brown-900 text-white font-body font-semibold py-2 px-5 rounded-lg text-sm">
                Gift This Kit →
              </span>
            </Link>

            <Link
              href="/5-gallon-brewing-kit"
              className="bg-white border border-tan-400 rounded-2xl p-5 hover:shadow-md transition-shadow block"
            >
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-white">
                <Image
                  src="/images/5-gallon-kit.png"
                  alt="5 gallon brewing kit open box"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-brown-900 mt-4">
                5 Gallon Kit — $105.00
              </h3>
              <p className="text-brown-700 text-sm mt-1">
                For the dad who&apos;ll want to pour for the whole crew. Full
                batches, full pride.
              </p>
              <span className="inline-block mt-4 bg-brown-900 text-white font-body font-semibold py-2 px-5 rounded-lg text-sm">
                Gift This Kit →
              </span>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-14 bg-cream rounded-2xl p-8 md:p-10 text-center">
          <p className="text-brown-700 leading-relaxed text-[17px] max-w-xl mx-auto">
            Order now so it arrives before Father&apos;s Day — and this year,
            instead of the polite &ldquo;thanks,&rdquo; you get the phone call
            where he won&apos;t stop talking about{" "}
            <em>his beer</em>.
          </p>
          <Link
            href="/shop"
            className="inline-block mt-6 bg-brown-900 text-white font-body font-semibold py-3.5 px-10 rounded-lg hover:bg-brown-700 transition-colors text-base shadow-sm"
          >
            Gift This Kit →
          </Link>
          <p className="mt-3 text-xs text-tan-600">
            First Batch Guarantee · Ships everywhere · Secure Stripe checkout
          </p>
        </section>
      </article>
    </>
  );
}
