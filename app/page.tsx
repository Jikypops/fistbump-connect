"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const SUPPORT_URL = "https://buy.stripe.com/bJe9AV9aJaqR8aobv68EM00";

const productTourSlides = [
  {
    number: "01",
    eyebrow: "Product tour",
    title: "Home",
    subtitle: "Quick access to core communication tools.",
    description:
      "The main screen is designed to put the most important actions first, so communication starts faster and feels easier at a glance.",
    helps: [
      "Start with your most-used tools",
      "See communication shortcuts clearly",
      "Reduce friction before a conversation starts",
    ],
    whyItMatters:
      "A calm starting point helps people move faster in real situations instead of hunting through cluttered screens.",
    image: "/screenshot-home.jpeg",
    imageTitle: "Home that puts the right tools first",
    imageDescription:
      "The main screen is designed to feel fast, soft, and easy to understand at a glance.",
  },
  {
    number: "02",
    eyebrow: "Product tour",
    title: "Saved Interactions",
    subtitle: "Keep common phrases ready for repeat situations.",
    description:
      "Saved phrases help everyday communication feel smoother by keeping high-frequency interactions ready when they are needed.",
    helps: [
      "Reuse common phrases",
      "Reduce repeated typing",
      "Move through daily communication faster",
    ],
    whyItMatters:
      "Ideal for the phrases people reach for again and again in errands, appointments, and routine interactions.",
    image: "/screenshot-saved.jpeg",
    imageTitle: "Saved Interactions ready when needed",
    imageDescription:
      "Common communication can stay prepared and easy to reuse instead of being rewritten each time.",
  },
  {
    number: "03",
    eyebrow: "Product tour",
    title: "Conversation",
    subtitle: "Listen, reply, and communicate clearly in real time.",
    description:
      "Conversation mode supports back-and-forth communication with readable replies and quick show-or-speak actions in one place.",
    helps: [
      "Listen and reply together",
      "Show or speak responses",
      "Keep real conversations moving",
    ],
    whyItMatters:
      "Designed for real conversations where clarity, speed, and simplicity matter more than complexity.",
    image: "/screenshot-conversation.png",
    imageTitle: "Conversation that supports back-and-forth flow",
    imageDescription:
      "Readable replies and simple actions help communication stay clear when timing matters.",
  },
  {
    number: "04",
    eyebrow: "Product tour",
    title: "Emergency",
    subtitle: "Bring urgent tools forward when every second matters.",
    description:
      "Emergency tools surface visual alerts, lock screen access, and emergency phrases quickly when speed and clarity matter most.",
    helps: [
      "Access urgent tools faster",
      "Surface critical communication quickly",
      "Reduce hesitation in high-pressure moments",
    ],
    whyItMatters:
      "Emergency features should feel immediate, direct, and visible when the situation is already stressful.",
    image: "/screenshot-emergency.jpeg",
    imageTitle: "Emergency support designed for pressure moments",
    imageDescription:
      "Urgent communication tools stay prominent, simple, and easier to act on quickly.",
  },
];

