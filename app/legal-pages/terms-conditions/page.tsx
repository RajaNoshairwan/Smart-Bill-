import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata = {
  title: "Terms & Conditions – Smart Energy Management",
  description:
    "Read the terms and conditions governing your use of our electricity bill prediction platform.",
};

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const highlights = [
  {
    icon: (
      <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Free to Use",
    description:
      "Our electricity calculator is provided free of charge for personal, non-commercial use. No registration is required to access core features.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Your Responsibility",
    description:
      "You are responsible for the accuracy of appliance data you enter and for verifying results with your utility provider before making financial decisions.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    title: "No Warranties",
    description:
      "The platform is provided 'as is' without warranties of any kind. We do not guarantee uninterrupted access, error-free results, or fitness for a particular purpose.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Intellectual Property",
    description:
      "All content, design, code, and branding on this website are our exclusive property. You may not copy, reproduce, or redistribute any part without written permission.",
  },
];

const sections = [
  {
    id: "acceptance",
    num: "01",
    title: "Acceptance of Terms",
    content:
      "By accessing or using this website and its electricity bill estimation tool, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree to these terms, please discontinue use of this website immediately. These terms apply to all visitors, users, and anyone who accesses or uses our service.",
  },
  {
    id: "use-of-service",
    num: "02",
    title: "Use of the Service",
    content:
      "You may use our electricity bill calculator for personal, non-commercial purposes only. You agree not to use the service in any way that is unlawful, harmful, or disruptive to other users or the platform. Specifically, you may not attempt to gain unauthorised access to any part of the website, introduce malicious code or software, scrape or harvest data in an automated manner, impersonate any person or entity, or use the service for any fraudulent or deceptive purpose.",
  },
  {
    id: "accuracy-of-information",
    num: "03",
    title: "Accuracy of Information",
    content:
      "We make reasonable efforts to ensure that the information, tariff rates, and appliance wattage values used in our calculator are accurate and current. However, we do not warrant the completeness, accuracy, or timeliness of any information on this site. Electricity tariffs are subject to change by regulatory authorities and utility companies at any time. You acknowledge that all outputs from our calculator are estimates and should not be relied upon as official or legally binding figures.",
  },
  {
    id: "intellectual-property",
    num: "04",
    title: "Intellectual Property Rights",
    content:
      "All content on this website — including but not limited to text, graphics, logos, icons, images, design layouts, code, and software — is the exclusive property of this website and is protected by applicable copyright, trademark, and intellectual property laws. You are granted a limited, non-exclusive, non-transferable licence to access and use the website for personal purposes only. You may not reproduce, distribute, modify, create derivative works of, publicly display, or commercially exploit any content without our prior written consent.",
  },
  {
    id: "third-party-links",
    num: "05",
    title: "Third-Party Links & Advertising",
    content:
      "Our website may contain links to third-party websites and display advertisements served by Google AdSense and other advertising networks. These links and advertisements are provided for your convenience and information only. We have no control over the content, privacy practices, or policies of any third-party site. The inclusion of any link or advertisement does not imply our endorsement or recommendation. We encourage you to review the terms and privacy policies of any third-party sites you visit.",
  },
  {
    id: "limitation-of-liability",
    num: "06",
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or its calculator. This includes but is not limited to damages for loss of profits, loss of data, financial decisions made on the basis of calculator estimates, or any other commercial or personal losses, even if we have been advised of the possibility of such damages.",
  },
  {
    id: "indemnification",
    num: "07",
    title: "Indemnification",
    content:
      "You agree to indemnify, defend, and hold harmless this website, its owners, operators, employees, and affiliates from and against any claims, liabilities, damages, losses, and expenses — including reasonable legal fees — arising out of or in any way connected with your access to or use of the service, your violation of these Terms & Conditions, or your infringement of any third-party rights.",
  },
  {
    id: "modifications",
    num: "08",
    title: "Modifications to the Service & Terms",
    content:
      "We reserve the right to modify, suspend, or discontinue any part of the service at any time without prior notice or liability. We also reserve the right to update these Terms & Conditions at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website following the posting of revised terms constitutes your acceptance of those changes. It is your responsibility to review these terms periodically.",
  },
  {
    id: "governing-law",
    num: "09",
    title: "Governing Law & Jurisdiction",
    content:
      "These Terms & Conditions shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Pakistan. If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.",
  },
  {
    id: "contact",
    num: "10",
    title: "Contact Us",
    content:
      "If you have any questions, concerns, or feedback regarding these Terms & Conditions, please contact us at legal@energycalc.com. We will endeavour to respond to all legitimate enquiries within 30 business days.",
  },
];

// ─────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────

export default function TermsAndConditionsPage() {
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Legal Agreement
            </div>

            <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Terms &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Please read these terms carefully before using our electricity
              bill prediction platform. By continuing to use this service you
              agree to be bound by the conditions set out below.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Last updated: June 1, 2025
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Effective: June 1, 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">

            {/* Sticky Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-8 overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg shadow-primary/5">
                <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-destructive" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="ml-2 text-xs font-medium text-muted-foreground">Contents</span>
                </div>
                <nav className="p-4">
                  <ol className="space-y-1">
                    {sections.map((s, idx) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-secondary text-xs font-semibold text-foreground group-hover:bg-primary/20 group-hover:text-primary">
                            {idx + 1}
                          </span>
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <div className="space-y-10">

              {/* Agreement notice */}
              <div className="overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">By Using This Site, You Agree to These Terms</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      These Terms & Conditions constitute a legally binding agreement between you and
                      this website. Continued use of our electricity bill calculator and related
                      features indicates your full acceptance of all terms listed below.
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlights grid – mirrors Features layout */}
              <div>
                <h2 className="mb-6 text-xl font-bold text-foreground">Key Terms at a Glance</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {highlights.map((card) => (
                    <div
                      key={card.title}
                      className="group overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 transition-colors group-hover:from-primary/20 group-hover:to-accent/20">
                        {card.icon}
                      </div>
                      <h3 className="mb-2 font-semibold text-foreground">{card.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sections */}
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-8 overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-shadow hover:shadow-md hover:shadow-primary/5"
                >
                  <div className="flex items-center gap-4 border-b border-border/50 px-6 py-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                      <span className="text-xs font-bold text-primary">{section.num}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">{section.content}</p>
                  </div>
                </div>
              ))}

              {/* Gradient bill card – mirrors Hero mock */}
              <div className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-primary/10">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <div className="rounded-lg bg-gradient-to-r from-primary to-accent p-5">
                  <p className="text-sm font-medium text-primary-foreground/80">Agreement Summary</p>
                  <p className="mt-2 text-base font-semibold text-primary-foreground">
                    By using this platform you confirm you are 13 years of age or older, that you
                    accept these terms in full, and that you understand all calculator outputs are
                    estimates for informational purposes only.
                  </p>
                </div>
              </div>

              {/* Bottom stat row */}
              <div className="overflow-hidden rounded-2xl border border-border/50 bg-card px-8 py-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">10</div>
                    <div className="text-sm text-muted-foreground">Clauses</div>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">Free</div>
                    <div className="text-sm text-muted-foreground">Personal Use</div>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">PK Law</div>
                    <div className="text-sm text-muted-foreground">Governing Law</div>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">30d</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}