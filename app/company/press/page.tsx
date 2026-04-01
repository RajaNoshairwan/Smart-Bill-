// import { Footer } from "@/components/footer";
// import { Header } from "@/components/header";
// // import { Footer } from "react-day-picker";

// export const metadata = {
//   title: "Press – Smart Energy Management",
//   description:
//     "Press resources, media coverage, and brand assets for our electricity bill prediction platform.",
// };

// // ─────────────────────────────────────────────
// // Data
// // ─────────────────────────────────────────────

// const stats = [
//   { value: "10K+", label: "Monthly Users" },
//   { value: "98%", label: "Estimate Accuracy" },
//   { value: "Rs.500K+", label: "Saved by Users" },
//   { value: "2024", label: "Founded" },
// ];

// const pressHighlights = [
//   {
//     outlet: "Dawn",
//     date: "March 12, 2025",
//     category: "Technology",
//     headline: "Pakistani startup helps households decode rising electricity bills",
//     summary:
//       "As electricity prices surge across Pakistan, one Lahore-based platform is giving consumers a simple way to understand and forecast their monthly costs using appliance-level data.",
//     logo: "D",
//     logoColor: "bg-blue-600",
//   },
//   {
//     outlet: "The News International",
//     date: "February 3, 2025",
//     category: "Energy",
//     headline: "Free online tool lets Pakistanis calculate electricity bills before they arrive",
//     summary:
//       "A new web-based calculator is gaining traction among Pakistani homeowners and renters who want to anticipate their electricity expenses and make smarter appliance choices.",
//     logo: "N",
//     logoColor: "bg-red-600",
//   },
//   {
//     outlet: "TechJuice",
//     date: "January 18, 2025",
//     category: "Startup",
//     headline: "Energy calculator startup hits 10,000 users in three months",
//     summary:
//       "The platform, which lets users model their electricity consumption appliance by appliance, has grown rapidly on the back of viral social sharing among cost-conscious Pakistani households.",
//     logo: "TJ",
//     logoColor: "bg-primary",
//   },
//   {
//     outlet: "ProPakistani",
//     date: "December 5, 2024",
//     category: "Consumer Tech",
//     headline: "How one team is making electricity tariff slabs understandable for everyone",
//     summary:
//       "Pakistan's complex tiered electricity billing system confuses millions of consumers. This platform breaks it down into plain language and shows users exactly where their money goes.",
//     logo: "PP",
//     logoColor: "bg-emerald-600",
//   },
//   {
//     outlet: "Profit by Pakistan Today",
//     date: "November 20, 2024",
//     category: "Finance",
//     headline: "Smart energy tools emerge as household budgeting necessity amid power cost crisis",
//     summary:
//       "With electricity bills consuming an ever-larger share of household budgets, digital tools that help consumers predict and manage energy costs are finding a growing and receptive audience.",
//     logo: "PR",
//     logoColor: "bg-orange-600",
//   },
//   {
//     outlet: "Daily Pakistan",
//     date: "October 8, 2024",
//     category: "Lifestyle",
//     headline: "Five apps and websites every Pakistani household should bookmark this winter",
//     summary:
//       "Our electricity bill calculator was named among the top five digital tools for Pakistani households heading into the high-consumption winter season.",
//     logo: "DP",
//     logoColor: "bg-violet-600",
//   },
// ];

// const brandAssets = [
//   {
//     icon: (
//       <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="3" y="3" width="18" height="18" rx="2" />
//         <circle cx="8.5" cy="8.5" r="1.5" />
//         <polyline points="21 15 16 10 5 21" />
//       </svg>
//     ),
//     title: "Logo Pack",
//     description: "Primary logo, wordmark, and icon in SVG, PNG, and WebP formats across light and dark backgrounds.",
//     formats: ["SVG", "PNG", "WebP"],
//   },
//   {
//     icon: (
//       <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="10" />
//         <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//       </svg>
//     ),
//     title: "Colour Palette",
//     description: "Our brand colour system including primary, accent, and neutral swatches with hex, RGB, and HSL values.",
//     formats: ["PDF", "ASE", "HEX"],
//   },
//   {
//     icon: (
//       <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="4 7 4 4 20 4 20 7" />
//         <line x1="9" y1="20" x2="15" y2="20" />
//         <line x1="12" y1="4" x2="12" y2="20" />
//       </svg>
//     ),
//     title: "Typography Guide",
//     description: "Font families, weights, sizes, and usage guidelines for headlines, body text, and UI labels.",
//     formats: ["PDF"],
//   },
//   {
//     icon: (
//       <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
//         <polyline points="13 2 13 9 20 9" />
//       </svg>
//     ),
//     title: "Brand Guidelines",
//     description: "Complete brand usage manual covering tone of voice, logo clearance, colour usage, and what not to do.",
//     formats: ["PDF"],
//   },
//   {
//     icon: (
//       <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="3" width="20" height="14" rx="2" />
//         <line x1="8" y1="21" x2="16" y2="21" />
//         <line x1="12" y1="17" x2="12" y2="21" />
//       </svg>
//     ),
//     title: "Product Screenshots",
//     description: "High-resolution screenshots of the calculator, results view, and charts for use in editorial coverage.",
//     formats: ["PNG", "JPEG"],
//   },
//   {
//     icon: (
//       <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//       </svg>
//     ),
//     title: "Founder Photos",
//     description: "Professional headshots and team photos cleared for editorial and press use at full resolution.",
//     formats: ["JPEG", "PNG"],
//   },
// ];

