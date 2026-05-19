import type { Metadata } from "next";
import KitCard from "@/components/KitCard";

export const metadata: Metadata = {
  title: "Shop Brewing Kits — Pickle Brewing",
  description:
    "Browse our beginner-friendly 1-gallon and 5-gallon homebrewing starter kits. Everything you need to start brewing at home.",
};

export default function Shop() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-brown-900 text-center">
        Our Kits
      </h1>
      <p className="text-brown-700 text-center mt-3 max-w-xl mx-auto">
        Everything a beginner needs to start brewing at home. Pick your size and
        get started.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <KitCard
          name="1-Gallon Brewing Starter Kit"
          description="The perfect starting point. Brew your first batch in a small, manageable size — great for learning the ropes without a big commitment."
          price="$34.99"
          imageSrc="/images/1-gallon-kit.png"
          includes={[
            "1-gallon fermenting vessel",
            "Airlock and stopper",
            "Sanitizer packet",
            "Step-by-step instructions",
          ]}
        />

        <KitCard
          name="5-Gallon Brewing Starter Kit"
          description="Ready to make more? This full-size kit gives you everything you need to brew enough for friends, family, or just a well-stocked fridge."
          price="$105.00"
          imageSrc="/images/5-gallon-kit.png"
          includes={[
            "5-gallon fermenting vessel",
            "Airlock and stopper",
            "Sanitizer packet",
            "Step-by-step instructions",
          ]}
        />
      </div>
    </section>
  );
}
