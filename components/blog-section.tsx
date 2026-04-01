
"use client"

import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"      
import { articles } from "@/lib/articles"

export function BlogSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (slug: string) => {
    setImageErrors(prev => ({ ...prev, [slug]: true }))
  }

  return (
    <section id="blog" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Resources
          </div>
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Energy Insights & Tips
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Explore our collection of articles to learn more about electricity consumption and how to save money.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block"
            >
              <Card className="group flex h-full flex-col overflow-hidden border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
                  {!imageErrors[article.slug] ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={() => handleImageError(article.slug)}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center text-center p-4">
                      <span className="text-4xl mb-2">⚡</span>
                      <span className="text-sm text-muted-foreground">{article.category}</span>
                    </div>
                  )}
                </div>
                <CardHeader className="flex-1">
                  <div className="mb-2 flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3 text-muted-foreground">
                    {article.description}
                  </CardDescription>
                  <span className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80">
                    Read Article
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}