// const facts = [
//   { label: "Founded", value: "2024" },
//   { label: "Headquarters", value: "Lahore, Punjab, Pakistan" },
//   { label: "Team Size", value: "Under 10" },
//   { label: "Product", value: "Free electricity bill calculator" },
//   { label: "Monthly Active Users", value: "10,000+" },
//   { label: "Total Savings Tracked", value: "Rs. 500,000+" },
//   { label: "Supported Tariff Types", value: "Residential, Commercial, Agricultural" },
//   { label: "Languages", value: "English, Urdu (coming soon)" },
// ];

// const contacts = [
//   {
//     icon: (
//       <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//         <polyline points="22,6 12,13 2,6" />
//       </svg>
//     ),
//     label: "Press Enquiries",
//     value: "press@energycalc.com",
//     href: "mailto:press@energycalc.com",
//   },
//   {
//     icon: (
//       <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//         <polyline points="22,6 12,13 2,6" />
//       </svg>
//     ),
//     label: "Partnerships",
//     value: "partners@energycalc.com",
//     href: "mailto:partners@energycalc.com",
//   },
//   {
//     icon: (
//       <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
//       </svg>
//     ),
//     label: "Twitter / X",
//     value: "@energycalcpk",
//     href: "https://twitter.com/energycalcpk",
//   },
// ];

// // ─────────────────────────────────────────────
// // Page Component
// // ─────────────────────────────────────────────

// export default function PressPage() {
//   return (
//     <main className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 min-h-screen">
//       {/* Decorative blobs */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
//       </div>
//       <Header />

//       {/* ── Hero Banner ─────────────────────────────── */}
//       <section className="border-b border-border/50 py-16 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-3xl text-center">
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
//               <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//                 <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//               </svg>
//               Press & Media
//             </div>

//             <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
//               Resources for{" "}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Journalists
//               </span>
//             </h1>

//             <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
//               Everything you need to cover our story — brand assets, key facts,
//               media coverage, and a direct line to our team. We respond to
//               press enquiries within 24 hours.
//             </p>

//             <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
//               <a
//                 href="mailto:press@energycalc.com"
//                 className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
//               >
//                 Contact Press Team
//                 <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <line x1="5" y1="12" x2="19" y2="12" />
//                   <polyline points="12 5 19 12 12 19" />
//                 </svg>
//               </a>
//               <a
//                 href="#brand-assets"
//                 className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-primary/5 sm:w-auto"
//               >
//                 Download Brand Assets
//               </a>
//             </div>

//             {/* Stats row – mirrors Hero exactly */}
//             <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
//               {stats.map((stat, i) => (
//                 <>
//                   <div key={stat.label} className="text-center">
//                     <div className="text-2xl font-bold text-foreground">{stat.value}</div>
//                     <div className="text-sm text-muted-foreground">{stat.label}</div>
//                   </div>
//                   {i < stats.length - 1 && <div className="h-8 w-px bg-border" />}
//                 </>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Company Overview ─────────────────────────── */}
//       <section className="py-16 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-12 lg:grid-cols-2">

