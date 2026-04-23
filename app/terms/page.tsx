import Link from "next/link";
import Image from "next/image";

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <header className="legal-topbar">
          <Link href="/" className="legal-brand">
            <span className="legal-brand-mark">
              <Image
                src="/icon.jpeg"
                alt="FistBump Connect logo"
                width={42}
                height={42}
              />
            </span>

            <span className="legal-brand-copy">
              <strong>FistBump Connect</strong>
              <span>Accessibility-first communication</span>
            </span>
          </Link>

          <Link href="/" className="legal-back-link">
            ← Back to site
          </Link>
        </header>

        <section className="legal-card">
          <span className="legal-eyebrow">Legal</span>
          <h1 className="legal-title">Terms of Use</h1>
          <p className="legal-updated">Last updated: April 2026</p>

          <div className="legal-content">
            <section>
              <h2>Agreement</h2>
              <p>
                By accessing or using FistBump Connect, you agree to these
                Terms of Use.
              </p>
            </section>

            <section>
              <h2>Subscriptions</h2>
              <p>
                Some features may be offered through auto-renewing
                subscriptions. Pricing, billing periods, and trial availability
                will be shown before purchase.
              </p>
            </section>

            <section>
              <h2>Auto-Renewal</h2>
              <p>
                If applicable, subscriptions automatically renew unless canceled
                at least 24 hours before the end of the current billing period.
                Renewal charges are applied through the user’s Apple ID account.
              </p>
            </section>

            <section>
              <h2>Managing Subscriptions</h2>
              <p>
                Users can manage or cancel subscriptions in their Apple ID
                account settings after purchase.
              </p>
            </section>

            <section>
              <h2>Acceptable Use</h2>
              <p>
                You agree not to misuse the service, interfere with its
                operation, or use it in a way that violates applicable laws.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                For questions about these terms, contact{" "}
                <a href="mailto:support@fistbumpconnect.com">
                  support@fistbumpconnect.com
                </a>
                .
              </p>
            </section>
          </div>

          <div className="legal-footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/">Return Home</Link>
          </div>
        </section>
      </div>
    </main>
  );
}