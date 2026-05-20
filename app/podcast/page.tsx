import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Featured Podcast — BrewKit Lab",
  description:
    "Watch our featured podcast episodes. Conversations, stories, and ideas worth sharing — handpicked by the BrewKit Lab team.",
  alternates: { canonical: "https://brewkitlab.com/podcast" },
  openGraph: {
    title: "Featured Podcast — BrewKit Lab",
    description:
      "Watch our featured podcast episodes. Conversations, stories, and ideas worth sharing.",
    url: "https://brewkitlab.com/podcast",
  },
};

const episodes = [
  {
    id: "ky2lklP0sSQ",
    title: "Episode 1",
    url: "https://www.youtube.com/watch?v=ky2lklP0sSQ",
  },
  {
    id: "3GFa94XpBV8",
    title: "Episode 2",
    url: "https://www.youtube.com/watch?v=3GFa94XpBV8",
  },
  {
    id: "kZ2jd-FmfDs",
    title: "Episode 3",
    url: "https://www.youtube.com/watch?v=kZ2jd-FmfDs&t=311s",
    start: 311,
  },
  {
    id: "u9barytc0Lg",
    title: "Episode 4",
    url: "https://www.youtube.com/watch?v=u9barytc0Lg",
  },
];

export default function Podcast() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <header className="max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-brown-900 leading-tight">
          Featured Podcast
        </h1>
        <p className="text-brown-700 mt-4 text-lg leading-relaxed">
          We&apos;re proud to feature this podcast. Honest conversations,
          real stories, and ideas worth sitting with. Grab a brew and tune in.
        </p>
      </header>

      <div className="mt-12 grid sm:grid-cols-2 gap-8">
        {episodes.map((ep) => {
          const embedUrl = ep.start
            ? `https://www.youtube.com/embed/${ep.id}?start=${ep.start}`
            : `https://www.youtube.com/embed/${ep.id}`;

          return (
            <div key={ep.id} className="space-y-3">
              <div className="aspect-video rounded-xl overflow-hidden bg-cream border border-tan-400">
                <iframe
                  src={embedUrl}
                  title={ep.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-lg font-bold text-brown-900">
                  {ep.title}
                </h2>
                <a
                  href={ep.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brown-700 underline hover:no-underline hover:text-brown-900"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 bg-cream rounded-2xl p-8 text-center">
        <p className="font-heading text-xl font-bold text-brown-900">
          Like what you hear?
        </p>
        <p className="text-brown-700 text-sm mt-2">
          Share an episode with a friend — or pick up a brewing kit and listen
          while your first batch ferments.
        </p>
        <Link
          href="/shop"
          className="inline-block mt-4 bg-brown-900 text-white font-body font-semibold py-2.5 px-6 rounded-lg hover:bg-brown-700 transition-colors text-sm"
        >
          Shop Kits
        </Link>
      </div>
    </section>
  );
}
