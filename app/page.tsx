"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const featureCards = [
  {
    number: "01",
    title: "Quick Messages",
    text: "Show clear messages instantly when you need to communicate fast.",
    className: "feature-blue",
  },
  {
    number: "02",
    title: "Saved Interactions",
    text: "Keep important phrases ready for repeat situations and daily routines.",
    className: "feature-orange",
  },
  {
    number: "03",
    title: "Emergency Support",
    text: "Bring urgent information forward when timing matters most.",
    className: "feature-red",
  },
];

const audienceCards = [
  {
    title: "Deaf and hard-of-hearing users",
    text: "Built to make everyday communication faster, clearer, and less stressful in real situations.",
  },
  {
    title: "Non-speaking users",
    text: "Supports communication through readable text, saved messages, and quick response tools.",
  },
  {
    title: "Daily errands and appointments",
    text: "Useful in restaurants, doctor visits, stores, and other moments where quick clarity matters.",
  },
  {
    title: "Urgent communication moments",
    text: "Includes emergency tools designed to help surface important information quickly when needed.",
  },
];

const useCases = [
  {
    title: "At the doctor",
    text: "Show prepared phrases, explain communication needs, and reduce repeated typing.",
  },
  {
    title: "At a restaurant",
    text: "Save frequent orders, explain preferences, and make ordering feel smoother.",
  },
  {
    title: "In conversation",
    text: "Listen, reply, and keep the interaction moving with fewer barriers.",
  },
  {
    title: "In an emergency",
    text: "Bring urgent information, alerts, and emergency phrases forward faster.",
  },
];

const values = [
  {
    title: "Calm by design",
    text: "Soft colors, clear layouts, and readable content that feel approachable instead of clinical.",
  },
  {
    title: "Built for real use",
    text: "Designed around doctor visits, restaurants, errands, and urgent communication.",
  },
  {
    title: "Human-first experience",
    text: "Communication should feel dignified, fast, and respectful.",
  },
];

const slides = [
  {
    number: "01",
    title: "Home",
    subtitle: "Quick access to core communication tools.",
    text: "The main screen is designed to put the most important actions first, so communication starts faster and feels easier at a glance.",
    bullets: [
      "Fast access to core tools",
      "Clear visual hierarchy",
      "Everyday communication shortcuts",
    ],
    highlight:
      "Built to reduce friction right away so the user can find the right tool without hunting through menus.",
    src: "/screenshot-home.jpeg",
    alt: "FistBump Connect home screen",
  },
  {
    number: "02",
    title: "Saved Interactions",
    subtitle: "Keep common phrases ready for repeat situations.",
    text: "Saved phrases help everyday communication feel smoother by keeping high-frequency interactions ready when they are needed.",
    bullets: [
      "Reuse common phrases",
      "Reduce repeated typing",
      "Faster daily communication",
    ],
    highlight:
      "Ideal for the phrases people reach for again and again in errands, appointments, and routine interactions.",
    src: "/screenshot-saved.jpeg",
    alt: "FistBump Connect saved interactions screen",
  },
  {
    number: "03",
    title: "Conversation",
    subtitle: "Listen, reply, and communicate clearly in real time.",
    text: "Conversation mode supports back-and-forth communication with readable replies and quick show-or-speak actions in one place.",
    bullets: [
      "Listen and reply together",
      "Show or speak responses",
      "Better back-and-forth flow",
    ],
    highlight:
      "Designed for real conversations where clarity, speed, and simplicity matter more than complexity.",
    src: "/screenshot-conversation.png",
    alt: "FistBump Connect conversation screen",
  },
  {
    number: "04",
    title: "Emergency",
    subtitle: "Bring urgent tools forward when every second matters.",
    text: "Emergency tools surface visual alerts, lock screen access, and emergency phrases quickly when speed and clarity matter most.",
    bullets: [
      "Visual alert tools",
      "Emergency phrase access",
      "Faster urgent communication",
    ],
    highlight:
      "Made for high-stress moments when the app needs to be immediate, readable, and impossible to misunderstand.",
    src: "/screenshot-emergency.jpeg",
    alt: "FistBump Connect emergency screen",
  },
];

const proFreeFeatures = [
  "Quick Message",
  "Conversation",
  "Emergency tools",
  "General, Restaurant, and Doctor places",
  "Up to 3 saved restaurant orders",
  "Up to 5 custom phrases",
  "Profile customization",
];

const proPaidFeatures = [
  "7-day free trial",
  "Listen tab",
  "Sound alerts",
  "All built-in places",
  "Search inside places",
  "Custom locations",
  "Unlimited saved restaurant orders",
  "Unlimited custom phrases",
];

