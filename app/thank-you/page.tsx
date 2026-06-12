import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Thank You for Your Order",
  description:
    "Your BrewKit Lab order is confirmed. Here's what happens next.",
  alternates: { canonical: "https://brewkitlab.com/thank-you" },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYou() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <Script id="meta-pixel-purchase" strategy="afterInteractive">
        {`
          if (typeof window !== 'undefined') {
            if (window.fbq) {
              window.fbq('track', 'Purchase', {
                value: 59.99,
                currency: 'USD',
                contents: [{ id: 'PB-1GAL-KIT', quantity: 1 }],
                content_ids: ['PB-1GAL-KIT'],
                content_type: 'product',
              });
            }
            if (window.ttq) {
              window.ttq.track('CompletePayment', {
                value: 59.99,
                currency: 'USD',
                content_id: 'PB-1GAL-KIT',
                quantity: 1,
                content_type: 'product',
              });
            }
          }
        `}
      </Script>

      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream mb-6">
          <svg
            className="w-8 h-8 text-brown-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl font-bold text-brown-900 leading-tight">
          Thanks for your order!
        </h1>
        <p className="text-brown-700 mt-4 text-lg leading-relaxed">
          Your brewing kit is on its way. You&apos;ll receive a confirmation
          email from Stripe with your receipt, and a shipping update once
          your kit goes out the door.
        </p>
      </div>

      <div className="mt-12 bg-cream rounded-2xl p-8">
        <h2 className="font-heading text-2xl font-bold text-brown-900">
          What Happens Next
        </h2>
        <ol className="mt-4 space-y-4">
          <li className="flex gap-4">
            <span className="shrink-0 w-7 h-7 rounded-full bg-brown-900 text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <p className="font-semibold text-brown-900">
                Confirmation email
              </p>
              <p className="text-sm text-brown-700 mt-1">
                Check your inbox in the next few minutes for your Stripe
                receipt and order details.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="shrink-0 w-7 h-7 rounded-full bg-brown-900 text-white text-sm font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <p className="font-semibold text-brown-900">
                We pack your kit
              </p>
              <p className="text-sm text-brown-700 mt-1">
                Orders typically ship within 1-3 business days. We&apos;ll
                send tracking info as soon as it&apos;s on the way.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="shrink-0 w-7 h-7 rounded-full bg-brown-900 text-white text-sm font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <p className="font-semibold text-brown-900">
                Brew day
              </p>
              <p className="text-sm text-brown-700 mt-1">
                Open the box, follow the included instructions, and start
                your first batch. We&apos;ll be cheering for you.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <div className="mt-10">
        <h2 className="font-heading text-2xl font-bold text-brown-900">
          Get Ready to Brew
        </h2>
        <p className="text-brown-700 mt-2 text-sm">
          While you wait for your kit, here&apos;s some reading to get you
          fired up:
        </p>
        <ul className="mt-4 space-y-3">
          <li>
            <Link
              href="/blog/how-to-start-brewing-at-home"
              className="text-brown-900 underline hover:no-underline"
            >
              How to Start Brewing at Home (Complete Beginner Guide) →
            </Link>
          </li>
          <li>
            <Link
              href="/blog/common-fermentation-mistakes"
              className="text-brown-900 underline hover:no-underline"
            >
              7 Common Fermentation Mistakes (and How to Avoid Them) →
            </Link>
          </li>
          <li>
            <Link
              href="/how-to-brew-mead"
              className="text-brown-900 underline hover:no-underline"
            >
              How to Brew Mead — Your First Batch →
            </Link>
          </li>
          <li>
            <Link
              href="/fermentation-guide"
              className="text-brown-900 underline hover:no-underline"
            >
              The Complete Fermentation Guide →
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-12 border-t border-tan-400 pt-8 text-center">
        <p className="text-sm text-brown-700">
          Questions about your order? Email{" "}
          <a
            href="mailto:gentlevoyage.assistance@gmail.com"
            className="text-brown-900 underline hover:no-underline"
          >
            gentlevoyage.assistance@gmail.com
          </a>
        </p>
        <Link
          href="/"
          className="inline-block mt-6 text-sm text-brown-700 hover:text-brown-900"
        >
          ← Back to BrewKit Lab
        </Link>
      </div>
    </section>
  );
}
