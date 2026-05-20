import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creator Program — Brew & Share",
  description:
    "Join BrewKit Lab's creator program. Share your brewing journey on TikTok, YouTube, or Instagram and earn commissions on every kit sold through your link.",
  alternates: { canonical: "https://brewkitlab.com/creators" },
  openGraph: {
    title: "BrewKit Lab Creator Program",
    description: "Share your brewing journey and earn commissions on every kit sold.",
    url: "https://brewkitlab.com/creators",
  },
};

export default function Creators() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-brown-900 leading-tight">
        Brew, Film, Share, Earn
      </h1>
      <p className="text-brown-700 mt-4 text-lg leading-relaxed">
        Making brewing content? We want to work with you. Our creator program
        gives you a custom link, commission on every sale, and free kits to
        review. No follower minimums — just be genuine about brewing.
      </p>

      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        {[
          {
            title: "Get a Custom Link",
            desc: "We set you up with a unique link that tracks every sale you drive. Drop it in your bio, your videos, your Reddit posts — wherever.",
          },
          {
            title: "Earn Commission",
            desc: "You get a cut of every kit sold through your link. Real money for real recommendations, paid monthly.",
          },
          {
            title: "Free Kits",
            desc: "We'll send you kits to unbox, review, and brew on camera. Keep them, brew with them, give them away — your call.",
          },
        ].map((item) => (
          <div key={item.title} className="bg-cream rounded-xl p-5">
            <h2 className="font-heading text-lg font-bold text-brown-900">{item.title}</h2>
            <p className="text-brown-700 text-sm mt-2 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-brown-900">
          Who This Is For
        </h2>
        <div className="mt-4 space-y-3 text-brown-700 leading-relaxed">
          <p>
            TikTokers, YouTubers, Instagrammers, bloggers, Reddit regulars,
            homebrew forum members — anyone who makes content about brewing,
            fermentation, homesteading, or DIY food and drink.
          </p>
          <p>
            We don&apos;t care about follower count. We care about authenticity.
            If you genuinely like our kits and want to share them, we want to
            work with you.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-brown-900">
          Content Ideas
        </h2>
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          {[
            "Unbox and first impressions",
            "\"I brewed mead for the first time\" vlog",
            "Time-lapse of fermentation",
            "Taste test after 30 days",
            "\"Brewing kit vs doing it from scratch\" comparison",
            "\"Easiest first brew\" tutorial",
          ].map((idea) => (
            <div key={idea} className="bg-white border border-tan-400 rounded-lg px-4 py-3 text-sm text-brown-700">
              {idea}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-tan-200 rounded-2xl p-8 text-center">
        <h2 className="font-heading text-xl font-bold text-brown-900">
          Ready to join?
        </h2>
        <p className="text-brown-700 mt-2 text-sm">
          Email us with your social links and we&apos;ll get you set up within
          48 hours.
        </p>
        <a
          href="mailto:gentlevoyage.assistance@gmail.com?subject=Creator Program Application"
          className="inline-block mt-4 bg-brown-900 text-white font-body font-semibold py-3 px-8 rounded-lg hover:bg-brown-700 transition-colors"
        >
          Apply Now
        </a>
      </div>

      <p className="mt-8 text-sm text-brown-700 text-center">
        Not a creator? No worries — check out our{" "}
        <Link href="/shop" className="underline hover:no-underline text-brown-900">
          brewing kits
        </Link>{" "}
        or learn how to{" "}
        <Link href="/how-to-brew-mead" className="underline hover:no-underline text-brown-900">
          brew your first mead
        </Link>
        .
      </p>
    </section>
  );
}
