import { Banknote, TrendingUp, Brain, CheckCircle2 } from "lucide-react"

const benefits = [
  {
    icon: Banknote,
    title: "Save Money on Electricity",
    description:
      "Identify high-consumption appliances and optimize their usage to significantly reduce your monthly electricity bills.",
    points: ["Identify energy-hungry appliances", "Track monthly savings", "Set budget alerts"],
  },
  {
    icon: TrendingUp,
    title: "Understand Your Usage Patterns",
    description:
      "Gain insights into when and how you consume electricity, helping you make better decisions about energy use.",
    points: ["Daily consumption trends", "Peak usage hours", "Seasonal variations"],
  },
  {
    icon: Brain,
    title: "Make Smarter Energy Decisions",
    description:
      "Use data-driven insights to upgrade to energy-efficient appliances and adopt better energy habits.",
    points: ["Appliance efficiency ratings", "Upgrade recommendations", "Habit improvement tips"],
  },
]

export function Benefits() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/30 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Benefits
          </div>
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Use Our Bill Predictor?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Take control of your electricity expenses and make informed decisions with our powerful prediction tool.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 shadow-lg transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
              
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
                  <benefit.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                
                <h3 className="mb-3 text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="mb-6 text-muted-foreground">{benefit.description}</p>
                
                <ul className="space-y-3">
                  {benefit.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