//             {/* About blurb */}
//             <div>
//               <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
//                 About Us
//               </div>
//               <h2 className="mb-6 text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//                 Who We Are
//               </h2>
//               <div className="space-y-4 text-muted-foreground">
//                 <p className="leading-relaxed">
//                   We are a Lahore-based technology team on a mission to make electricity
//                   billing transparent and understandable for every household in Pakistan.
//                   Our free electricity bill calculator lets users model their monthly
//                   consumption appliance by appliance, applying the latest NEPRA-approved
//                   tariff slabs to produce accurate, real-world bill estimates.
//                 </p>
//                 <p className="leading-relaxed">
//                   Founded in 2024 amid unprecedented rises in electricity prices across
//                   Pakistan, we saw a clear gap: millions of households had no reliable way
//                   to forecast their bills or understand how individual appliances
//                   contributed to their costs. We built the tool we wished existed.
//                 </p>
//                 <p className="leading-relaxed">
//                   Today our platform serves over 10,000 monthly users and has helped
//                   households collectively identify over Rs. 500,000 in potential monthly
//                   savings through smarter appliance usage and load management.
//                 </p>
//               </div>

//               <div className="mt-8 flex flex-wrap gap-3">
//                 <a
//                   href="mailto:press@energycalc.com"
//                   className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/5"
//                 >
//                   Request Interview
//                 </a>
//                 <a
//                   href="mailto:press@energycalc.com?subject=Boilerplate Request"
//                   className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/5"
//                 >
//                   Request Boilerplate
//                 </a>
//               </div>
//             </div>

//             {/* Key facts card – mirrors Hero mock card */}
//             <div className="relative mx-auto w-full max-w-md lg:max-w-none">
//               <div className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-primary/10">
//                 <div className="mb-4 flex items-center gap-2">
//                   <div className="h-3 w-3 rounded-full bg-destructive" />
//                   <div className="h-3 w-3 rounded-full bg-yellow-500" />
//                   <div className="h-3 w-3 rounded-full bg-primary" />
//                   <span className="ml-2 text-xs font-medium text-muted-foreground">Company Facts</span>
//                 </div>

//                 <div className="space-y-0 divide-y divide-border/40">
//                   {facts.map((fact) => (
//                     <div key={fact.label} className="flex items-center justify-between py-3">
//                       <span className="text-sm text-muted-foreground">{fact.label}</span>
//                       <span className="text-right text-sm font-semibold text-foreground">{fact.value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Press Coverage ───────────────────────────── */}
//       <section className="border-t border-border/50 py-16 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center mb-12">
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
//               In the News
//             </div>
//             <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//               Recent Coverage
//             </h2>
//             <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
//               A selection of recent press mentions and editorial features from
//               across Pakistani media.
//             </p>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {pressHighlights.map((item) => (
//               <div
//                 key={item.outlet + item.date}
//                 className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
//               >
//                 <div className="flex items-center gap-3 border-b border-border/50 px-5 py-4">
//                   {/* Outlet logo placeholder */}
//                   <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white ${item.logoColor}`}>
//                     {item.logo}
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-foreground">{item.outlet}</p>
//                     <p className="text-xs text-muted-foreground">{item.date}</p>
//                   </div>
//                   <span className="ml-auto rounded-full border border-accent/20 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
//                     {item.category}
//                   </span>
//                 </div>
//                 <div className="flex flex-1 flex-col p-5">
//                   <h3 className="mb-3 font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
//                     {item.headline}
//                   </h3>
//                   <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
//                     {item.summary}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Brand Assets ─────────────────────────────── */}
//       <section id="brand-assets" className="scroll-mt-8 border-t border-border/50 py-16 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center mb-12">
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
//               Brand Assets
//             </div>
//             <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//               Media Kit
//             </h2>
//             <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
//               All assets below are cleared for editorial and press use. Please
//               follow our brand guidelines when reproducing logos or colours.
//             </p>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {brandAssets.map((asset) => (
//               <div
//                 key={asset.title}
//                 className="group overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
//               >
//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 transition-colors group-hover:from-primary/20 group-hover:to-accent/20">
//                   {asset.icon}
//                 </div>
//                 <h3 className="mb-2 font-semibold text-foreground">{asset.title}</h3>
//                 <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{asset.description}</p>
//                 <div className="mb-5 flex flex-wrap gap-2">
//                   {asset.formats.map((fmt) => (
//                     <span key={fmt} className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground">
//                       {fmt}
//                     </span>
//                   ))}
//                 </div>
//                 <a
//                   href="mailto:press@energycalc.com?subject=Brand Asset Request"
//                   className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/5"
//                 >
//                   Request Asset
//                   <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                     <polyline points="7 10 12 15 17 10" />
//                     <line x1="12" y1="15" x2="12" y2="3" />
//                   </svg>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Press Contacts ───────────────────────────── */}
//       <section className="border-t border-border/50 py-16 sm:py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center mb-12">
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
//               Get in Touch
//             </div>
//             <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//               Press Contacts
//             </h2>
//             <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
//               We respond to all media enquiries within 24 hours. For urgent
//               requests please mark your email subject line{" "}
//               <span className="font-medium text-foreground">URGENT: Press</span>.
//             </p>
//           </div>

