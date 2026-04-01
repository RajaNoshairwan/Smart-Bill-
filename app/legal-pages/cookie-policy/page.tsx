import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata = {
  title: "Cookie Policy – Smart Energy Management",
  description:
    "Learn how we use cookies and similar tracking technologies on our electricity bill prediction platform.",
};

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const cookieTypes = [
  {
    name: "Strictly Necessary",
    badge: "Always Active",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    description:
      "These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You may not disable these.",
    examples: ["Session management", "Security tokens", "Load balancing"],
  },
  {
    name: "Performance & Analytics",
    badge: "Optional",
    badgeColor: "bg-accent/10 text-accent border-accent/20",
    description:
      "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our energy calculator and user experience.",
    examples: ["Google Analytics", "Page view tracking", "Error reporting"],
  },
  {
    name: "Advertising (AdSense)",
    badge: "Third-Party",
    badgeColor: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    description:
      "Google AdSense uses cookies to serve personalised advertisements based on your browsing history. These cookies track visits across websites to display relevant ads and measure ad performance.",
    examples: ["DoubleClick cookie", "Interest-based ads", "Ad frequency capping"],
  },
  {
    name: "Functional",
    badge: "Optional",
    badgeColor: "bg-accent/10 text-accent border-accent/20",
    description:
      "These cookies allow the website to remember choices you make (such as your preferred units or saved appliance lists) and provide enhanced, personalised features.",
    examples: ["User preferences", "Saved calculations", "Language settings"],
  },
];

const cookieTable = [
  {
    name: "_ga",
    provider: "Google Analytics",
    purpose: "Distinguishes unique users by assigning a randomly generated number as a client identifier.",
    expiry: "2 years",
    type: "Analytics",
  },
  {
    name: "_gid",
    provider: "Google Analytics",
    purpose: "Stores and updates a unique value for each page visited.",
    expiry: "24 hours",
    type: "Analytics",
  },
  {
    name: "_gat",
    provider: "Google Analytics",
    purpose: "Used to throttle request rate to Google Analytics.",
    expiry: "1 minute",
    type: "Analytics",
  },
  {
    name: "__gads",
    provider: "Google AdSense",
    purpose: "Used to register what ads have been displayed to the user and to measure ad performance.",
    expiry: "13 months",
    type: "Advertising",
  },
  {
    name: "IDE",
    provider: "Google DoubleClick",
    purpose: "Used by Google DoubleClick to register and report user actions after viewing or clicking an ad.",
    expiry: "1 year",
    type: "Advertising",
  },
  {
    name: "test_cookie",
    provider: "Google",
    purpose: "Checks if the user's browser supports cookies.",
    expiry: "15 minutes",
    type: "Necessary",
  },
  {
    name: "cookieconsent",
    provider: "This website",
    purpose: "Stores your cookie consent preferences so you are not asked repeatedly.",
    expiry: "1 year",
    type: "Necessary",
  },
];

const sections = [
  {
    id: "what-are-cookies",
    num: "01",
    title: "What Are Cookies?",
    content:
      "Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently, to remember your preferences, and to provide information to website owners. Cookies do not contain personally identifiable information but can be linked back to you when combined with other data.",
  },
  {
    id: "how-we-use-cookies",
    num: "02",
    title: "How We Use Cookies",
    content:
      "We use cookies and similar tracking technologies to operate our electricity bill prediction platform, remember your settings and appliance data, analyse how our calculator is used, improve our services, and display relevant advertisements through Google AdSense. We do not use cookies to collect personally identifiable information without your explicit consent.",
  },
  {
    id: "third-party-cookies",
    num: "03",
    title: "Third-Party Cookies & Google AdSense",
    content:
      "We use Google AdSense to serve advertisements on our website. Google AdSense, and third-party vendors including Google, use cookies such as the DoubleClick cookie to serve ads based on your prior visits to our website and other websites. These third-party cookies are governed by Google's Privacy Policy. You can opt out of personalised advertising by visiting Google Ad Settings at www.google.com/settings/ads, or by visiting www.aboutads.info to opt out of third-party vendor cookies for personalised advertising.",
  },
  {
    id: "managing-cookies",
    num: "04",
    title: "Managing & Disabling Cookies",
    content:
      "Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies, to notify you when a cookie is set, or to delete cookies after each session. Please note that disabling certain cookies may affect the functionality of our electricity calculator and other features. Refer to your browser's help documentation for instructions on managing cookies.",
  },
  {
    id: "cookie-consent",
    num: "05",
    title: "Your Consent",
    content:
      "By continuing to use our website after being presented with our cookie notice, you consent to our use of cookies as described in this policy. You may withdraw your consent at any time by adjusting your browser settings or using our cookie preference centre. Withdrawing consent will not affect the lawfulness of any processing carried out before withdrawal.",
  },
  {
    id: "updates",
    num: "06",
    title: "Updates to This Policy",
    content:
      "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We will notify you of significant changes by posting the updated policy on this page with a revised effective date. We encourage you to review this page periodically.",
  },
  {
    id: "contact",
    num: "07",
    title: "Contact Us",
    content:
      "If you have any questions about our use of cookies or this Cookie Policy, please contact us at privacy@energycalc.com. We aim to respond to all enquiries within 30 days.",
  },
];

