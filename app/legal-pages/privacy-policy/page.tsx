import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata = {
  title: "Privacy Policy – Smart Energy Management",
  description:
    "Learn how we collect, use, and protect your personal information on our electricity bill prediction platform.",
};

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      {
        subtitle: "Information You Provide Directly",
        text: "When you use our electricity bill calculator, we may collect information you voluntarily provide, such as your email address if you choose to save or share your calculations, appliance usage data you enter into the calculator, and any feedback or support requests you submit.",
      },
      {
        subtitle: "Automatically Collected Information",
        text: "We automatically collect certain technical information when you visit our website, including your IP address, browser type and version, device type, operating system, pages visited and time spent on each page, referring URLs, and general geographic location (country/region level).",
      },
      {
        subtitle: "Cookies & Similar Technologies",
        text: "We use cookies and similar tracking technologies to enhance your experience, remember your preferences, analyze website traffic, and serve relevant advertisements through Google AdSense. You can control cookie settings through your browser preferences.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Operation",
        text: "We use collected information to provide, maintain, and improve our electricity bill prediction services, process and respond to your inquiries, and send you technical notices or support messages when necessary.",
      },
      {
        subtitle: "Analytics & Improvement",
        text: "We analyse usage patterns to understand how our calculator is used, identify areas for improvement, develop new features, and ensure the accuracy of our energy consumption models and bill predictions.",
      },
      {
        subtitle: "Advertising",
        text: "We partner with Google AdSense to display advertisements on our website. Google may use cookies and web beacons to collect data about your visits to this and other websites to serve personalised ads. This helps us keep the service free for all users.",
      },
    ],
  },
  {
    id: "google-adsense",
    title: "Google AdSense & Third-Party Advertising",
    content: [
      {
        subtitle: "About Google AdSense",
        text: "We use Google AdSense, a service provided by Google LLC, to display advertisements. Google AdSense uses cookies to serve ads based on your prior visits to this website and other websites across the internet.",
      },
      {
        subtitle: "Interest-Based Advertising",
        text: "Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the internet. You may opt out of personalised advertising by visiting Google's Ads Settings at www.google.com/settings/ads.",
      },
      {
        subtitle: "DoubleClick Cookie",
        text: "Google, as a third-party vendor, uses cookies known as DoubleClick cookies to serve ads on our site. Google's use of these cookies enables it to serve ads to our users based on their visit to our site and other sites on the internet.",
      },
      {
        subtitle: "Third-Party Vendors",
        text: "Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites. Users may opt out of third-party vendor use of cookies for personalised advertising by visiting www.aboutads.info.",
      },
    ],
  },
  {
    id: "data-sharing",
    title: "Information Sharing & Disclosure",
    content: [
      {
        subtitle: "We Do Not Sell Your Data",
        text: "We do not sell, trade, or rent your personal information to third parties for their marketing purposes. We only share your information in the limited circumstances described in this policy.",
      },
      {
        subtitle: "Service Providers",
        text: "We may share information with trusted service providers who assist us in operating our website, conducting our business, or serving our users, as long as those parties agree to keep this information confidential.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency), or to protect the rights, property, or safety of our users or the public.",
      },
    ],
  },
  {
    id: "data-security",
    title: "Data Security & Retention",
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
      },
      {
        subtitle: "Retention Period",
        text: "We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, comply with our legal obligations, resolve disputes, and enforce our agreements.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights & Choices",
    content: [
      {
        subtitle: "Access & Correction",
        text: "You have the right to access, update, or correct inaccuracies in your personal information. You can exercise these rights by contacting us using the information provided at the end of this policy.",
      },
      {
        subtitle: "Opt-Out of Personalised Ads",
        text: "You can opt out of personalised advertising by visiting Google's Ad Settings page, the Network Advertising Initiative opt-out page, or by adjusting your browser's cookie settings to refuse cookies.",
      },
      {
        subtitle: "Do Not Track",
        text: "Some browsers include a Do Not Track feature that signals to websites that you do not want to have your online activities tracked. Our website currently does not respond to Do Not Track signals, but we respect your right to privacy.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    content: [
      {
        subtitle: "Age Restriction",
        text: "Our service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: [
      {
        subtitle: "Policy Updates",
        text: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date. We encourage you to review this Privacy Policy periodically for any changes.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      {
        subtitle: "Get in Touch",
        text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at privacy@energycalc.com. We will respond to your inquiry within 30 days.",
      },
    ],
  },
];

const tableOfContents = sections.map((s) => ({ id: s.id, title: s.title }));

// ─────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 min-h-screen">
      {/* Decorative blobs – mirrors Hero */}
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
              {/* Shield icon inline SVG – no extra import needed */}
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Your Privacy Matters
            </div>

            <h1 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Privacy{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We are committed to protecting your personal information and your
              right to privacy. This policy explains how we collect, use, and
              safeguard your data when you use our energy bill prediction
              platform.
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
                {/* Card header bar */}
                <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-destructive" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span className="ml-2 text-xs font-medium text-muted-foreground">
                    Contents
                  </span>
                </div>
                <nav className="p-4">
                  <ol className="space-y-1">
                    {tableOfContents.map((item, idx) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-secondary text-xs font-semibold text-foreground group-hover:bg-primary/20 group-hover:text-primary">
                            {idx + 1}
                          </span>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            {/* Policy Sections */}
            <div className="space-y-10">
              {/* AdSense compliance notice card */}
              <div className="overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Advertising Notice
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      This website uses Google AdSense to display advertisements. 
                      Third-party vendors, including Google, use cookies to serve ads 
                      based on prior visits to this website or other sites. You can 
                      opt out of personalised ads at{" "}
                      <a
                        href="https://www.google.com/settings/ads"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        google.com/settings/ads
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic sections */}
              {sections.map((section, sIdx) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-8 overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-shadow hover:shadow-md hover:shadow-primary/5"
                >
                  {/* Section header */}
                  <div className="flex items-center gap-4 border-b border-border/50 px-6 py-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                      <span className="text-xs font-bold text-primary">
                        {String(sIdx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-foreground">
                      {section.title}
                    </h2>
                  </div>

                  {/* Sub-sections */}
                  <div className="divide-y divide-border/30 px-6">
                    {section.content.map((sub, subIdx) => (
                      <div key={subIdx} className="py-5">
                        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                          {sub.subtitle}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Bottom summary stats – mirrors Hero stat row */}
              <div className="overflow-hidden rounded-2xl border border-border/50 bg-card px-8 py-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">0</div>
                    <div className="text-sm text-muted-foreground">Data Sold</div>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">256-bit</div>
                    <div className="text-sm text-muted-foreground">Encryption</div>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">GDPR</div>
                    <div className="text-sm text-muted-foreground">Compliant</div>
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