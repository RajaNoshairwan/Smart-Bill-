import { Calculator } from "lucide-react"

export function CalculatorSection() {
  return (
    <section id="calculator" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Calculator className="h-4 w-4" />
            Interactive Tool
          </div>
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Electricity Bill Calculator
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Use our smart calculator below to estimate your monthly electricity bill. Simply add your appliances, 
            enter usage details, and get instant predictions based on current electricity rates.
          </p>
        </div>

        <div className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5">
            <div className="border-b border-border bg-secondary/30 px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <div className="flex-1 text-center text-sm font-medium text-muted-foreground">
                  Smart Electricity Bill Calculator
                </div>
              </div>
            </div>
            
            <div className="w-full h-[700px]">
              <iframe
                src="https://rajanoshairwan-realistitc-bill-realistic-bill-calculator-jpyqta.streamlit.app/?embed=true"
                width="100%"
                height="100%"
                className="border-0"
                title="Electricity Bill Calculator"
                loading="lazy"
                allow="clipboard-write; fullscreen"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}










// import { Calculator } from "lucide-react"

// export function CalculatorSection() {
//   return (
//     <section id="calculator" className="py-20 sm:py-32">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
//             <Calculator className="h-4 w-4" />
//             Interactive Tool
//           </div>
//           <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//             Electricity Bill Calculator
//           </h2>
//           <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
//             Use our smart calculator below to estimate your monthly electricity bill. Simply add your appliances, 
//             enter usage details, and get instant predictions based on current electricity rates.
//           </p>
//         </div>

//         <div className="mt-12">
//           <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5">
//             <div className="border-b border-border bg-secondary/30 px-6 py-4">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <div className="h-3 w-3 rounded-full bg-destructive" />
//                   <div className="h-3 w-3 rounded-full bg-yellow-500" />
//                   <div className="h-3 w-3 rounded-full bg-primary" />
//                 </div>
//                 <div className="flex-1 text-center text-sm font-medium text-muted-foreground">
//                   Smart Electricity Bill Calculator
//                 </div>
//               </div>
//             </div>
            
//             <div className="w-full h-[700px]">
//               <iframe
//                 src="https://rajanoshairwan-realistitc-bill-realistic-bill-calculator-jpyqta.streamlit.app/"
//                 width="100%"
//                 height="100%"
//                 className="border-0"
//                 title="Electricity Bill Calculator"
//                 loading="lazy"
//                 allow="clipboard-write"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }