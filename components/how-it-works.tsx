import { ClipboardList, BarChart3, Receipt } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Enter Appliance Usage",
    description:
      "Select your household appliances from our comprehensive list. Enter the wattage and daily usage hours for each device to get started.",
  },
  {
    step: "02",
    icon: BarChart3,
    title: "Get Energy Consumption",
    description:
      "Our smart algorithm calculates the total energy consumption in kilowatt-hours (kWh) for each appliance and provides a detailed breakdown.",
  },
  {
    step: "03",
    icon: Receipt,
    title: "View Estimated Monthly Bill",
    description:
      "Based on your local electricity rates and slab structure, see your estimated monthly bill with tips on how to reduce costs.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gradient-to-b from-secondary/30 to-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            How It Works
          </div>
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Calculate Your Bill in 3 Simple Steps
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our intuitive process makes it easy to estimate your electricity costs accurately.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-0.5 w-full -translate-x-1/2 bg-gradient-to-r from-primary/50 to-accent/50 lg:block" />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-card text-xs font-bold text-primary shadow-md">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="max-w-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
