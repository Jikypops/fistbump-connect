"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type TourScreen = {
  id: string;
  step: string;
  name: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  helps: string[];
  why: string;
  image: string;
};

const supportLink = "https://buy.stripe.com/bJe9AV9aJaqR8aobv68EM00";
const supportEmail = "support@fistbumpconnect.com";

const tourScreens: TourScreen[] = [
  {
    id: "home",
    step: "01",
    name: "Home",
    eyebrow: "Featured preview",
    title: "Home that puts the right tools first",
    subtitle: "Quick access to core communication tools.",
    description:
      "The main screen is designed to feel fast, soft, and easy to understand at a glance.",
    helps: [
      "Reach common tools in one tap",
      "Start faster in everyday situations",
      "Keep the most useful actions front and center",
    ],
    why: "Built to reduce friction before communication even begins.",
    image: "/screenshot-home.jpeg",
  },
  {
    id: "saved",
    step: "02",
    name: "Saved Interactions",
    eyebrow: "Live preview",
    title: "Saved phrases ready when repeat situations come up",
    subtitle: "Keep common phrases ready for repeat situations.",
    description:
      "Saved phrases help everyday communication feel smoother by keeping high-frequency interactions ready when they are needed.",
    helps: [
      "Reuse common phrases",
      "Reduce repeated typing",
      "Make everyday interactions faster",
    ],
    why: "Ideal for the phrases people reach for again and again in errands, appointments, and routine interactions.",
    image: "/screenshot-saved.jpeg",
  },
  {
    id: "conversation",
    step: "03",
    name: "Conversation",
    eyebrow: "Product tour",
    title: "Conversation that supports back-and-forth in real time",
    subtitle: "Listen, reply, and communicate clearly in real time.",
    description:
      "Conversation mode supports back-and-forth communication with readable replies and quick show-or-speak actions in one place.",
    helps: [
      "Listen and reply together",
      "Show or speak responses",
      "Create better back-and-forth flow",
    ],
    why: "Designed for real conversations where clarity, speed, and simplicity matter more than complexity.",
    image: "/screenshot-conversation.png",
  },
  {
    id: "emergency",
    step: "04",
    name: "Emergency",
    eyebrow: "Live preview",
    title: "Emergency tools that surface urgent communication faster",
    subtitle: "Bring urgent tools forward when every second matters.",
    description:
      "Emergency tools help surface visual alerts, lock screen access, and emergency phrases quickly when speed and clarity matter most.",
    helps: [
      "Show urgent information quickly",
      "Get attention faster",
      "Keep critical phrases visible in high-pressure moments",
    ],
    why: "Built for the moments where hesitation or menu hunting makes things harder.",
    image: "/screenshot-emergency.jpeg",
  },
];

const quickFeatures = [
  "Quick Messages",
  "Conversation Tools",
  "Emergency Support",
];

const heroRail = [
  "Built for iPhone",
  "7-day Pro trial",
  "Accessibility-first design",
  "Support available",
];

const useCases = [
  {
    title: "At the doctor",
    body: "Show prepared phrases, explain communication needs, and reduce repeated typing.",
  },
  {
    title: "At a restaurant",
    body: "Save frequent orders, explain preferences, and make ordering feel smoother.",
  },
  {
    title: "In conversation",
    body: "Listen, reply, and keep the interaction moving with fewer barriers.",
  },
  {
    title: "In an emergency",
    body: "Bring urgent information, alerts, and emergency phrases forward faster.",
  },
];

const audienceCards = [
  {
    title: "Deaf and hard-of-hearing users",
    body: "Built to make everyday communication faster, clearer, and less stressful in real situations.",
  },
  {
    title: "Non-speaking users",
    body: "Supports communication through readable text, saved messages, and quick response tools.",
  },
  {
    title: "Daily errands and appointments",
    body: "Useful in restaurants, doctor visits, stores, and other moments where quick clarity matters.",
  },
  {
    title: "Urgent communication moments",
    body: "Includes emergency tools designed to help surface important information quickly when needed.",
  },
];

const principleCards = [
  {
    title: "Readable first",
    body: "Large, clear content that is easy to understand quickly.",
  },
  {
    title: "Fast under pressure",
    body: "Built for real situations where hesitation can make things harder.",
  },
  {
    title: "Human by default",
    body: "Designed to feel supportive, respectful, and calm instead of clinical.",
  },
];

