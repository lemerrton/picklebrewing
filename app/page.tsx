import Link from "next/link";
import Image from "next/image";
import ImageSlot from "@/components/ImageSlot";

export default function Home() {
  return (
    <>
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brown-900 leading-tight">
              Brew Something Beautiful
            </h1>
            <p className="text-brown-700 mt-4 text-lg">
              Beginner brewing kits for your first gallon — or your fifth.
            </p>
            <Link
              href="/shop"
              className="inline-block mt-6 bg-brown-900 text-white font-body font-semibold py-3 px-8 rounded-lg hover:bg-brown-700 transition-colors"
            >
              Shop Kits
            </Link>
          </div>
          <ImageSlot label="Hero photo — your brewing setup" aspectRatio="aspect-video" />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-heading text-3xl font-bold text-brown-900 text-center mb-10">
          Choose Your Kit
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-tan-400 rounded-2xl p-6 text-center">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/images/1-gallon-kit.png"
                alt="1 Gallon Brewing Kit"
                width={600}
                height={400}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="font-heading text-xl font-bold text-brown-900 mt-6">
              1 Gallon Kits
            </h3>
            <p className="text-brown-700 mt-2 text-sm">
              Perfect for your first brew. Small batch, big satisfaction.
            </p>
            <Link
              href="/shop"
              className="inline-block mt-4 bg-brown-900 text-white font-body font-semibold py-2.5 px-6 rounded-lg hover:bg-brown-700 transition-colors text-sm"
            >
              Shop Now
            </Link>
          </div>

          <div className="bg-white border border-tan-400 rounded-2xl p-6 text-center">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/images/5-gallon-kit.png"
                alt="5 Gallon Brewing Kit"
                width={600}
                height={400}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="font-heading text-xl font-bold text-brown-900 mt-6">
              5 Gallon Kits
            </h3>
            <p className="text-brown-700 mt-2 text-sm">
              Ready to share? Brew enough for friends and family.
            </p>
            <Link
              href="/shop"
              className="inline-block mt-4 bg-brown-900 text-white font-body font-semibold py-2.5 px-6 rounded-lg hover:bg-brown-700 transition-colors text-sm"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-tan-200">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-heading text-3xl font-bold text-brown-900 text-center mb-10">
            Why Pickle Brewing?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Beginner-Friendly",
                text: "Every kit comes with clear, step-by-step instructions. No jargon, no guesswork.",
              },
              {
                title: "Quality Ingredients",
                text: "We include everything you need — sanitizer, airlock, fermenting vessel, and more.",
              },
              {
                title: "Ships Everywhere",
                text: "No matter where you are, we'll get your kit to your door.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-tan-600 rounded-full mx-auto flex items-center justify-center text-white text-xl font-bold">
                  {item.title[0]}
                </div>
                <h3 className="font-heading text-lg font-bold text-brown-900 mt-4">
                  {item.title}
                </h3>
                <p className="text-brown-700 mt-2 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