//           <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
//             {contacts.map((c) => (
//               <a
//                 key={c.label}
//                 href={c.href}
//                 target={c.href.startsWith("http") ? "_blank" : undefined}
//                 rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
//                 className="group flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-border/50 bg-card p-6 text-center shadow-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
//               >
//                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 transition-colors group-hover:from-primary/20 group-hover:to-accent/20">
//                   {c.icon}
//                 </div>
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.label}</p>
//                   <p className="mt-1 text-sm font-medium text-primary group-hover:underline underline-offset-4">{c.value}</p>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA ─────────────────────────────────────── */}
//       <section className="py-10 sm:py-16">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-2xl shadow-primary/10 sm:p-10">
//             <div className="mb-4 flex items-center gap-2">
//               <div className="h-3 w-3 rounded-full bg-destructive" />
//               <div className="h-3 w-3 rounded-full bg-yellow-500" />
//               <div className="h-3 w-3 rounded-full bg-primary" />
//             </div>
//             <div className="rounded-xl bg-gradient-to-r from-primary to-accent p-6 sm:p-8">
//               <p className="text-sm font-medium text-primary-foreground/80">Working on a Story?</p>
//               <p className="mt-2 text-2xl font-bold text-primary-foreground sm:text-3xl">
//                 We'd love to help you get it right.
//               </p>
//               <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
//                 Whether you need a founder quote, verified statistics, a product
//                 walkthrough, or a custom data pull for your article, our press
//                 team is standing by. Reach out and let us know what you need.
//               </p>
//               <div className="mt-6">
//                 <a
//                   href="mailto:press@energycalc.com"
//                   className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/20 px-5 py-2.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-white/30"
//                 >
//                   press@energycalc.com
//                   <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//                     <polyline points="22,6 12,13 2,6" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </main>
//   );
// }












import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata = {
  title: "Press – Smart Energy Management",
  description:
    "Press resources, media coverage, and brand assets for our electricity bill prediction platform.",
};

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const stats = [
  { value: "10K+", label: "Monthly Users" },
  { value: "98%", label: "Estimate Accuracy" },
  { value: "Rs.500K+", label: "Saved by Users" },
  { value: "2024", label: "Founded" },
];

const pressHighlights = [
  {
    outlet: "Dawn",
    date: "March 12, 2025",
    category: "Technology",
    headline: "Pakistani startup helps households decode rising electricity bills",
    summary:
      "As electricity prices surge across Pakistan, one platform is giving consumers a simple way to understand and forecast their monthly costs using appliance-level data.",
    logo: "D",
    logoColor: "bg-blue-600",
  },
  {
    outlet: "The News International",
    date: "February 3, 2025",
    category: "Energy",
    headline: "Free online tool lets Pakistanis calculate electricity bills before they arrive",
    summary:
      "A new web-based calculator is gaining traction among Pakistani homeowners and renters who want to anticipate their electricity expenses and make smarter appliance choices.",
    logo: "N",
    logoColor: "bg-red-600",
  },
  {
    outlet: "TechJuice",
    date: "January 18, 2025",
    category: "Startup",
    headline: "Energy calculator startup hits 10,000 users in three months",
    summary:
      "The platform, which lets users model their electricity consumption appliance by appliance, has grown rapidly on the back of viral social sharing among cost-conscious households.",
    logo: "TJ",
    logoColor: "bg-primary",
  },
  {
    outlet: "ProPakistani",
    date: "December 5, 2024",
    category: "Consumer Tech",
    headline: "How one team is making electricity tariff slabs understandable for everyone",
    summary:
      "Pakistan's complex tiered electricity billing system confuses millions of consumers. This platform breaks it down into plain language and shows users exactly where their money goes.",
    logo: "PP",
    logoColor: "bg-emerald-600",
  },
];

