// //blog/page.tsx

// import Link from "next/link"
// import { articles } from "@/lib/articles"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { ArrowRight, Clock } from "lucide-react"
// import Image from "next/image"

// export default function BlogPage() {
//   return (
//     <div className="container mx-auto px-4 py-16">
//       <div className="mx-auto max-w-2xl text-center mb-12">
//         <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
//           Energy Insights Blog
//         </h1>
//         <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
//           Expert tips and guides to help you save on electricity bills
//         </p>
//       </div>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {articles.map((article) => (
//           <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
//             <Card className="group flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
//               <div className="relative h-48 w-full overflow-hidden bg-muted">
//                 <Image
//                   src={article.image}
//                   alt={article.title}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
//               <CardHeader>
//                 <div className="mb-2 flex items-center gap-3 text-sm text-muted-foreground">
//                   <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
//                     {article.category}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Clock className="h-3 w-3" />
//                     {article.readTime}
//                   </span>
//                 </div>
//                 <CardTitle className="line-clamp-2 group-hover:text-primary">
//                   {article.title}
//                 </CardTitle>
//                 <CardDescription className="line-clamp-3">
//                   {article.description}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <span className="inline-flex items-center text-sm font-medium text-primary">
//                   Read More
//                   <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </span>
//               </CardContent>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }




import Link from "next/link"
import { articles } from "@/lib/articles"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight, Clock } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Energy Insights Blog
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Expert tips and guides to help you save on electricity bills
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group block"
          >
            <Card className="group flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={1200}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <CardHeader>
                <div className="mb-2 flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>

                <CardTitle className="line-clamp-2 group-hover:text-primary">
                  {article.title}
                </CardTitle>

                <CardDescription className="line-clamp-3">
                  {article.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}