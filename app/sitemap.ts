import { articles } from "@/lib/articles";

export default function sitemap() {
  return [
    {
      url: "https://smartbill.com",
    },
    {
      url: "https://smartbill.com/blog",
    },
    ...articles.map((a) => ({
      url: `https://smartbill.com/blog/${a.slug}`,
    })),
  ]
}