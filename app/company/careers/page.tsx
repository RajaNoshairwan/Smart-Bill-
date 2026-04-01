// import { Footer } from "@/components/footer";
// import { Header } from "@/components/header";

// export const metadata = {
//   title: "Careers – Smart Energy Management",
//   description:
//     "Join our team and help build the future of smart energy management. Explore open roles at our electricity bill prediction platform.",
// };

// // ─────────────────────────────────────────────
// // Data
// // ─────────────────────────────────────────────

// const perks = [
//   {
//     icon: (
//       <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="10" />
//         <polyline points="12 6 12 12 16 14" />
//       </svg>
//     ),
//     title: "Flexible Hours",
//     description:
//       "We believe great work happens on your schedule. Set your own hours and build a routine that fits your life.",
//   },
//   {
//     icon: (
//       <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//         <polyline points="9 22 9 12 15 12 15 22" />
//       </svg>
//     ),
//     title: "Remote-First",
//     description:
//       "Work from anywhere in Pakistan or abroad. Our team is distributed and fully set up for remote collaboration.",
//   },
//   {
//     icon: (
//       <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
//         <path d="M6 12v5c3 3 9 3 12 0v-5" />
//       </svg>
//     ),
//     title: "Learning Budget",
//     description:
//       "Every team member gets an annual learning budget for courses, books, and conferences of their choice.",
//   },
//   {
//     icon: (
//       <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
//         <polyline points="17 6 23 6 23 12" />
//       </svg>
//     ),
//     title: "Impact-Driven Work",
//     description:
//       "Your code and ideas directly help thousands of Pakistani households save money on their electricity bills.",
//   },
//   {
//     icon: (
//       <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//         <circle cx="9" cy="7" r="4" />
//         <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//         <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//       </svg>
//     ),
//     title: "Small, Tight-Knit Team",
//     description:
//       "No bureaucracy. Work directly with founders, ship fast, and see the results of your work immediately.",
//   },
//   {
//     icon: (
//       <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <line x1="12" y1="1" x2="12" y2="23" />
//         <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//       </svg>
//     ),
//     title: "Competitive Pay",
//     description:
//       "We offer market-competitive salaries with performance bonuses and equity participation for early team members.",
//   },
// ];

// const openRoles = [
//   {
//     id: "frontend-engineer",
//     title: "Frontend Engineer",
//     type: "Full-Time",
//     location: "Remote (Pakistan)",
//     department: "Engineering",
//     badge: "bg-primary/10 text-primary border-primary/20",
//     description:
//       "Build and improve our Next.js-based calculator interface. You will own the user-facing experience — from interactive appliance inputs to animated bill breakdowns and responsive mobile layouts.",
//     requirements: [
//       "2+ years experience with React / Next.js",
//       "Strong proficiency in Tailwind CSS",
//       "Experience with data visualisation (Recharts, Chart.js, or similar)",
//       "Attention to UI detail and design sensibility",
//       "Familiarity with shadcn/ui or headless component libraries",
//     ],
//     nice: ["TypeScript experience", "Interest in energy or sustainability tech"],
//   },
//   {
//     id: "backend-engineer",
//     title: "Backend Engineer",
//     type: "Full-Time",
//     location: "Remote (Pakistan)",
//     department: "Engineering",
//     badge: "bg-primary/10 text-primary border-primary/20",
//     description:
//       "Design and maintain the APIs, tariff-rate data pipelines, and calculation engine that power our platform. You will work on keeping our electricity slab data accurate and our infrastructure reliable.",
//     requirements: [
//       "2+ years experience with Node.js or Python backend development",
//       "Experience building and maintaining REST APIs",
//       "Comfortable with databases (PostgreSQL or similar)",
//       "Understanding of data pipelines and scheduled jobs",
//     ],
//     nice: ["Experience with web scraping or public data ingestion", "Knowledge of Pakistani electricity tariff structures"],
//   },
//   {
//     id: "content-seo",
//     title: "Content Writer & SEO Specialist",
//     type: "Part-Time / Freelance",
//     location: "Remote",
//     department: "Marketing",
//     badge: "bg-accent/10 text-accent border-accent/20",
//     description:
//       "Create helpful, AdSense-friendly content around energy saving, electricity tariffs, and appliance efficiency. Grow our organic traffic by targeting high-intent keywords relevant to Pakistani energy consumers.",
//     requirements: [
//       "Proven experience in SEO content writing",
//       "Understanding of on-page SEO best practices",
//       "Ability to write clearly for a general audience",
//       "Familiarity with Google Search Console and analytics tools",
//     ],
//     nice: ["Background in energy, sustainability, or consumer finance", "Experience with AdSense-optimised content strategies"],
//   },
//   {
//     id: "data-analyst",
//     title: "Data Analyst",
//     type: "Part-Time",
//     location: "Remote (Pakistan)",
//     department: "Data",
//     badge: "bg-accent/10 text-accent border-accent/20",
//     description:
//       "Help us keep our electricity tariff and appliance wattage data accurate, up to date, and well-structured. Analyse user behaviour to guide product improvements and identify the most impactful calculator features.",
//     requirements: [
//       "Experience with data analysis (Python, R, or Excel)",
//       "Comfortable working with spreadsheets and structured datasets",
//       "Strong attention to detail and data quality",
//       "Ability to clearly communicate findings",
//     ],
//     nice: ["Experience with public sector or utility data in Pakistan", "Familiarity with Google Analytics or Looker Studio"],
//   },
// ];

