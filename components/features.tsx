import { Calculator, LineChart, Lightbulb, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Calculator,
    title: "Appliance-Based Calculation",
    description:
      "Add your household appliances with their usage hours and wattage. Our calculator computes energy consumption for each device accurately.",
  },
  {
    icon: LineChart,
    title: "Monthly Bill Prediction",
    description:
      "Get accurate monthly bill estimates using your local electricity slab rates. Understand how each appliance contributes to your total bill.",
  },
  {
    icon: Zap,
    title: "Visual Charts & Analytics",
    description:
      "View detailed breakdowns with interactive charts showing consumption patterns, peak usage times, and appliance-wise cost distribution.",
  },
  {
    icon: Lightbulb,
    title: "Smart Energy-Saving Tips",
    description:
      "Receive personalized recommendations to reduce energy consumption and lower your electricity bills without sacrificing comfort.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Features
          </div>
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Manage Energy Costs
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our comprehensive tool helps you understand, track, and optimize your electricity usage with powerful features.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 transition-colors group-hover:from-primary/20 group-hover:to-accent/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
