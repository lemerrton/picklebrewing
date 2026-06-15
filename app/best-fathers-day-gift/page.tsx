import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ImageSlot from "@/components/ImageSlot";
import Stars from "@/components/Stars";
import { getReviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Best Father's Day Gift for Beer-Loving Dads (Honest 2026 Pick)",
  description:
    "An honest look at why 'impossible to shop for' dads are getting a brewing kit this Father's Day — and how BrewKit Lab compares to the big-name Amazon kits.",
  alternates: {
    canonical: "https://brewkitlab.com/best-fathers-day-gift",
  },
  openGraph: {
    title: "Best Father's Day Gift for Beer-Loving Dads",
    description:
      "Why 'impossible to shop for' dads are getting a brewing kit this year — and what makes ours different from the Amazon kits.",
    url: "https://brewkitlab.com/best-fathers-day-gift",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Father's Day Gift That Doesn't End Up in the Garage",
  description:
    "Honest comparison: why BrewKit Lab beats big-name brewing kits as a Father's Day gift.",
  author: { "@type": "Organization", name: "BrewKit Lab" },
  publisher: {
    "@type": "Organization",
    name: "BrewKit Lab",
    url: "https://brewkitlab.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://brewkitlab.com/best-fathers-day-gift",
  },
};

const dadReview = getReviews("1-gallon-brewing-kit")[3];

export default function BestFathersDayGift() {
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
            Why &ldquo;impossible to shop for&rdquo; dads are getting a brewing
            kit this year.
          </p>
        </header>

        {/* HERO IMAGE */}
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
            But there&apos;s one gift that breaks the pattern.
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
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-white border border-tan-400">
              <Image
                src="/images/failed-gifts.png"
                alt="The lineup of polite, forgettable dad gifts: a 'World's Okayest Dad' mug, a Happy Birthday gift card, and a red beer koozie"
                width={1456}
                height={1080}
                className="object-cover w-full h-full"
              />
            </div>
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
            <p>Two weeks later, he&apos;s pouring his own beer.</p>
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

        {/* H2: Why your dad's friends are all doing this */}
        <section className="mt-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown-900 leading-tight">
            Why your dad&apos;s friends are all doing this
          </h2>
          <div className="mt-4 space-y-5 text-brown-700 leading-relaxed text-[17px]">
            <p>Something&apos;s happening with American dads right now.</p>
            <p>
              The smoker on the porch. The raised garden bed. The sourdough
              starter on the counter. Every dad with a crafty streak is
              chasing the same thing — a <strong>hands-on project</strong>{" "}
              he can master at his own pace.
            </p>
            <p>
              Home brewing is the latest one to blow up. After years of
              buying everything pre-made, people are rediscovering the
              satisfaction of <em>actually making something</em>. Anti-screen.
              Anti-corporate. Intensely satisfying.
            </p>
            <p>
              A brewing kit checks every box: ingredients you can taste, a
              process you can refine, and a finished product you can hand to
              a friend and say{" "}
              <strong>&ldquo;I made this.&rdquo;</strong> That&apos;s the
              rare gift that fits exactly into the moment.
            </p>
            <p className="text-xl font-heading font-semibold text-brown-900 border-l-4 border-tan-600 pl-5 py-2 my-8">
              He doesn&apos;t have to know that. You&apos;re just handing him
              a piece of it.
            </p>
          </div>
        </section>

        {/* NEW: Quick honesty break */}
        <section className="mt-14 bg-tan-200 rounded-2xl p-7 md:p-9 border-l-4 border-brown-900">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-brown-900 leading-tight">
            Quick honesty break
          </h2>
          <p className="mt-3 text-brown-700 leading-relaxed text-[17px]">
            We&apos;re BrewKit Lab — a small shop that makes exactly two
            brewing kits, and yes, this is our page. We built our kits after
            reading hundreds of reviews of the big-name kits and seeing the
            same complaints over and over. So here&apos;s the comparison,
            straight.
          </p>
        </section>

        {/* H2: Why not just grab whatever kit is on Amazon? */}
        <section className="mt-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown-900 leading-tight">
            Why not just grab whatever kit is on Amazon?
          </h2>
          <p className="mt-4 text-brown-700 leading-relaxed text-[17px]">
            You can. We read hundreds of those reviews while building ours,
            and two patterns came back over and over.
          </p>

          {/* The "pro" kits are a lot */}
          <div className="mt-10">
            <h3 className="font-heading text-xl font-bold text-brown-900">
              The &ldquo;pro&rdquo; kits are a lot
            </h3>
            <p className="font-heading text-lg italic text-brown-900 border-l-4 border-tan-600 pl-5 py-1 mt-4">
              &ldquo;It took an hour just to understand the directions.&rdquo;
            </p>
            <p className="mt-3 text-brown-700 leading-relaxed text-[17px]">
              A lot of what&apos;s out there is built for 5-gallon batches —
              big plastic buckets, a dozen loose parts, instructions that
              assume you already know what &ldquo;pitching yeast&rdquo;
              means. Great if you&apos;ve done this before. For a first-timer,
              it&apos;s a pretty reliable way to end up with a kit that gets
              half-unpacked and then forgotten.
            </p>
          </div>

          {/* The cheap kits are missing half the stuff */}
          <div className="mt-10">
            <h3 className="font-heading text-xl font-bold text-brown-900">
              The cheap kits are missing half the stuff
            </h3>
            <p className="font-heading text-lg italic text-brown-900 border-l-4 border-tan-600 pl-5 py-1 mt-4">
              &ldquo;It doesn&apos;t come with bottles.&rdquo;
            </p>
            <p className="mt-3 text-brown-700 leading-relaxed text-[17px]">
              On the other end, the bargain kits — usually no sanitizer,
              sometimes no airlock either, and &ldquo;instructions&rdquo;
              that are really a parts list. You end up placing a second order
              just to get the stuff you need before you can even start.
            </p>
          </div>

          {/* What actually matters checklist */}
          <div className="mt-10 bg-cream rounded-2xl p-6 md:p-7">
            <h3 className="font-heading text-xl font-bold text-brown-900">
              What actually separates the kits that get used
            </h3>
            <p className="mt-3 text-brown-700 leading-relaxed text-[17px]">
              After enough scrolling, the pattern was obvious. The kits that
              actually get brewed (vs. returned or shelved) all had the same
              things in common:
            </p>
            <ul className="mt-5 space-y-3">
              {[
                {
                  bold: "A real glass fermenter",
                  rest: "— plastic scratches and holds onto smells after a batch or two",
                },
                {
                  bold: "An airlock and stopper already in the box",
                  rest: ", not an “optional add-on”",
                },
                {
                  bold: "Sanitizer included",
                  rest: " — skipping this step ruins more first batches than anything else",
                },
                {
                  bold: "Instructions written for someone who's never done this before",
                  rest: "",
                },
                {
                  bold: "A small enough batch size",
                  rest: " that a mistake doesn't waste a ton of ingredients",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-brown-700 text-[17px] flex items-start gap-3 leading-relaxed"
                >
                  <span className="text-tan-600 font-bold mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span>
                    <strong className="text-brown-900">{item.bold}</strong>
                    {item.rest}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-brown-700 leading-relaxed text-[17px] italic">
              That list became our spec sheet.
            </p>
          </div>

          {/* How the 1-gallon stacks up */}
          <div className="mt-10">
            <h3 className="font-heading text-xl font-bold text-brown-900">
              How the 1-Gallon Kit stacks up
            </h3>
            <p className="mt-3 text-brown-700 leading-relaxed text-[17px]">
              It checks every box above. Plus a few things we weren&apos;t
              sure we needed until customers told us they made all the
              difference:
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

            <ul className="mt-6 space-y-4">
              <li className="text-brown-700 text-[17px] leading-relaxed">
                <strong className="text-brown-900">
                  Kitchen-counter sized.
                </strong>{" "}
                One gallon is the sweet spot — enough to feel like a real
                project, small enough that it doesn&apos;t take over the
                garage.
              </li>
              <li className="text-brown-700 text-[17px] leading-relaxed">
                <strong className="text-brown-900">
                  Everything is actually in the box.
                </strong>{" "}
                No scrambling for a second order before he can get started.
              </li>
              <li className="text-brown-700 text-[17px] leading-relaxed">
                <strong className="text-brown-900">
                  One plain-English instruction card.
                </strong>{" "}
                No homebrew jargon. Open it, read the card, start brewing.
              </li>
            </ul>
          </div>

          {/* First Batch Guarantee */}
          <div className="mt-10">
            <p className="font-heading text-lg italic text-brown-900 border-l-4 border-tan-600 pl-5 py-1">
              &ldquo;My first batch was a disaster.&rdquo;
            </p>
            <p className="mt-3 text-brown-700 leading-relaxed text-[17px]">
              This is the line we saw most. It&apos;s why every BrewKit Lab
              kit ships with the{" "}
              <strong>First Batch Guarantee</strong>: if his first brew
              doesn&apos;t come out great, we replace the ingredients free
              and walk him through it personally. No questions, no fine print.
            </p>
            <p className="mt-3 text-brown-700 leading-relaxed text-[17px]">
              As the gift-giver, that&apos;s the part that mattered most when
              customers tested it on dads. You&apos;re not just betting on
              whether he&apos;d like it — you&apos;re betting on whether it
              would actually <em>work</em>. The guarantee takes that bet off
              the table.
            </p>
          </div>

          {/* Honest close */}
          <p className="mt-10 text-brown-700 leading-relaxed text-[17px]">
            We&apos;re not going to tell you the other kits are junk. Some
            are decent. But they were built for hobbyists. Ours was built to{" "}
            <strong>survive being a gift</strong> — for a total beginner,
            with zero patience for jargon, whose first batch has to go right.
          </p>
        </section>

        {/* H2: Historical fact */}
        <section className="mt-14">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown-900 leading-tight">
            One more thing he&apos;ll love telling people
          </h2>
          <div className="mt-4 space-y-5 text-brown-700 leading-relaxed text-[17px]">
            <p>
              Here&apos;s a fact your dad will repeat at every barbecue forever:{" "}
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
              the country, and he gets to bring it back.
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
                Counter-sized, low-stakes, everything included. The one for a
                first-time brewer.
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
                For the dad who&apos;ll pour for the whole crew. Full batches,
                full pride.
              </p>
              <span className="inline-block mt-4 bg-brown-900 text-white font-body font-semibold py-2 px-5 rounded-lg text-sm">
                Gift This Kit →
              </span>
            </Link>
          </div>
        </section>

        {/* Final CTA — The Verdict */}
        <section className="mt-14 bg-cream rounded-2xl p-8 md:p-10 text-center">
          <p className="text-xs font-bold text-tan-600 uppercase tracking-widest">
            The Verdict
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-brown-900 leading-tight mt-3 max-w-xl mx-auto">
            If he&apos;s even a little curious about brewing, this is the
            gift to actually buy.
          </h2>
          <p className="text-brown-700 leading-relaxed text-[17px] mt-5 max-w-xl mx-auto">
            Low-risk for you, genuinely fun for him. With Father&apos;s Day
            this close, order sooner rather than later to make sure it
            arrives in time.
          </p>
          <Link
            href="/1-gallon-brewing-kit"
            className="inline-block mt-6 bg-brown-900 text-white font-body font-semibold py-3.5 px-10 rounded-lg hover:bg-brown-700 transition-colors text-base shadow-sm"
          >
            Get the 1-Gallon Starter Kit →
          </Link>
          <p className="mt-3 text-xs text-tan-600">
            First Batch Guarantee · Ships everywhere · Secure Stripe checkout
          </p>
        </section>
      </article>
    </>
  );
}