// const values = [
//   { label: "Transparency", detail: "We say what we mean, share context openly, and have no hidden agendas." },
//   { label: "Ownership", detail: "Everyone on the team acts like an owner — you set the bar for your own work." },
//   { label: "User First", detail: "Every decision starts with the question: does this make life better for our users?" },
//   { label: "Simplicity", detail: "We favour simple, elegant solutions over complexity for its own sake." },
// ];

// const steps = [
//   { num: "01", title: "Apply", detail: "Send us your CV and a short note on why this role and mission interest you." },
//   { num: "02", title: "Intro Call", detail: "A relaxed 30-minute video call with a founder to discuss your background and goals." },
//   { num: "03", title: "Skills Task", detail: "A short, paid take-home task relevant to the role — no marathon whiteboard sessions." },
//   { num: "04", title: "Final Chat", detail: "Meet the wider team and ask us anything. We make decisions fast — usually within a week." },
// ];

// // ─────────────────────────────────────────────
// // Page Component
// // ─────────────────────────────────────────────

// export default function CareersPage() {
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
//                 <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//                 <circle cx="12" cy="7" r="4" />
//               </svg>
//               We're Hiring
//             </div>

//             <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
//               Help Us Power{" "}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Smarter Homes
//               </span>
//             </h1>

//             <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
//               We're a small, focused team building tools that help Pakistani
//               households understand and reduce their electricity costs. If you
//               care about real-world impact and love working on meaningful
//               products, we'd love to hear from you.
//             </p>

//             <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
//               <a
//                 href="#open-roles"
//                 className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
//               >
//                 View Open Roles
//                 <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <line x1="5" y1="12" x2="19" y2="12" />
//                   <polyline points="12 5 19 12 12 19" />
//                 </svg>
//               </a>
//               <a
//                 href="mailto:careers@energycalc.com"
//                 className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-primary/5 sm:w-auto"
//               >
//                 Send a Speculative CV
//               </a>
//             </div>

//             {/* Stats row */}
//             <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-foreground">4</div>
//                 <div className="text-sm text-muted-foreground">Open Roles</div>
//               </div>
//               <div className="h-8 w-px bg-border" />
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-foreground">100%</div>
//                 <div className="text-sm text-muted-foreground">Remote</div>
//               </div>
//               <div className="h-8 w-px bg-border" />
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-foreground">10K+</div>
//                 <div className="text-sm text-muted-foreground">Users Served</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Perks ───────────────────────────────────── */}
//       <section className="py-16 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center">
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
//               Why Join Us
//             </div>
//             <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//               Built for People Who Build Things
//             </h2>
//             <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
//               We keep things lean, move fast, and make sure everyone on the
//               team has what they need to do their best work.
//             </p>
//           </div>

