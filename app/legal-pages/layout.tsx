// app/legal-pages/layout.tsx

import "./styles.css";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="legal-main">
      <div className="legal-card">
        {children}
      </div>
    </main>
  );
}