const faqItems = [
  {
    q: "Is FistBump Connect free?",
    a: "Yes. FistBump Connect includes a free version with essential communication tools, with Pro unlocking additional features and expanded customization.",
  },
  {
    q: "What does Pro include?",
    a: "Pro adds features like the Listen tab, sound alerts, all built-in places, search inside places, custom locations, and unlimited saved items and phrases.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "Yes. Pro includes a 7-day free trial so users can explore the expanded feature set before deciding.",
  },
  {
    q: "Will FistBump Connect be available on iPhone?",
    a: "Yes. The website is designed around the upcoming iPhone launch and App Store release.",
  },
  {
    q: "Can it help in urgent situations?",
    a: "Yes. FistBump Connect includes emergency-focused tools designed to make urgent communication faster and clearer.",
  },
  {
    q: "How can I get support?",
    a: `You can reach out with support questions, accessibility feedback, or general inquiries at ${supportEmail}.`,
  },
];

function CrownIcon() {
  return <span className="crown-pill-icon">♛</span>;
}

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const activeScreen = useMemo(() => tourScreens[activeIndex], [activeIndex]);

  const previousScreen = () => {
    setActiveIndex((prev) => (prev === 0 ? tourScreens.length - 1 : prev - 1));
  };

  const nextScreen = () => {
    setActiveIndex((prev) => (prev === tourScreens.length - 1 ? 0 : prev + 1));
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance) {
      nextScreen();
    } else if (distance < -minSwipeDistance) {
      previousScreen();
    }
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="topbar-inner container">
          <Link href="/" className="brand">
            <span className="brand-mark">
              <Image
                src="/icon.jpeg"
                alt="FistBump Connect logo"
                width={42}
                height={42}
                className="brand-mark-image"
              />
            </span>

            <span className="brand-copy">
              <strong>FistBump Connect</strong>
              <span>Accessibility-first communication</span>
            </span>
          </Link>

          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#screenshots">Screenshots</a>
            <a href="#pro">Pro</a>
            <a href="#faq">FAQ</a>
            <a href="#support">Support</a>
          </nav>

          <a href="#cta" className="button button-primary button-nav">
            Download Soon
          </a>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />

        <div className="container">
          <div className="hero-card">
            <div className="hero-copy">
              <span className="eyebrow">Built for real-world communication</span>

              <h1 className="hero-title">
                Communication that feels calm, clear, and human.
              </h1>

              <p className="hero-body">
                FistBump Connect helps deaf, hard-of-hearing, and non-speaking
                people communicate more easily with quick messages, saved
                interactions, conversation tools, and emergency support.
              </p>

              <div className="hero-actions">
                <a href="#cta" className="button button-primary">
                  Download Soon
                </a>
                <a href="#screenshots" className="button button-secondary">
                  View Screenshots
                </a>
              </div>

              <div className="hero-tags">
                {quickFeatures.map((feature) => (
                  <span key={feature} className="tag-pill">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <aside className="hero-preview">
              <span className="eyebrow">Featured preview</span>
              <h3 className="preview-title">Home that puts the right tools first</h3>
              <p className="preview-body">
                The main screen is designed to feel fast, soft, and easy to
                understand at a glance.
              </p>

              <div className="preview-frame">
                <Image
                  src="/screenshot-home.jpeg"
                  alt="FistBump Connect home screen"
                  width={430}
                  height={900}
                  className="screen-image"
                />
              </div>
            </aside>
          </div>

          <div className="hero-rail">
            {heroRail.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container section-header">
          <span className="eyebrow">Core features</span>
          <h2 className="section-title">
            Designed for everyday moments that need speed and clarity.
          </h2>
          <p className="section-subtitle">
            FistBump Connect is built around the situations people actually face
            every day, from quick interactions to higher-pressure moments.
          </p>
        </div>

        <div className="container narrow-stack">
          <div className="feature-row-card">
            <span className="feature-row-number">01</span>
            <div>
              <h3>Quick Messages</h3>
              <p>Show clear messages instantly when you need to communicate fast.</p>
            </div>
          </div>

          <div className="feature-row-card">
            <span className="feature-row-number">02</span>
            <div>
              <h3>Saved Interactions</h3>
              <p>Keep important phrases ready for repeat situations and daily routines.</p>
            </div>
          </div>

          <div className="feature-row-card">
            <span className="feature-row-number">03</span>
            <div>
              <h3>Emergency Support</h3>
              <p>Bring urgent information forward when timing matters most.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container section-header">
          <span className="eyebrow">Who it&apos;s for</span>
          <h2 className="section-title section-title-wide">
            Made for real communication needs, not ideal scenarios.
          </h2>
          <p className="section-subtitle">
            FistBump Connect is designed for people who need faster, clearer,
            and more dependable ways to communicate in everyday life.
          </p>
        </div>

        <div className="container audience-grid">
          {audienceCards.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container principle-card">
          <div className="principle-main">
            <span className="eyebrow">Built to feel respectful</span>
            <h2 className="card-title">
              Communication support should lower stress, not add to it.
            </h2>
            <p>
              FistBump Connect is designed to feel calm in the moment. Clear at
              a glance. Fast when pressure is high. Simple enough to help
              without getting in the way.
            </p>
          </div>

          <div className="principle-side">
            {principleCards.map((item) => (
              <article key={item.title} className="mini-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="screenshots" className="section">
        <div className="container section-header">
          <span className="eyebrow">Inside the app</span>
          <h2 className="section-title">
            See how FistBump Connect works in real moments.
          </h2>
          <p className="section-subtitle">
            The experience is designed to feel clear in the moment, so the user
            can focus on communication instead of fighting the tool.
          </p>
        </div>

        <div className="container tour-card">
          <div className="tour-copy">
            <div className="tour-step-line">
              <span className="tour-step">{activeScreen.step}</span>
              <span className="tour-step-label">{activeScreen.eyebrow}</span>
            </div>

            <h3 className="tour-title">{activeScreen.name}</h3>
            <p className="tour-subtitle">{activeScreen.subtitle}</p>
            <p className="tour-description">{activeScreen.description}</p>

            <div className="tour-note-card">
              <h4>What this helps with</h4>
              <ul>
                {activeScreen.helps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="tour-note-card">
              <h4>Why it matters</h4>
              <p>{activeScreen.why}</p>
            </div>

            <div className="tour-controls">
              <button
                type="button"
                onClick={previousScreen}
                className="tour-arrow"
                aria-label="Previous screen"
              >
                ←
              </button>

              <div className="tour-dots">
                {tourScreens.map((screen, index) => (
                  <button
                    key={screen.id}
                    type="button"
                    className={`tour-dot ${index === activeIndex ? "is-active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to ${screen.name}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextScreen}
                className="tour-arrow"
                aria-label="Next screen"
              >
                →
              </button>
            </div>

            <div className="tour-tabs">
              {tourScreens.map((screen, index) => (
                <button
                  key={screen.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`tour-tab ${index === activeIndex ? "is-active" : ""}`}
                >
                  <span>{screen.step}</span> {screen.name}
                </button>
              ))}
            </div>
          </div>

          <div
            className="tour-preview"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <span className="eyebrow">Live preview</span>
            <h4>{activeScreen.title}</h4>
            <p>{activeScreen.subtitle}</p>

            <div className="preview-frame preview-frame-large">
              <Image
                src={activeScreen.image}
                alt={`${activeScreen.name} screen preview`}
                width={430}
                height={900}
                className="screen-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container section-header">
          <span className="eyebrow">Use cases</span>
          <h2 className="section-title section-title-wide">
            Built around situations people actually face.
          </h2>
          <p className="section-subtitle">
            The goal is not to add complexity. It is to make common and
            high-pressure situations easier to navigate.
          </p>
        </div>

        <div className="container audience-grid">
          {useCases.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pro" className="section">
        <div className="container section-header">
          <span className="eyebrow">Pro features</span>
          <h2 className="section-title section-title-wide">
            Simple for everyone. More powerful with Pro.
          </h2>
          <p className="section-subtitle">
            FistBump Connect includes essential tools for free, with Pro
            unlocking advanced communication features and deeper customization.
          </p>
        </div>

        <div className="container pro-trial-banner">
          <div className="trial-pill">
            <CrownIcon />
            <span>7-day free trial</span>
          </div>
          <p>
            Try Pro first, explore the added tools, and see whether the expanded
            experience fits your everyday communication needs.
          </p>
        </div>

        <div className="container pricing-grid">
          <article className="pricing-card">
            <span className="pricing-badge">Free</span>
            <h3>Everything needed to get started</h3>
            <p>
              A strong free experience built for everyday communication and
              essential support.
            </p>

            <ul>
              <li>Quick Message</li>
              <li>Conversation</li>
              <li>Emergency tools</li>
              <li>General, Restaurant, and Doctor places</li>
              <li>Up to 3 saved restaurant orders</li>
              <li>Up to 5 custom phrases</li>
              <li>Profile customization</li>
            </ul>
          </article>

          <article className="pricing-card pricing-card-pro">
            <div className="pricing-card-top">
              <span className="pricing-badge pricing-badge-pro">
                <CrownIcon />
                <span>Pro</span>
              </span>

              <span className="pricing-badge pricing-badge-trial">
                Includes 7-day trial
              </span>
            </div>

            <h3>Advanced tools for deeper daily support</h3>
            <p>
              Unlock more listening, search, customization, and storage features
              for broader everyday use.
            </p>

            <ul>
              <li>7-day free trial</li>
              <li>Listen tab</li>
              <li>Sound alerts</li>
              <li>All built-in places</li>
              <li>Search inside places</li>
              <li>Custom locations</li>
              <li>Unlimited saved restaurant orders</li>
              <li>Unlimited custom phrases</li>
            </ul>
          </article>
        </div>

        <div className="container pricing-footnote">
          Built to stay useful for free, with Pro unlocking more advanced
          support for people who need it.
        </div>
      </section>

      <section id="faq" className="section section-soft">
        <div className="container section-header">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title section-title-wide">
            Questions people may have before downloading the app.
          </h2>
          <p className="section-subtitle">
            A few quick answers to help visitors understand how FistBump
            Connect works and what to expect.
          </p>
        </div>

        <div className="container faq-grid">
          {faqItems.map((item) => (
            <article key={item.q} className="faq-card">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="support" className="section">
        <div className="container support-grid">
          <article className="support-card">
            <span className="eyebrow">Customer support</span>
            <h2 className="card-title">Need help or have a question?</h2>
            <p>
              Reach out for support, app questions, accessibility feedback, or
              general inquiries.
            </p>
            <a href={`mailto:${supportEmail}`} className="support-email">
              {supportEmail}
            </a>

            <div className="support-legal-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
            </div>

            <p className="support-small">
              We welcome support questions and accessibility feedback.
            </p>
          </article>

          <article className="support-card support-card-accent">
            <span className="eyebrow">Support the team</span>
            <h2 className="card-title">Help support future development.</h2>
            <p>
              If you believe in tools that make communication more accessible,
              you&apos;ll be able to support ongoing development here.
            </p>
            <a
              href={supportLink}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Support the Team
            </a>
          </article>
        </div>
      </section>

      <section id="cta" className="section cta-section">
        <div className="container cta-card">
          <div className="cta-inner">
            <div className="cta-logo-badge">
              <span className="cta-logo-badge-image">
                <Image
                  src="/icon.jpeg"
                  alt="FistBump Connect app icon"
                  width={42}
                  height={42}
                />
              </span>
              <span className="cta-logo-badge-copy">
                <strong>FistBump Connect</strong>
                <span>App Store launch soon</span>
              </span>
            </div>

            <span className="eyebrow">Launching soon on the App Store</span>

            <h2 className="cta-title">
              Almost here. Built to make communication feel calmer from the
              first tap.
            </h2>

            <p className="cta-body">
              FistBump Connect is nearly ready to launch. As soon as release is
              live, this button can go straight to the App Store.
            </p>

            <div className="cta-actions">
              <a href="#" className="button button-primary">
                Download Soon
              </a>
              <a href="#features" className="button button-secondary">
                View Features
              </a>
            </div>

            <div className="cta-tags">
              <span className="tag-pill">Built for iPhone</span>
              <span className="tag-pill">7-day Pro trial</span>
              <span className="tag-pill">Support: {supportEmail}</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner container">
          <div className="footer-brand">
            <Image
              src="/icon.jpeg"
              alt="FistBump Connect logo"
              width={42}
              height={42}
              className="brand-mark-image"
            />
            <div>
              <strong>FistBump Connect</strong>
              <span>Communication tools that feel calm, clear, and human.</span>
            </div>
          </div>

          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#screenshots">Screenshots</a>
            <a href="#pro">Pro</a>
            <a href="#faq">FAQ</a>
            <a href="#support">Support</a>
            <a href="#cta">Download</a>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}