//           <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {perks.map((perk) => (
//               <div
//                 key={perk.title}
//                 className="group overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
//               >
//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 transition-colors group-hover:from-primary/20 group-hover:to-accent/20">
//                   {perk.icon}
//                 </div>
//                 <h3 className="mb-2 font-semibold text-foreground">{perk.title}</h3>
//                 <p className="text-sm leading-relaxed text-muted-foreground">{perk.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Values ──────────────────────────────────── */}
//       <section className="border-y border-border/50 py-16 sm:py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center mb-12">
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
//               Our Values
//             </div>
//             <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//               What We Stand For
//             </h2>
//           </div>
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {values.map((v, idx) => (
//               <div key={v.label} className="overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5">
//                 <div className="mb-3 flex items-center gap-3">
//                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
//                     <span className="text-xs font-bold text-primary">{String(idx + 1).padStart(2, "0")}</span>
//                   </div>
//                   <h3 className="font-semibold text-foreground">{v.label}</h3>
//                 </div>
//                 <p className="text-sm leading-relaxed text-muted-foreground">{v.detail}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Open Roles ──────────────────────────────── */}
//       <section id="open-roles" className="scroll-mt-8 py-16 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center mb-12">
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
//               Open Roles
//             </div>
//             <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//               Find Your Place on the Team
//             </h2>
//             <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
//               We hire for attitude and aptitude. Relevant experience helps, but
//               a strong portfolio and genuine curiosity matter just as much.
//             </p>
//           </div>

//           <div className="space-y-6">
//             {openRoles.map((role) => (
//               <div
//                 key={role.id}
//                 id={role.id}
//                 className="scroll-mt-8 overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
//               >
//                 {/* Role header */}
//                 <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/50 px-6 py-5">
//                   <div className="flex items-center gap-4">
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
//                       <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <rect x="2" y="7" width="20" height="14" rx="2" />
//                         <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
//                       <p className="text-sm text-muted-foreground">{role.department}</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-wrap items-center gap-2">
//                     <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${role.badge}`}>
//                       {role.type}
//                     </span>
//                     <span className="flex items-center gap-1 rounded-full border border-border/50 bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground">
//                       <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//                         <circle cx="12" cy="10" r="3" />
//                       </svg>
//                       {role.location}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Role body */}
//                 <div className="grid gap-6 px-6 py-6 lg:grid-cols-[1fr_auto]">
//                   <div className="space-y-5">
//                     <p className="text-sm leading-relaxed text-muted-foreground">{role.description}</p>

//                     <div>
//                       <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">Requirements</h4>
//                       <ul className="space-y-2">
//                         {role.requirements.map((req) => (
//                           <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
//                             <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                               <polyline points="20 6 9 17 4 12" />
//                             </svg>
//                             {req}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div>
//                       <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-accent">Nice to Have</h4>
//                       <ul className="space-y-2">
//                         {role.nice.map((n) => (
//                           <li key={n} className="flex items-start gap-2 text-sm text-muted-foreground">
//                             <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                               <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
//                             </svg>
//                             {n}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>

//                   <div className="flex items-end lg:items-start">
//                     <a
//                       href={`mailto:careers@energycalc.com?subject=Application – ${encodeURIComponent(role.title)}`}
//                       className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 lg:w-auto"
//                     >
//                       Apply Now
//                       <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <line x1="5" y1="12" x2="19" y2="12" />
//                         <polyline points="12 5 19 12 12 19" />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Hiring Process ──────────────────────────── */}
//       <section className="border-t border-border/50 py-16 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center mb-12">
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
//               Hiring Process
//             </div>
//             <h2 className="text-pretty text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//               Simple, Respectful, Fast
//             </h2>
//             <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
//               We respect your time. Our process is designed to be thorough but
//               never exhausting — four steps from application to decision.
//             </p>
//           </div>

//           <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {/* Connector line (desktop) */}
//             <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 lg:block" style={{ top: "2.5rem" }} />

//             {steps.map((step) => (
//               <div key={step.num} className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 text-center shadow-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
//                 <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20">
//                   <span className="text-sm font-bold text-primary-foreground">{step.num}</span>
//                 </div>
//                 <h3 className="mb-2 font-semibold text-foreground">{step.title}</h3>
//                 <p className="text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA ─────────────────────────────────────── */}
//       <section className="py-16 sm:py-20">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-2xl shadow-primary/10 sm:p-10">
//             <div className="mb-4 flex items-center gap-2">
//               <div className="h-3 w-3 rounded-full bg-destructive" />
//               <div className="h-3 w-3 rounded-full bg-yellow-500" />
//               <div className="h-3 w-3 rounded-full bg-primary" />
//             </div>
//             <div className="rounded-xl bg-gradient-to-r from-primary to-accent p-6 sm:p-8">
//               <p className="text-sm font-medium text-primary-foreground/80">Don't See the Right Role?</p>
//               <p className="mt-2 text-2xl font-bold text-primary-foreground sm:text-3xl">
//                 Send us a speculative application anyway.
//               </p>
//               <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
//                 We're always open to hearing from talented people who share our
//                 mission. Drop us your CV and tell us how you'd contribute — we
//                 read every email.
//               </p>
//               <div className="mt-6 flex flex-col gap-3 sm:flex-row">
//                 <a
//                   href="mailto:careers@energycalc.com"
//                   className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/20 px-5 py-2.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-white/30"
//                 >
//                   careers@energycalc.com
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
  title: "Careers – Smart Energy Management",
  description:
    "Explore future opportunities at our electricity bill prediction platform. Join our talent pool for smart energy management roles.",
};

// ─────────────────────────────────────────────
// Data Updates
// ─────────────────────────────────────────────

const openRoles = [
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    type: "Full-Time",
    location: "Remote (Pakistan)",
    department: "Engineering",
    badge: "bg-primary/10 text-primary border-primary/20",
    status: "Accepting CVs", // Neutral status
    description:
      "Build and improve our Next.js-based calculator interface. You will own the user-facing experience — from interactive appliance inputs to animated bill breakdowns and responsive mobile layouts.",
    requirements: [
      "2+ years experience with React / Next.js",
      "Strong proficiency in Tailwind CSS",
      "Experience with data visualisation (Recharts, Chart.js, or similar)",
      "Attention to UI detail and design sensibility",
      "Familiarity with shadcn/ui or headless component libraries",
    ],
    nice: ["TypeScript experience", "Interest in energy or sustainability tech"],
  },
  // ... apply similar status to other roles
];

// ─────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────

export default function CareersPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 min-h-screen">
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
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Talent Pool Open
            </div>

            <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Build the Future of{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Energy Tech
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We are currently focused on shipping our core features, but we are 
              always looking for brilliant minds to join our talent database for 2026 
              expansions. Submit your profile to be first in line when we scale.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Explore Roles
              </button>
              <button
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-primary/5 sm:w-auto"
              >
                Join Talent Database
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Open Roles Section (Updated Button) ──────────────── */}
      <section id="open-roles" className="scroll-mt-8 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {openRoles.map((role) => (
              <div
                key={role.id}
                className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/50 px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                      <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
                      <p className="text-sm text-muted-foreground">{role.department} • <span className="text-primary/80">Accepting Applications</span></p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 px-6 py-6 lg:grid-cols-[1fr_auto]">
                  <div className="space-y-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">{role.description}</p>
                    {/* ... (Keep Requirements and Nice to Have lists) */}
                  </div>

                  <div className="flex items-end lg:items-start">
                    {/* Updated non-clickable/neutral button */}
                    <button
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 px-5 py-2.5 text-sm font-semibold text-foreground/70 cursor-default lg:w-auto"
                    >
                      Future Opening
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (Modified to be safe) ──────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-gradient-to-r from-primary to-accent p-6 sm:p-8 text-center">
            <p className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Interested in future opportunities?
            </p>
            <p className="mt-3 text-sm text-primary-foreground/80">
              We review our talent pool every quarter as our user base grows.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}