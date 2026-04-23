import Link from "next/link";
import Image from "next/image";

export default function PrivacyPage() {
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
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last updated: April 2026</p>

          <div className="legal-content">
            <section>
              <h2>Overview</h2>
              <p>
                FistBump Connect is designed to support accessible
                communication. This Privacy Policy explains what information may
                be collected, how it may be used, and how users can contact us
                with questions.
              </p>
            </section>

            <section>
              <h2>Information We May Collect</h2>
              <p>
                Depending on how the app is used, FistBump Connect may collect
                limited account, subscription, support, device, or app usage
                information needed to operate, improve, and support the service.
              </p>
            </section>

            <section>
              <h2>How Information May Be Used</h2>
              <p>
                Information may be used to provide app functionality, support
                subscriptions, improve reliability, respond to support requests,
                and maintain security and performance.
              </p>
            </section>

            <section>
              <h2>Third-Party Services</h2>
              <p>
                FistBump Connect may rely on Apple services, payment providers,
                analytics tools, hosting providers, or other trusted
                infrastructure services to operate parts of the app and website.
              </p>
            </section>

            <section>
              <h2>Data Retention</h2>
              <p>
                Information is retained only as long as reasonably necessary to
                provide the service, meet legal requirements, resolve disputes,
                and maintain the security and integrity of the platform.
              </p>
            </section>

            <section>
              <h2>Your Choices</h2>
              <p>
                Users may contact us with questions about privacy, support, or
                data handling.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                For privacy questions, contact{" "}
                <a href="mailto:support@fistbumpconnect.com">
                  support@fistbumpconnect.com
                </a>
                .
              </p>
            </section>
          </div>

          <div className="legal-footer-links">
            <Link href="/terms">Terms of Use</Link>
            <Link href="/">Return Home</Link>
          </div>
        </section>
      </div>
    </main>
  );
}