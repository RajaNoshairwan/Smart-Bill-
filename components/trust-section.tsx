import { Shield, Database, Clock, Award } from "lucide-react"

const trustPoints = [
  {
    icon: Database,
    title: "Realistic Appliance Data",
    description: "Our database includes accurate wattage values for thousands of household appliances from major manufacturers.",
  },
  {
    icon: Shield,
    title: "Estimated Slab Rates",
    description: "We use up-to-date electricity slab rates from various regions to provide accurate bill estimates.",
  },
  {
    icon: Clock,
    title: "Regular Updates",
    description: "Our team continuously updates appliance data and electricity rates to ensure accuracy and reliability.",
  },
  {
    icon: Award,
    title: "Trusted by Thousands",
    description: "Join over 10,000 users who trust our calculator to help them manage their electricity expenses.",
  },
]

export function TrustSection() {
  return (
    <section id="about" className="bg-gradient-to-b from-secondary/30 to-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              About Us
            </div>
            <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built with Accuracy and Trust
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Smart Electricity Bill Predictor is designed to help households and businesses understand their energy 
              consumption patterns. Our tool uses realistic appliance data combined with estimated electricity slab 
              rates to provide accurate monthly bill predictions.
            </p>
            <p className="mt-4 text-muted-foreground">
              We understand that managing electricity costs can be challenging. That&apos;s why we&apos;ve built a simple 
              yet powerful tool that gives you clarity on where your money goes and how you can save more. Our 
              calculations are based on industry-standard formulas and regularly updated rate structures.
            </p>
            <p className="mt-4 text-muted-foreground">
              While our estimates are highly accurate, please note that actual bills may vary based on your 
              specific utility provider, location, and additional charges. We recommend using our tool as a 
              guideline for understanding and optimizing your electricity usage.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <point.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
