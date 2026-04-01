import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Lightbulb, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Zap className="h-4 w-4" />
              Smart Energy Management
            </div>
            
            <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Predict Your Electricity Bill{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Instantly
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Estimate your electricity usage and monthly cost using smart appliance-based calculations. 
              Make informed decisions and save money on your energy bills.
            </p>
            
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="#calculator">
                  Calculate Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link href="#how-it-works">Learn How It Works</Link>
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Users</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">Rs.500K+</div>
                <div className="text-sm text-muted-foreground">Saved</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-primary/10">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg bg-secondary/50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Lightbulb className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">LED Lights</div>
                        <div className="text-sm text-muted-foreground">8 hours/day</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-foreground">2.4 kWh</div>
                      <div className="text-sm text-muted-foreground">/month</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between rounded-lg bg-secondary/50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <BarChart3 className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Air Conditioner</div>
                        <div className="text-sm text-muted-foreground">6 hours/day</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-foreground">180 kWh</div>
                      <div className="text-sm text-muted-foreground">/month</div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-gradient-to-r from-primary to-accent p-4">
                    <div className="text-sm font-medium text-primary-foreground/80">Estimated Monthly Bill</div>
                    <div className="mt-1 text-3xl font-bold text-primary-foreground">Rs.66750</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