const brandAssets = [
  {
    icon: (
      <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: "Logo Pack",
    description: "Primary logo, wordmark, and icon in SVG, PNG, and WebP formats across light and dark backgrounds.",
    formats: ["SVG", "PNG", "WebP"],
  },
  {
    icon: (
      <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Colour Palette",
    description: "Our brand colour system including primary, accent, and neutral swatches with hex, RGB, and HSL values.",
    formats: ["PDF", "ASE", "HEX"],
  },
  {
    icon: (
      <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Product Screenshots",
    description: "High-resolution screenshots of the calculator interface, results view, and analytics charts for editorial coverage.",
    formats: ["PNG", "JPEG"],
  },
];

const facts = [
  { label: "Founded", value: "2024" },
  { label: "Headquarters", value: "Lahore, Pakistan" },
  { label: "Product", value: "Smart Bill Predictor" },
  { label: "Audience", value: "Residential & Commercial" },
  { label: "Calculations", value: "NEPRA Tariff Based" },
  { label: "Total Savings", value: "Rs. 500,000+" },
];

const contacts = [
  {
    icon: (
      <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Press & Media",
    value: "press@smartenergy.pk",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Partnerships",
    value: "hello@smartenergy.pk",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
    label: "Social Media",
    value: "@SmartEnergyPK",
  },
];

// ─────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────

export default function PressPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 min-h-screen">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <Header />

      {/* ── Hero Banner ─────────────────────────────── */}
      <section className="border-b border-border/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Media Resource Center
            </div>

            <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Verified Assets for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Journalists
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Essential resources for covering our platform's impact on energy transparency. 
              Access brand assets, verified statistics, and our latest media highlights below.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto cursor-default">
                Request Media Access
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-primary/5 sm:w-auto cursor-default">
                View Brand Kit
              </span>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                  {i < stats.length - 1 && <div className="h-8 w-px bg-border" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Company Overview ─────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                About The Platform
              </div>
              <h2 className="mb-6 text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  We are a Lahore-based technology team on a mission to make electricity
                  billing transparent and understandable for every household in Pakistan.
                  Our free calculator lets users model their monthly consumption appliance 
                  by appliance using current NEPRA-approved tariff slabs.
                </p>
                <p className="leading-relaxed">
                  Founded in 2024, we saw a clear gap: millions of households had no 
                  reliable way to forecast their bills or understand how individual 
                  appliances contributed to their total costs.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground cursor-default">
                    Fact Sheet Available
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground cursor-default">
                    Boilerplate Copy
                  </span>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-primary/10">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-primary" />
                  <span className="ml-2 text-xs font-medium text-muted-foreground">Verified Data</span>
                </div>
                <div className="space-y-0 divide-y divide-border/40">
                  {facts.map((fact) => (
                    <div key={fact.label} className="flex items-center justify-between py-3">
                      <span className="text-sm text-muted-foreground">{fact.label}</span>
                      <span className="text-right text-sm font-semibold text-foreground">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Press Coverage ───────────────────────────── */}
      <section className="border-t border-border/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Recent Coverage
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A selection of press mentions from leading Pakistani media outlets.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {pressHighlights.map((item) => (
              <div key={item.outlet} className="flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
                <div className="flex items-center gap-3 border-b border-border/50 px-5 py-4">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white ${item.logoColor}`}>
                    {item.logo}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.outlet}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-3 font-semibold leading-snug text-foreground">{item.headline}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Assets ─────────────────────────────── */}
      <section className="border-t border-border/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Brand Assets
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Download high-resolution logos and interface screenshots for editorial use.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brandAssets.map((asset) => (
              <div key={asset.title} className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  {asset.icon}
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{asset.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{asset.description}</p>
                <div className="flex flex-wrap gap-2">
                  {asset.formats.map((fmt) => (
                    <span key={fmt} className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground">
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press Contacts ───────────────────────────── */}
      <section className="border-t border-border/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Official Channels
            </h2>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
            {contacts.map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.label}</p>
                  <p className="mt-1 text-sm font-medium text-primary">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer-style CTA ─────────────────────────────── */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-2xl shadow-primary/10 sm:p-10">
            <div className="rounded-xl bg-gradient-to-r from-primary to-accent p-6 sm:p-8">
              <p className="text-sm font-medium text-primary-foreground/80">Press Support</p>
              <p className="mt-2 text-2xl font-bold text-primary-foreground sm:text-3xl">
                Need a custom data pull or founder quote?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                Our team provides verified electricity usage data and expert commentary 
                for energy-related stories. Reach out via our official media channels 
                for assistance with your article.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}