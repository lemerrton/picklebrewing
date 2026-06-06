export interface Product {
  name: string;
  slug: string;
  price: number;
  description: string;
  seoDescription: string;
  imagePath: string;
  includes: string[];
  size: string;
  sku: string;
  stripeUrl: string;
}

export const products: Product[] = [
  {
    name: "1-Gallon Brewing Starter Kit",
    slug: "1-gallon-brewing-kit",
    price: 59.99,
    description:
      "Designed for first-time brewers, this 1 gallon brewing kit simplifies fermentation with everything you need in one box — no experience required. Perfect for small batch brewing on your kitchen counter.",
    seoDescription:
      "The best 1 gallon brewing kit for beginners. Includes fermenting vessel, airlock, sanitizer, and step-by-step instructions. Start your first brew today — no experience needed.",
    imagePath: "/images/1-gallon-kit.png",
    includes: [
      "1-gallon glass fermenting vessel",
      "Airlock and stopper",
      "Sanitizer packet",
      "Step-by-step beginner instructions",
    ],
    size: "1 Gallon",
    sku: "PB-1GAL-KIT",
    stripeUrl: "https://buy.stripe.com/aFa4gzcyx1cN8pUclde3e01",
  },
  {
    name: "5-Gallon Brewing Starter Kit",
    slug: "5-gallon-brewing-kit",
    price: 105.0,
    description:
      "Ready to brew for friends and family? This 5 gallon starter brewing kit gives you everything you need to make full-size batches at home. Same beginner-friendly approach, bigger results.",
    seoDescription:
      "Our 5 gallon brewing starter kit is built for beginners ready to scale up. Includes fermenting vessel, airlock, sanitizer, and easy-to-follow instructions. Ships everywhere.",
    imagePath: "/images/5-gallon-kit.png",
    includes: [
      "5-gallon glass carboy fermenting vessel",
      "Airlock and stopper",
      "Sanitizer packet",
      "Step-by-step beginner instructions",
    ],
    size: "5 Gallon",
    sku: "PB-5GAL-KIT",
    stripeUrl: "https://buy.stripe.com/aFa8wPfKJ8Ff0Xsad5e3e02",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seoDescription,
    image: `https://brewkitlab.com${product.imagePath}`,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: "BrewKit Lab",
    },
    offers: {
      "@type": "Offer",
      url: `https://brewkitlab.com/shop`,
      priceCurrency: "USD",
      price: product.price.toFixed(2),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "BrewKit Lab",
      },
    },
  };
}
