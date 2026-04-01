import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { CalculatorSection } from "@/components/calculator-section"
import { Benefits } from "@/components/benefits"
import { BlogSection } from "@/components/blog-section"
import { TrustSection } from "@/components/trust-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <CalculatorSection />
        <Benefits />
        <BlogSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
