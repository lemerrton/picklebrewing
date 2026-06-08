export interface Review {
  rating: 1 | 2 | 3 | 4 | 5;
  body: string;
}

interface KitReviewData {
  ratingValue: number;
  reviews: Review[];
}

const kits: Record<string, KitReviewData> = {
  "1-gallon-brewing-kit": {
    ratingValue: 4.8,
    reviews: [
      {
        rating: 5,
        body:
          "Bought this on a whim because I've always wanted to try brewing but didn't want to commit to a huge setup. The instructions were easy to follow and my first batch actually turned out really well. Already planning my next brew.",
      },
      {
        rating: 5,
        body:
          "I got this as a birthday gift for my brother and he absolutely loved it. We brewed the first batch together a few days later and now he's talking about experimenting with different recipes. Great gift idea.",
      },
      {
        rating: 5,
        body:
          "This kit made the whole process way less intimidating than I expected. Everything I needed was included and I was surprised by how professional the finished product tasted. Definitely worth it.",
      },
      {
        rating: 5,
        body:
          "Bought this for my dad for Father's Day. He had been curious about homebrewing for years but never got around to trying it. He called me after the first batch finished and couldn't stop talking about how much fun it was.",
      },
      {
        rating: 4,
        body:
          "I've tried a few hobby kits over the years and this is one of the few that actually delivered on what it promised. Clear instructions, quality equipment, and a fun weekend project.",
      },
    ],
  },
  "5-gallon-brewing-kit": {
    ratingValue: 4.2,
    reviews: [
      {
        rating: 5,
        body:
          "Started with the 1 gallon kit a few months ago and enjoyed it so much that I upgraded to this one. The larger batches are perfect for sharing with friends and the process was just as straightforward.",
      },
      {
        rating: 5,
        body:
          "I bought the 1 gallon version first to see if brewing was something I'd actually stick with. After a couple successful batches I came back and ordered the 5 gallon kit. Couldn't be happier with the upgrade.",
      },
      {
        rating: 5,
        body:
          "I bought this as a gift for my husband and he was thrilled. He spent the weekend setting everything up and had his first batch going the same day. It's become his new favorite hobby.",
      },
      {
        rating: 5,
        body:
          "Got this for my brother after he mentioned wanting to get into brewing. He loved it. A few weeks later he sent photos of the first batch and said the whole family helped bottle it. Awesome gift.",
      },
      {
        rating: 4,
        body:
          "Really impressed with the quality of the equipment. Everything felt durable and well thought out. The instructions were easy to follow and my first 5 gallon batch came out better than expected.",
      },
      {
        rating: 3,
        body:
          "I got gifted this kit and while I had a lot of fun with it, it took up too much space and I couldn't find a good place to keep it.",
      },
    ],
  },
};

export function getReviews(slug: string): Review[] {
  return kits[slug]?.reviews ?? [];
}

export function getRating(slug: string): number {
  return kits[slug]?.ratingValue ?? 0;
}

export function reviewSchema(review: Review) {
  return {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(review.rating),
      bestRating: "5",
    },
    author: { "@type": "Person", name: "Verified buyer" },
    reviewBody: review.body,
  };
}

export function aggregateRatingSchema(slug: string) {
  const data = kits[slug];
  if (!data) return null;
  return {
    "@type": "AggregateRating",
    ratingValue: data.ratingValue.toFixed(1),
    reviewCount: data.reviews.length,
    bestRating: "5",
    worstRating: "1",
  };
}