// ─────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────

export default function CookiePolicyPage() {
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
              {/* Cookie icon */}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                <path d="M8.5 8.5v.01" />
                <path d="M16 15.5v.01" />
                <path d="M12 12v.01" />
              </svg>
              Cookie Policy
            </div>

            <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              How We Use{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cookies
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We use cookies to keep our energy calculator running smoothly,
              remember your preferences, and serve relevant advertisements. This
              policy explains exactly what we set and why.
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
                    <li>
                      <a
                        href="#cookie-types"
                        className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-secondary text-xs font-semibold text-foreground group-hover:bg-primary/20 group-hover:text-primary">
                          ★
                        </span>
                        Cookie Reference Table
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <div className="space-y-10">

              {/* AdSense notice card */}
              <div className="overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Google AdSense Disclosure</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      This site uses Google AdSense. Third-party vendors, including Google, use cookies to serve ads based on prior visits to this or other websites. Opt out at{" "}
                      <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline-offset-4 hover:underline">
                        google.com/settings/ads
                      </a>{" "}
                      or{" "}
                      <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline-offset-4 hover:underline">
                        aboutads.info
                      </a>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookie type cards – 2-col grid */}
              <div id="cookie-types" className="scroll-mt-8">
                <h2 className="mb-6 text-xl font-bold text-foreground">Types of Cookies We Use</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {cookieTypes.map((ct) => (
                    <div
                      key={ct.name}
                      className="group overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 transition-colors group-hover:from-primary/20 group-hover:to-accent/20">
                          {/* Generic cookie chip icon */}
                          <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <path d="M8 21h8M12 17v4" />
                          </svg>
                        </div>
                        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${ct.badgeColor}`}>
                          {ct.badge}
                        </span>
                      </div>
                      <h3 className="mb-2 font-semibold text-foreground">{ct.name}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{ct.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {ct.examples.map((ex) => (
                          <span key={ex} className="rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policy sections */}
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

              {/* Cookie reference table */}
              <div id="cookie-reference" className="scroll-mt-8 overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
                <div className="flex items-center gap-2 border-b border-border/50 px-6 py-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                    <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3h18v18H3z" /><path d="M3 9h18M3 15h18M9 3v18" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">Cookie Reference Table</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/50 bg-secondary/30">
                        <th className="px-4 py-3 text-left font-semibold text-foreground">Cookie</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground">Provider</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground">Purpose</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground">Expiry</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground">Type</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/30">
                      {cookieTable.map((row) => (
                        <tr key={row.name} className="transition-colors hover:bg-primary/5">
                          <td className="px-4 py-3 font-mono text-xs font-medium text-primary">{row.name}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.provider}</td>
                          <td className="px-4 py-3 text-muted-foreground">{row.purpose}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">{row.expiry}</td>
                          <td className="px-4 py-3">
                            <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${
                              row.type === "Necessary"
                                ? "border-primary/20 bg-primary/10 text-primary"
                                : row.type === "Advertising"
                                ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-600"
                                : "border-accent/20 bg-accent/10 text-accent"
                            }`}>
                              {row.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bottom stat row */}
              <div className="overflow-hidden rounded-2xl border border-border/50 bg-card px-8 py-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">7</div>
                    <div className="text-sm text-muted-foreground">Cookies Tracked</div>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">2</div>
                    <div className="text-sm text-muted-foreground">Always Necessary</div>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">Opt-Out</div>
                    <div className="text-sm text-muted-foreground">Ad Cookies</div>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">GDPR</div>
                    <div className="text-sm text-muted-foreground">Compliant</div>
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