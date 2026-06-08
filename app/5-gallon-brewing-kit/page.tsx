import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Stars from "@/components/Stars";
import { products, productJsonLd, type Product } from "@/lib/products";
import {
  getReviews,
  RATING_VALUE,
  aggregateRatingSchema,
  reviewSchema,
} from "@/lib/reviews";

const SLUG = "5-gallon-brewing-kit";

function productWithReviewJsonLd(product: Product) {
  const reviews = getReviews(SLUG);
  return {
    ...productJsonLd(product),
    aggregateRating: aggregateRatingSchema(reviews),
    review: reviews.map(reviewSchema),
  };
}

export const metadata: Metadata = {
  title: "5 Gallon Brewing Kit — Brew Bigger Batches at Home",
  description:
    "Our 5 gallon brewing kit lets you scale up your homebrew without scaling up the complexity. Includes glass carboy, airlock, yeast, sanitizer, and clear instructions. $105.00, ships everywhere.",
  alternates: { canonical: "https://brewkitlab.com/5-gallon-brewing-kit" },
  openGraph: {
    title: "5 Gallon Brewing Kit — BrewKit Lab",
    description:
      "Brew full-size batches at home with our 5 gallon starter kit. Everything you need for $105.00.",
    url: "https://brewkitlab.com/5-gallon-brewing-kit",
  },
};

export default function FiveGallonBrewingKit() {
  const product = products[1];
  const reviews = getReviews(SLUG);

  return (
    <>
      <JsonLd data={productWithReviewJsonLd(product)} />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-2/5 shrink-0">
            <div className="bg-white border border-tan-400 rounded-2xl p-4">
              <Image
                src={product.imagePath}
                alt="5 gallon glass carboy brewing kit with airlock"
                width={500}
                height={500}
                className="object-contain w-full"
                priority
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-brown-900 leading-tight">
              5 Gallon Brewing Kit
            </h1>

            <a
              href="#reviews"
              className="mt-3 inline-flex items-center gap-2 group"
              aria-label={`Rated ${RATING_VALUE} out of 5 stars`}
            >
              <Stars rating={RATING_VALUE} />
              <span className="text-sm font-semibold text-brown-900 group-hover:underline">
                {RATING_VALUE.toFixed(1)}
              </span>
            </a>

            <p className="text-2xl font-bold text-brown-900 mt-3">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-brown-700 mt-4 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-6">
              <p className="text-xs font-semibold text-brown-700 uppercase tracking-wide mb-2">
                What&apos;s included
              </p>
              <ul className="space-y-2">
                {product.includes.map((item) => (
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

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={product.stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brown-900 text-white font-body font-semibold py-3 px-8 rounded-lg hover:bg-brown-700 transition-colors"
              >
                Buy Now — ${product.price.toFixed(2)}
              </a>
              <a
                href={`mailto:gentlevoyage.assistance@gmail.com?subject=Order Inquiry — ${product.name}`}
                className="inline-block bg-white border border-tan-400 text-brown-900 font-body font-semibold py-3 px-8 rounded-lg hover:bg-cream transition-colors"
              >
                Questions? Email us
              </a>
            </div>
            <p className="mt-2 text-xs text-tan-600">
              Secure checkout via Stripe. Ships everywhere.
            </p>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            Ready to Scale Up Your Brewing?
          </h2>
          <div className="mt-4 space-y-4 text-brown-700 leading-relaxed">
            <p>
              The 5 gallon brewing kit is the natural next step for anyone who
              loved their first 1 gallon batch and wants to brew enough to
              share. A 5 gallon batch yields roughly 50 standard bottles —
              plenty for friends, family, or a long weekend.
            </p>
            <p>
              Same beginner-friendly approach as our{" "}
              <Link
                href="/1-gallon-brewing-kit"
                className="underline hover:no-underline text-brown-900"
              >
                1 gallon brewing kit
              </Link>
              , just bigger results. The included yeast and step-by-step
              instructions take all the guesswork out of brewing at scale.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            What Can You Brew With This Kit?
          </h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Beer",
                desc: "Pale ales, IPAs, stouts — full-size batches that are perfect for sharing.",
              },
              {
                name: "Mead",
                desc: "A 5 gallon honey mead batch yields plenty for aging and gifting bottles.",
              },
              {
                name: "Cider",
                desc: "Hard cider scales beautifully to 5 gallons. Great for fall and holiday gatherings.",
              },
              {
                name: "Wine",
                desc: "Country wines and fruit wines work great in a 5 gallon carboy setup.",
              },
            ].map((item) => (
              <div key={item.name} className="bg-cream rounded-xl p-4">
                <p className="font-semibold text-brown-900">{item.name}</p>
                <p className="text-brown-700 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="reviews" className="mt-16 scroll-mt-24">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            What Customers Are Saying
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <Stars rating={RATING_VALUE} size="md" />
            <span className="text-lg font-bold text-brown-900">
              {RATING_VALUE.toFixed(1)}
            </span>
            <span className="text-sm text-brown-700">out of 5</span>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-cream rounded-2xl p-6">
                <div className="flex items-center gap-2">
                  <Stars rating={review.rating} />
                  <span className="text-xs font-semibold text-brown-700 uppercase tracking-wide">
                    Verified buyer
                  </span>
                </div>
                <p className="mt-3 text-brown-900 leading-relaxed text-sm">
                  &ldquo;{review.body}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-tan-200 rounded-2xl p-8">
          <h2 className="font-heading text-xl font-bold text-brown-900">
            Learn more
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/1-gallon-brewing-kit"
                className="text-brown-900 underline hover:no-underline"
              >
                Start smaller: 1 Gallon Brewing Kit →
              </Link>
            </li>
            <li>
              <Link
                href="/fermentation-guide"
                className="text-brown-900 underline hover:no-underline"
              >
                Fermentation Guide →
              </Link>
            </li>
            <li>
              <Link
                href="/how-to-brew-mead"
                className="text-brown-900 underline hover:no-underline"
              >
                How to Brew Mead →
              </Link>
            </li>
            <li>
              <Link
                href="/blog/how-to-start-brewing-at-home"
                className="text-brown-900 underline hover:no-underline"
              >
                How to Start Brewing at Home →
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
