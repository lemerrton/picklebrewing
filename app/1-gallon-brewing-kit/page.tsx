import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { products, productJsonLd } from "@/lib/products";

export const metadata: Metadata = {
  title: "1 Gallon Brewing Kit — Perfect for First-Time Brewers",
  description:
    "Our 1 gallon brewing kit is the best small batch brewing kit for beginners. Includes glass fermenter, airlock, sanitizer, and step-by-step instructions. $59.99, ships everywhere.",
  alternates: { canonical: "https://brewkitlab.com/1-gallon-brewing-kit" },
  openGraph: {
    title: "1 Gallon Brewing Kit — BrewKit Lab",
    description: "The best small batch brewing kit for beginners. Everything you need for $59.99.",
    url: "https://brewkitlab.com/1-gallon-brewing-kit",
  },
};

export default function OneGallonBrewingKit() {
  const product = products[0];

  return (
    <>
      <JsonLd data={productJsonLd(product)} />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-2/5 shrink-0">
            <div className="bg-white border border-tan-400 rounded-2xl p-4">
              <Image
                src={product.imagePath}
                alt="1 gallon brewing kit with glass fermenter and airlock"
                width={500}
                height={500}
                className="object-contain w-full"
                priority
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-brown-900 leading-tight">
              1 Gallon Brewing Kit
            </h1>
            <p className="text-2xl font-bold text-brown-900 mt-3">$59.99</p>
            <p className="text-brown-700 mt-4 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-6">
              <p className="text-xs font-semibold text-brown-700 uppercase tracking-wide mb-2">
                What&apos;s included
              </p>
              <ul className="space-y-2">
                {product.includes.map((item) => (
                  <li key={item} className="text-sm text-brown-700 flex items-start gap-2">
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
            See What&apos;s In the Box
          </h2>
          <p className="text-brown-700 mt-2 text-sm">
            Every kit includes a glass fermenter, airlock, yeast, hydrometer, and clear instructions.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-tan-400 rounded-2xl overflow-hidden">
              <div className="aspect-square">
                <Image
                  src="/images/1-gallon-yeast.png"
                  alt="SafAle US-05 dry ale yeast packet included in brewing kit"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-xs text-brown-700 px-3 py-2 text-center font-medium">
                SafAle US-05 dry ale yeast
              </p>
            </div>
            <div className="bg-white border border-tan-400 rounded-2xl overflow-hidden">
              <div className="aspect-square">
                <Image
                  src="/images/1-gallon-hydrometer.png"
                  alt="Triple scale hydrometer for measuring fermentation progress"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-xs text-brown-700 px-3 py-2 text-center font-medium">
                Triple-scale hydrometer
              </p>
            </div>
            <div className="bg-white border border-tan-400 rounded-2xl overflow-hidden">
              <div className="aspect-square">
                <Image
                  src="/images/1-gallon-fermenting.png"
                  alt="1 gallon glass fermenter with active fermentation and airlock"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-xs text-brown-700 px-3 py-2 text-center font-medium">
                Active fermentation in action
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            Why Start With a 1 Gallon Brewing Kit?
          </h2>
          <div className="mt-4 space-y-4 text-brown-700 leading-relaxed">
            <p>
              A 1 gallon brewing kit is the ideal small batch brewing kit for
              anyone brewing for the first time. It fits on your kitchen counter,
              uses less ingredients (so mistakes cost less), and the whole process
              is manageable from start to finish.
            </p>
            <p>
              This is the same starter fermentation kit we recommend in our{" "}
              <Link href="/best-beginner-brewing-kit" className="underline hover:no-underline text-brown-900">
                best beginner brewing kit guide
              </Link>
              . It&apos;s perfect for brewing beer, mead, cider, or anything else
              you want to try fermenting.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            What Can You Brew With This Kit?
          </h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {[
              { name: "Beer", desc: "Ales, stouts, IPAs — any beer style works at 1 gallon." },
              { name: "Mead", desc: "Honey wine is one of the easiest first brews. Check our mead guide." },
              { name: "Cider", desc: "Apple cider + yeast = hard cider. It's that simple." },
              { name: "Kombucha", desc: "Fermented tea is a great non-alcoholic option." },
            ].map((item) => (
              <div key={item.name} className="bg-cream rounded-xl p-4">
                <p className="font-semibold text-brown-900">{item.name}</p>
                <p className="text-brown-700 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-tan-200 rounded-2xl p-8">
          <h2 className="font-heading text-xl font-bold text-brown-900">
            Learn more
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/how-to-brew-mead" className="text-brown-900 underline hover:no-underline">How to Brew Mead →</Link></li>
            <li><Link href="/fermentation-guide" className="text-brown-900 underline hover:no-underline">Fermentation Guide →</Link></li>
            <li><Link href="/how-long-does-mead-take" className="text-brown-900 underline hover:no-underline">How Long Does Mead Take? →</Link></li>
            <li><Link href="/blog/how-to-start-brewing-at-home" className="text-brown-900 underline hover:no-underline">How to Start Brewing at Home →</Link></li>
          </ul>
        </section>
      </article>
    </>
  );
}
