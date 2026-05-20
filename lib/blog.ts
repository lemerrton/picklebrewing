export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-start-brewing-at-home",
    title: "How to Start Brewing at Home (Complete Beginner Guide)",
    description:
      "Everything you need to know to start home brewing as a complete beginner. From choosing your first kit to bottling your first batch.",
    date: "2026-05-15",
    readTime: "8 min read",
    tags: ["beginner", "guide"],
  },
  {
    slug: "beer-vs-mead-brewing",
    title: "Beer vs Mead Brewing: Which Should You Try First?",
    description:
      "Comparing beer and mead brewing for beginners. Learn the differences in ingredients, process, time, and difficulty so you can pick the right first brew.",
    date: "2026-05-12",
    readTime: "6 min read",
    tags: ["mead", "beer", "comparison"],
  },
  {
    slug: "common-fermentation-mistakes",
    title: "7 Common Fermentation Mistakes (and How to Avoid Them)",
    description:
      "New to fermenting? Here are the most common beginner mistakes that ruin a brew — and simple fixes so your first batch turns out great.",
    date: "2026-05-08",
    readTime: "5 min read",
    tags: ["fermentation", "tips"],
  },
  {
    slug: "how-long-does-fermentation-take",
    title: "How Long Does Fermentation Take? A Beginner's Timeline",
    description:
      "Wondering how long your brew needs to ferment? Here's a clear timeline for beer, mead, and cider fermentation so you know exactly what to expect.",
    date: "2026-05-04",
    readTime: "5 min read",
    tags: ["fermentation", "guide"],
  },
  {
    slug: "why-airlock-bubbles",
    title: "Why Is My Airlock Bubbling? What It Means for Your Brew",
    description:
      "Your airlock is bubbling — is that good or bad? Learn what airlock activity means during fermentation and when to worry (spoiler: usually don't).",
    date: "2026-04-30",
    readTime: "4 min read",
    tags: ["fermentation", "equipment"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "BrewKit Lab",
      url: "https://brewkitlab.com",
    },
    publisher: {
      "@type": "Organization",
      name: "BrewKit Lab",
      url: "https://brewkitlab.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://brewkitlab.com/blog/${post.slug}`,
    },
  };
}
