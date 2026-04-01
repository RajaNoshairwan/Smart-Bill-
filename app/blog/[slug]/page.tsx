import { notFound } from "next/navigation"
import Link from "next/link"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { articles } from "@/lib/articles"
import Image from "next/image"

export const dynamicParams = false



// ✅ Static generation for SEO
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  // ✅ Faster lookup
  const articlesMap = Object.fromEntries(
    articles.map((a) => [a.slug, a])
  )

  // const article = articlesMap[slug]

  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-muted-foreground">{article.description}</p>

      <div className="flex gap-4 text-sm mt-2 text-muted-foreground">
        <span>{article.category}</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {article.readTime}
        </span>
      </div>

      <Image
        src={article.image}
        alt={article.title}
        width={1200}
        height={400}
        className="mt-6 rounded-xl w-full h-[400px] object-cover"
      />

      <div
        className="prose mt-6 max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <Button asChild className="mt-6">
        <Link href="/#calculator">Try Tool</Link>
      </Button>
    </div>
  )
}


// SEO Metadata generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const article = articles.find((a) => a.slug === slug)

  if (!article) return {}

  return {
    title: article.title + " | Smart Bill Predictor",
    description: article.description,
    keywords: [
      "electricity bill",
      "energy saving",
      "Pakistan electricity",
      "electricity bill Pakistan",
      "unit price Pakistan electricity",
      "how to reduce electricity bill Pakistan",
      "electricity slab rates Pakistan",
      article.category,
    ],
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  }
}



// // app/articles/[slug]/page.tsx
// // import React from "react";
// import { notFound } from "next/navigation";
// // import BillCalculation from "@/articles/BillCalculation"; // adjust the path if needed
// import { articles } from "@/lib/articles";
// import BillCalculation from "@/lib/articles/BillCalculation";

// interface ArticlePageProps {
//   params: { slug: string };
// }

// export default function ArticlePage({ params }: ArticlePageProps) {
//   const article = articles.find((a) => a.slug === params.slug);

//   if (!article) return notFound();

//   // Only render BillCalculation for this specific article
//   if (article.slug === "how-electricity-bills-are-calculated") {
//     return <BillCalculation />;
//   }

//   return (
//     <main className="mx-auto max-w-4xl px-4 py-12">
//       <h1 className="text-3xl font-bold">{article.title}</h1>
//       <p className="mt-4 text-muted-foreground">{article.description}</p>
//       <div
//         className="mt-6 prose prose-sm sm:prose lg:prose-lg"
//         dangerouslySetInnerHTML={{ __html: article.content }}
//       />
//     </main>
//   );
// }