export default function Page() {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = useMemo(
    () => productTourSlides[activeSlide],
    [activeSlide]
  );

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? productTourSlides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === productTourSlides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            <div className="brand-mark">
              <Image
                src="/icon.jpeg"
                alt="FistBump Connect logo"
                width={44}
                height={44}
                className="brand-mark-image"
                priority
              />
            </div>
            <div className="brand-copy">
              <span className="brand-name">FistBump Connect</span>
              <span className="brand-subtitle">Accessibility-first communication</span>
            </div>
          </a>

          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#screens">Screenshots</a>
            <a href="#pro">Pro</a>
            <a href="#faq">FAQ</a>
            <a href="#support">Support</a>
          </nav>

          <a href="#download" className="nav-cta">
            Download Soon
          </a>
        </div>
      </header>

      <section className="hero-section" id="top">
        <div className="container hero-card">
          <div className="hero-copy">
            <span className="eyebrow-pill">Built for real-world communication</span>
            <h1>Communication that feels calm, clear, and human.</h1>
            <p>
              FistBump Connect helps deaf, hard-of-hearing, and non-speaking
              people communicate more easily with quick messages, saved
              interactions, conversation tools, and emergency support.
            </p>

            <div className="hero-actions">
              <a href="#download" className="primary-button">
                Download Soon
              </a>
              <a href="#screens" className="secondary-button">
                View Screenshots
              </a>
            </div>

            <div className="hero-tags">
              <span>Quick Messages</span>
              <span>Conversation Tools</span>
              <span>Emergency Support</span>
            </div>
          </div>

          <div className="hero-preview">
            <div className="preview-panel">
              <span className="preview-label">Featured preview</span>
              <h3>{currentSlide.imageTitle}</h3>
              <p>{currentSlide.imageDescription}</p>

              <div className="phone-frame hero-phone-frame">
                <Image
                  src="/screenshot-home.jpeg"
                  alt="FistBump Connect home screen"
                  width={430}
                  height={932}
                  className="phone-image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container trust-strip">
          <span>Built for iPhone</span>
          <span>7-day Pro trial</span>
          <span>Accessibility-first design</span>
          <span>Support available</span>
        </div>
      </section>

      <section className="section-block section-soft" id="features">
        <div className="container section-head">
          <span className="eyebrow-pill">Core features</span>
          <h2>Designed for everyday moments that need speed and clarity.</h2>
          <p>
            FistBump Connect is built around the situations people actually face
            every day, from quick interactions to higher-pressure moments.
          </p>
        </div>

        <div className="container feature-stack">
          <article className="feature-row">
            <div className="feature-number">01</div>
            <div>
              <h3>Quick Messages</h3>
              <p>Show clear messages instantly when you need to communicate fast.</p>
            </div>
          </article>

          <article className="feature-row">
            <div className="feature-number">02</div>
            <div>
              <h3>Saved Interactions</h3>
              <p>Keep important phrases ready for repeat situations and daily routines.</p>
            </div>
          </article>

          <article className="feature-row">
            <div className="feature-number">03</div>
            <div>
              <h3>Emergency Support</h3>
              <p>Bring urgent information forward when timing matters most.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-block" id="audience">
        <div className="container section-head">
          <span className="eyebrow-pill">Who it&apos;s for</span>
          <h2>Made for real communication needs, not ideal scenarios.</h2>
          <p>
            FistBump Connect is designed for people who need faster, clearer,
            and more dependable ways to communicate in everyday life.
          </p>
        </div>

        <div className="container use-grid">
          <article className="mini-card">
            <h3>Deaf and hard-of-hearing users</h3>
            <p>
              Built to make everyday communication faster, clearer, and less
              stressful in real situations.
            </p>
          </article>
          <article className="mini-card">
            <h3>Non-speaking users</h3>
            <p>
              Supports communication through readable text, saved messages, and
              quick response tools.
            </p>
          </article>
          <article className="mini-card">
            <h3>Daily errands and appointments</h3>
            <p>
              Useful in restaurants, doctor visits, stores, and other moments
              where quick clarity matters.
            </p>
          </article>
          <article className="mini-card">
            <h3>Urgent communication moments</h3>
            <p>
              Includes emergency tools designed to help surface important
              information quickly when needed.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block section-soft" id="screens">
        <div className="container section-head">
          <span className="eyebrow-pill">Inside the app</span>
          <h2>See how FistBump Connect works in real moments.</h2>
          <p>
            The experience is designed to feel clear in the moment, so the user
            can focus on communication instead of fighting the tool.
          </p>
        </div>

        <div className="container tour-card">
          <div className="tour-copy">
            <div className="tour-intro">
              <span className="tour-number">{currentSlide.number}</span>
              <span className="tour-eyebrow">{currentSlide.eyebrow}</span>
            </div>

            <h3>{currentSlide.title}</h3>
            <p className="tour-subtitle">{currentSlide.subtitle}</p>
            <p className="tour-description">{currentSlide.description}</p>

            <div className="tour-detail-card">
              <h4>What this helps with</h4>
              <ul>
                {currentSlide.helps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="tour-detail-card">
              <h4>Why it matters</h4>
              <p>{currentSlide.whyItMatters}</p>
            </div>

            <div className="tour-controls">
              <button
                type="button"
                onClick={prevSlide}
                className="tour-arrow"
                aria-label="Previous screenshot"
              >
                ←
              </button>

              <div className="tour-dots" aria-label="Slide indicators">
                {productTourSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className={`tour-dot ${index === activeSlide ? "active" : ""}`}
                    aria-label={`Go to ${slide.title}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                className="tour-arrow"
                aria-label="Next screenshot"
              >
                →
              </button>
            </div>

            <div className="tour-tabs">
              {productTourSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`tour-tab ${index === activeSlide ? "active" : ""}`}
                >
                  {slide.number} {slide.title}
                </button>
              ))}
            </div>
          </div>

          <div className="tour-preview">
            <div className="preview-panel">
              <span className="preview-label">Live preview</span>
              <p>{currentSlide.imageDescription}</p>

              <div className="phone-frame">
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.imageTitle}
                  width={430}
                  height={932}
                  className="phone-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" id="use-cases">
        <div className="container section-head">
          <span className="eyebrow-pill">Use cases</span>
          <h2>Built around situations people actually face.</h2>
          <p>
            The goal is not to add complexity. It is to make common and
            high-pressure situations easier to navigate.
          </p>
        </div>

        <div className="container use-grid">
          <article className="mini-card">
            <h3>At the doctor</h3>
            <p>
              Show prepared phrases, explain communication needs, and reduce
              repeated typing.
            </p>
          </article>
          <article className="mini-card">
            <h3>At a restaurant</h3>
            <p>
              Save frequent orders, explain preferences, and make ordering feel
              smoother.
            </p>
          </article>
          <article className="mini-card">
            <h3>In conversation</h3>
            <p>
              Listen, reply, and keep the interaction moving with fewer
              barriers.
            </p>
          </article>
          <article className="mini-card">
            <h3>In an emergency</h3>
            <p>
              Bring urgent information, alerts, and emergency phrases forward
              faster.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block section-soft" id="pro">
        <div className="container section-head">
          <span className="eyebrow-pill">Pro features</span>
          <h2>Simple for everyone. More powerful with Pro.</h2>
          <p>
            FistBump Connect includes essential tools for free, with Pro
            unlocking advanced communication features and deeper customization.
          </p>
        </div>

        <div className="container pricing-callout">
          <span className="trial-pill">♛ 7-day free trial</span>
          <p>
            Try Pro first, explore the added tools, and see whether the
            expanded experience fits your everyday communication needs.
          </p>
        </div>

        <div className="container pricing-grid">
          <article className="pricing-card pricing-free">
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

          <article className="pricing-card pricing-pro">
            <div className="pricing-topline">
              <span className="pricing-badge pricing-badge-pro">♛ Pro</span>
              <span className="pricing-chip">Includes 7-day trial</span>
            </div>
            <h3>Advanced tools for deeper daily support</h3>
            <p>
              Unlock more listening, search, customization, and storage
              features for broader everyday use.
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

        <div className="container pricing-note">
          Built to stay useful for free, with Pro unlocking more advanced
          support for people who need it.
        </div>
      </section>

      <section className="section-block" id="values">
        <div className="container values-card">
          <div className="values-main">
            <span className="eyebrow-pill">Built to feel respectful</span>
            <h2>Communication support should lower stress, not add to it.</h2>
            <p>
              FistBump Connect is designed to feel calm in the moment. Clear at
              a glance. Fast when pressure is high. Simple enough to help
              without getting in the way.
            </p>
          </div>

          <div className="values-list">
            <article className="mini-card">
              <h3>Readable first</h3>
              <p>Large, clear content that is easy to understand quickly.</p>
            </article>
            <article className="mini-card">
              <h3>Fast under pressure</h3>
              <p>
                Built for real situations where hesitation can make things
                harder.
              </p>
            </article>
            <article className="mini-card">
              <h3>Human by default</h3>
              <p>
                Designed to feel supportive, respectful, and calm instead of
                clinical.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block section-soft" id="faq">
        <div className="container section-head">
          <span className="eyebrow-pill">FAQ</span>
          <h2>Questions people may have before downloading the app.</h2>
          <p>
            A few quick answers to help visitors understand how FistBump
            Connect works and what to expect.
          </p>
        </div>

        <div className="container faq-grid">
          <article className="faq-card">
            <h3>Is FistBump Connect free?</h3>
            <p>
              Yes. FistBump Connect includes a free version with essential
              communication tools, with Pro unlocking additional features and
              expanded customization.
            </p>
          </article>
          <article className="faq-card">
            <h3>What does Pro include?</h3>
            <p>
              Pro adds features like the Listen tab, sound alerts, all
              built-in places, search inside places, custom locations, and
              unlimited saved items and phrases.
            </p>
          </article>
          <article className="faq-card">
            <h3>Is there a free trial for Pro?</h3>
            <p>
              Yes. Pro includes a 7-day free trial so users can explore the
              expanded feature set before deciding.
            </p>
          </article>
          <article className="faq-card">
            <h3>Will FistBump Connect be available on iPhone?</h3>
            <p>
              Yes. The website is designed around the upcoming iPhone launch
              and App Store release.
            </p>
          </article>
          <article className="faq-card">
            <h3>Can it help in urgent situations?</h3>
            <p>
              Yes. FistBump Connect includes emergency-focused tools designed to
              make urgent communication faster and clearer.
            </p>
          </article>
          <article className="faq-card">
            <h3>How can I get support?</h3>
            <p>
              You can reach out with support questions, accessibility
              feedback, or general inquiries at support@fistbumpconnect.com.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block" id="support">
        <div className="container support-grid">
          <article className="support-card">
            <span className="eyebrow-pill">Customer support</span>
            <h3>Need help or have a question?</h3>
            <p>
              Reach out for support, app questions, accessibility feedback, or
              general inquiries.
            </p>
            <a href="mailto:support@fistbumpconnect.com" className="support-email">
              support@fistbumpconnect.com
            </a>
            <p className="support-note">
              We welcome support questions and accessibility feedback.
            </p>
          </article>

          <article className="support-card support-card-highlight">
            <span className="eyebrow-pill">Support the team</span>
            <h3>Help support future development.</h3>
            <p>
              If you believe in tools that make communication more accessible,
              your support helps fund continued design, polish, and future
              FistBump Connect updates.
            </p>
            <a
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Support the Team
            </a>
          </article>
        </div>
      </section>

      <section className="section-block section-soft" id="download">
        <div className="container cta-card cta-card-compact">
          <div className="cta-glow cta-glow-left" />
          <div className="cta-glow cta-glow-right" />

          <div className="cta-inner">
            <div className="cta-logo-badge">
              <Image
                src="/icon.jpeg"
                alt="FistBump Connect logo"
                width={40}
                height={40}
                className="cta-logo-image"
              />
              <div className="cta-logo-copy">
                <span className="cta-logo-title">FistBump Connect</span>
                <span className="cta-logo-subtitle">App Store launch soon</span>
              </div>
            </div>

            <span className="cta-launch-pill">Launching soon on the App Store</span>

            <h2>Almost here.</h2>

            <p>
              FistBump Connect is nearly ready to launch and built to make
              communication feel calmer, clearer, and easier from the first tap.
            </p>

            <div className="cta-actions">
              <a href="#" className="primary-button">
                Download Soon
              </a>
              <a href="#features" className="secondary-button">
                View Features
              </a>
            </div>

            <div className="cta-meta">
              <span>Built for iPhone</span>
              <span>7-day Pro trial</span>
              <a
                href={SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Support: support@fistbumpconnect.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Image
              src="/icon.jpeg"
              alt="FistBump Connect logo"
              width={40}
              height={40}
              className="footer-logo"
            />
            <div>
              <strong>FistBump Connect</strong>
              <p>Communication tools that feel calm, clear, and human.</p>
            </div>
          </div>

          <nav className="footer-nav">
            <a href="#features">Features</a>
            <a href="#screens">Screenshots</a>
            <a href="#pro">Pro</a>
            <a href="#faq">FAQ</a>
            <a href="#support">Support</a>
            <a href="#download">Download</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}