const faqs = [
  {
    question: "Is FistBump Connect free?",
    answer:
      "Yes. FistBump Connect includes a free version with essential communication tools, with Pro unlocking additional features and expanded customization.",
  },
  {
    question: "What does Pro include?",
    answer:
      "Pro adds features like the Listen tab, sound alerts, all built-in places, search inside places, custom locations, and unlimited saved items and phrases.",
  },
  {
    question: "Is there a free trial for Pro?",
    answer:
      "Yes. Pro includes a 7-day free trial so users can explore the expanded feature set before deciding.",
  },
  {
    question: "Will FistBump Connect be available on iPhone?",
    answer:
      "Yes. The website is designed around the upcoming iPhone launch and App Store release.",
  },
  {
    question: "Can it help in urgent situations?",
    answer:
      "Yes. FistBump Connect includes emergency-focused tools designed to make urgent communication faster and clearer.",
  },
  {
    question: "How can I get support?",
    answer:
      "You can reach out with support questions, accessibility feedback, or general inquiries at support@fistbumpconnect.com.",
  },
];

function CrownIcon() {
  return (
    <svg
      className="crown-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M6.2 17.5c-.5 0-.9-.4-.9-.9l-.8-6.1c-.1-.5.5-.9.9-.6l3.5 2.6 2.2-4.1c.3-.5 1-.5 1.3 0l2.2 4.1 3.5-2.6c.4-.3 1 .1.9.6l-.8 6.1c0 .5-.4.9-.9.9H6.2Zm.3 1.5h11c.6 0 1 .4 1 1s-.4 1-1 1h-11c-.6 0-1-.4-1-1s.4-1 1-1Z" />
    </svg>
  );
}

function ScreenshotShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const activeSlide = slides[activeIndex];

  return (
    <div className="showcase-shell reveal">
      <div className="showcase-copy">
        <div className="showcase-step">
          <span className="showcase-step-number">{activeSlide.number}</span>
          <span className="showcase-step-label">Product tour</span>
        </div>

        <h3>{activeSlide.title}</h3>
        <p className="showcase-subtitle">{activeSlide.subtitle}</p>
        <p className="showcase-text">{activeSlide.text}</p>

        <div className="showcase-info-grid">
          <div className="showcase-benefits">
            <div className="showcase-panel-title">What this helps with</div>
            <ul className="showcase-bullets">
              {activeSlide.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="showcase-highlight-card">
            <div className="showcase-panel-title">Why it matters</div>
            <p>{activeSlide.highlight}</p>
          </div>
        </div>

        <div className="showcase-controls">
          <button
            type="button"
            className="showcase-arrow"
            onClick={goToPrev}
            aria-label="Previous screenshot"
          >
            ←
          </button>

          <div className="showcase-dots" aria-label="Screenshot navigation">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={`showcase-dot ${index === activeIndex ? "is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${slide.title}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>

          <button
            type="button"
            className="showcase-arrow"
            onClick={goToNext}
            aria-label="Next screenshot"
          >
            →
          </button>
        </div>

        <div className="showcase-mini-list">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`showcase-mini-item ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="showcase-mini-number">{slide.number}</span>
              <span>{slide.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="showcase-visual">
        <div className="showcase-phone-shell">
          <div className="showcase-phone-top">
            <span className="showcase-kicker">Live preview</span>
            <p>{activeSlide.subtitle}</p>
          </div>

          <div className="showcase-stage">
            {slides.map((slide, index) => (
              <Image
                key={slide.title}
                src={slide.src}
                alt={slide.alt}
                width={430}
                height={932}
                className={`showcase-image ${index === activeIndex ? "is-active" : ""}`}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="site-shell">
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="brand">
            <div className="brand-mark">
              <Image
                src="/icon.jpeg"
                alt="FistBump Connect icon"
                fill
                sizes="48px"
                className="brand-image"
              />
            </div>

            <div className="brand-text">
              <span className="brand-title">FistBump Connect</span>
              <span className="brand-subtitle">
                Accessibility-first communication
              </span>
            </div>
          </a>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#screenshots">Screenshots</a>
            <a href="#pro">Pro</a>
            <a href="#faq">FAQ</a>
            <a href="#support">Support</a>
            <a href="#download" className="nav-cta">
              Download Soon
            </a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-shell reveal">
            <div className="hero-glow hero-glow-left" />
            <div className="hero-glow hero-glow-right" />

            <div className="hero-copy">
              <div className="eyebrow">Built for real-world communication</div>

              <h1>Communication that feels calm, clear, and human.</h1>

              <p className="hero-text">
                FistBump Connect helps deaf, hard-of-hearing, and non-speaking
                people communicate more easily with quick messages, saved
                interactions, conversation tools, and emergency support.
              </p>

              <div className="hero-actions">
                <a href="#download" className="button button-primary">
                  Download Soon
                </a>
                <a href="#screenshots" className="button button-secondary">
                  View Screenshots
                </a>
              </div>

              <div className="hero-mini-points">
                <span>Quick Messages</span>
                <span>Conversation Tools</span>
                <span>Emergency Support</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-shot-card">
                <div className="hero-shot-top">
                  <span className="hero-shot-kicker">Featured preview</span>
                  <h3>Home that puts the right tools first</h3>
                  <p>
                    The main screen is designed to feel fast, soft, and easy to
                    understand at a glance.
                  </p>
                </div>

                <Image
                  src="/screenshot-home.jpeg"
                  alt="FistBump Connect home screen"
                  width={430}
                  height={932}
                  className="hero-shot hero-float"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section trust-strip-section">
        <div className="container">
          <div className="trust-strip reveal">
            <span>Built for iPhone</span>
            <span>7-day Pro trial</span>
            <span>Accessibility-first design</span>
            <span>Support available</span>
          </div>
        </div>
      </section>

      <section id="features" className="section features-section">
        <div className="container">
          <div className="section-heading reveal">
            <div className="eyebrow">Core features</div>
            <h2>Designed for everyday moments that need speed and clarity.</h2>
            <p>
              FistBump Connect is built around the situations people actually
              face every day, from quick interactions to higher-pressure
              moments.
            </p>
          </div>

          <div className="feature-grid">
            {featureCards.map((feature, index) => (
              <article
                className={`feature-card ${feature.className} reveal`}
                key={feature.title}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="feature-number">{feature.number}</div>
                <div className="feature-copy">
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section audience-section section-band warm-band">
        <div className="container">
          <div className="section-heading reveal">
            <div className="eyebrow">Who it’s for</div>
            <h2>Made for real communication needs, not ideal scenarios.</h2>
            <p>
              FistBump Connect is designed for people who need faster, clearer,
              and more dependable ways to communicate in everyday life.
            </p>
          </div>

          <div className="audience-grid">
            {audienceCards.map((card, index) => (
              <article
                className="audience-card reveal"
                key={card.title}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section emotional-section">
        <div className="container">
          <div className="emotional-shell reveal">
            <div className="emotional-copy">
              <div className="eyebrow">Built to feel respectful</div>
              <h2>Communication support should lower stress, not add to it.</h2>
              <p>
                FistBump Connect is designed to feel calm in the moment. Clear
                at a glance. Fast when pressure is high. Simple enough to help
                without getting in the way.
              </p>
            </div>

            <div className="emotional-points">
              <div className="emotional-point">
                <span className="emotional-point-title">Readable first</span>
                <span className="emotional-point-text">
                  Large, clear content that is easy to understand quickly.
                </span>
              </div>
              <div className="emotional-point">
                <span className="emotional-point-title">Fast under pressure</span>
                <span className="emotional-point-text">
                  Built for real situations where hesitation can make things harder.
                </span>
              </div>
              <div className="emotional-point">
                <span className="emotional-point-title">Human by default</span>
                <span className="emotional-point-text">
                  Designed to feel supportive, respectful, and calm instead of clinical.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="screenshots"
        className="section section-soft screenshots-section"
      >
        <div className="container">
          <div className="section-heading reveal">
            <div className="eyebrow">Inside the app</div>
            <h2>See how FistBump Connect works in real moments.</h2>
            <p>
              The experience is designed to feel clear in the moment, so the
              user can focus on communication instead of fighting the tool.
            </p>
          </div>

          <ScreenshotShowcase />
        </div>
      </section>

      <section className="section use-cases-section">
        <div className="container">
          <div className="section-heading reveal">
            <div className="eyebrow">Use cases</div>
            <h2>Built around situations people actually face.</h2>
            <p>
              The goal is not to add complexity. It is to make common and
              high-pressure situations easier to navigate.
            </p>
          </div>

          <div className="use-cases-grid stagger-grid">
            {useCases.map((item, index) => (
              <article
                className="use-case-card reveal"
                key={item.title}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pro" className="section pro-section section-band">
        <div className="container">
          <div className="section-heading reveal">
            <div className="eyebrow">Pro features</div>
            <h2>Simple for everyone. More powerful with Pro.</h2>
            <p>
              FistBump Connect includes essential tools for free, with Pro
              unlocking advanced communication features and deeper
              customization.
            </p>
          </div>

          <div className="trial-callout reveal">
            <div className="trial-badge">
              <CrownIcon />
              <span>7-day free trial</span>
            </div>
            <p>
              Try Pro first, explore the added tools, and see whether the
              expanded experience fits your everyday communication needs.
            </p>
          </div>

          <div className="pricing-grid">
            <article className="pricing-card pricing-card-free reveal">
              <div className="pricing-top">
                <span className="pricing-badge">Free</span>
                <h3>Everything needed to get started</h3>
                <p>
                  A strong free experience built for everyday communication and
                  essential support.
                </p>
              </div>

              <ul className="pricing-list">
                {proFreeFeatures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="pricing-card pricing-card-pro reveal">
              <div className="pricing-top">
                <div className="pricing-pro-head">
                  <span className="pricing-badge pricing-badge-pro">
                    <CrownIcon />
                    <span>Pro</span>
                  </span>
                  <span className="pricing-trial-pill">Includes 7-day trial</span>
                </div>

                <h3>Advanced tools for deeper daily support</h3>
                <p>
                  Unlock more listening, search, customization, and storage
                  features for broader everyday use.
                </p>
              </div>

              <ul className="pricing-list pricing-list-pro">
                {proPaidFeatures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="pricing-note reveal">
            Built to stay useful for free, with Pro unlocking more advanced
            support for people who need it.
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <div className="mission-card reveal">
            <div className="mission-copy">
              <div className="eyebrow">Why it matters</div>
              <h2>Accessibility tools should feel supportive, not stressful.</h2>
              <p>
                FistBump Connect is designed to reduce friction in everyday
                communication. The goal is not to overwhelm people with
                features. It is to make the right tool feel fast, readable, and
                ready when it matters.
              </p>
            </div>

            <div className="mission-points">
              {values.map((value, index) => (
                <div
                  className="point"
                  key={value.title}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <span className="point-title">{value.title}</span>
                  <span className="point-text">{value.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section faq-section warm-faq-band">
        <div className="container">
          <div className="section-heading reveal">
            <div className="eyebrow">FAQ</div>
            <h2>Questions people may have before downloading the app.</h2>
            <p>
              A few quick answers to help visitors understand how FistBump
              Connect works and what to expect.
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <article
                className="faq-card reveal"
                key={faq.question}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="section support-section">
        <div className="container">
          <div className="support-grid">
            <div className="support-card reveal">
              <div className="eyebrow">Customer support</div>
              <h2>Need help or have a question?</h2>
              <p>
                Reach out for support, app questions, accessibility feedback, or
                general inquiries.
              </p>
              <a
                href="mailto:support@fistbumpconnect.com"
                className="support-link"
              >
                support@fistbumpconnect.com
              </a>
              <div className="support-note">
                We welcome support questions and accessibility feedback.
              </div>
            </div>

            <div className="support-card donate-card reveal">
              <div className="eyebrow">Support the team</div>
              <h2>Help support future development.</h2>
              <p>
                If you believe in tools that make communication more accessible,
                you’ll be able to support ongoing development here.
              </p>
              <a href="#" className="button button-primary">
                Support the Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="section cta-section">
        <div className="container">
          <div className="cta-card cta-card-compact reveal">
            <div className="cta-glow cta-glow-left" />
            <div className="cta-glow cta-glow-right" />

            <div className="cta-inner">
              <div className="cta-logo-badge">
                <div className="cta-logo-mark">
                  <Image
                    src="/icon.jpeg"
                    alt="FistBump Connect logo"
                    fill
                    sizes="64px"
                    className="brand-image"
                  />
                </div>
                <div className="cta-logo-text">
                  <span className="cta-logo-title">FistBump Connect</span>
                  <span className="cta-logo-subtitle">App Store launch soon</span>
                </div>
              </div>

              <div className="eyebrow">Launching soon on the App Store</div>
              <h2>Almost here.</h2>
              <p className="cta-compact-text">
                FistBump Connect is nearly ready to launch and built to make
                communication feel calmer, clearer, and easier from the first tap.
              </p>

              <div className="cta-actions">
                <a href="#" className="button button-primary">
                  Download Soon
                </a>
                <a href="#features" className="button button-secondary">
                  View Features
                </a>
              </div>

              <div className="cta-meta">
                <span>Built for iPhone</span>
                <span>7-day Pro trial</span>
                <span>Support: support@fistbumpconnect.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="footer-icon">
              <Image
                src="/icon.jpeg"
                alt="FistBump Connect icon"
                fill
                sizes="44px"
                className="brand-image"
              />
            </div>

            <div>
              <strong>FistBump Connect</strong>
              <p>Communication tools that feel calm, clear, and human.</p>
            </div>
          </div>

          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#screenshots">Screenshots</a>
            <a href="#pro">Pro</a>
            <a href="#faq">FAQ</a>
            <a href="#support">Support</a>
            <a href="#download">Download</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}