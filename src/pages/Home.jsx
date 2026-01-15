import { useState } from "react";
import {
  products,
  whyMicrogreens,
  howItWorks,
  trustBadges,
  testimonials,
  faqs,
} from "../data/products";
import { config } from "../data/config";
import "./Home.css";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const { pricing, contact } = config;

  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <div className="header__container">
          <a href="/" className="header__logo">
            <img src="/logo.png" alt="MicroLife - Micro Greens. Massive nutrition. Delivered fresh." />
          </a>
          <nav className="header__nav">
            <a href="#products">Products</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href={contact.whatsappLink} className="btn btn--primary">
            Subscribe Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <span className="hero__badge">Fresh from Hyderabad</span>
            <h1 className="hero__title">
              Living Greens,
              <br />
              <span className="hero__title--accent">Grown for You</span>
            </h1>
            <p className="hero__subtitle">
              Microgreens harvested the morning of delivery. 40x more nutrients
              than mature greens, zero pesticides, at your doorstep weekly.
            </p>
            <div className="hero__cta">
              <a
                href={contact.whatsappLink}
                className="btn btn--primary btn--lg"
              >
                Start Fresh — {pricing.currency}
                {pricing.monthly}/mo
              </a>
              <a href="#products" className="btn btn--outline btn--lg">
                See Our Greens
              </a>
            </div>
            <div className="hero__trust">
              {trustBadges.map((badge) => (
                <div key={badge.title} className="trust-badge">
                  <span className="trust-badge__icon"></span>
                  <div>
                    <strong>{badge.title}</strong>
                    <span>{badge.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=80"
                alt="Fresh microgreens"
                className="hero__image"
              />
              <div className="hero__float-card hero__float-card--1">
                <span className="float-card__value">4</span>
                <span className="float-card__label">Deliveries/month</span>
              </div>
              <div className="hero__float-card hero__float-card--2">
                <span className="float-card__value">0</span>
                <span className="float-card__label">Pesticides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Microgreens */}
      <section className="section section--cream" id="why">
        <div className="container">
          <div className="section__header section__header--center">
            <span className="section__eyebrow">Why Microgreens?</span>
            <h2 className="section__title">Small Greens, Big Nutrition</h2>
            <p className="section__subtitle">
              Harvested at their nutritional peak, microgreens pack more
              vitamins, minerals, and antioxidants than fully grown vegetables.
            </p>
          </div>
          <div className="stats-grid">
            {whyMicrogreens.map((stat) => (
              <div key={stat.title} className="stat-card">
                <span className="stat-card__icon">{stat.icon}</span>
                <h3 className="stat-card__title">{stat.title}</h3>
                <p className="stat-card__desc">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section" id="products">
        <div className="container">
          <div className="section__header section__header--center">
            <span className="section__eyebrow">Our Varieties</span>
            <h2 className="section__title">Fresh Microgreens</h2>
            <p className="section__subtitle">
              Mix and match with each delivery. New varieties added regularly.
            </p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-card__image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-card__tag">{product.tag}</span>
                </div>
                <div className="product-card__content">
                  <h3 className="product-card__name">{product.name}</h3>
                  <p className="product-card__flavor">{product.flavor}</p>
                  <p className="product-card__note">{product.note}</p>
                  <div className="product-card__nutrition">
                    <strong>Nutrition:</strong> {product.nutrition}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section--dark" id="how">
        <div className="container">
          <div className="section__header section__header--center section__header--light">
            <span className="section__eyebrow">How It Works</span>
            <h2 className="section__title">Farm to Door in 4 Steps</h2>
          </div>
          <div className="steps-grid">
            {howItWorks.map((step, index) => (
              <div key={step.step} className="step-card">
                <div className="step-card__number">{step.step}</div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="step-card__connector" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="pricing-wrapper">
            <div className="pricing__content">
              <span className="section__eyebrow">Simple Pricing</span>
              <h2 className="section__title">One Plan, Everything Included</h2>
              <div className="pricing__price">
                <span className="pricing__currency">{pricing.currency}</span>
                <span className="pricing__amount">{pricing.monthly}</span>
                <span className="pricing__period">/month</span>
              </div>
              <ul className="pricing__features">
                <li>
                  <span></span> {pricing.deliveriesPerMonth} weekly deliveries
                </li>
                <li>
                  <span></span> Mix any varieties each week
                </li>
                <li>
                  <span></span> Same-day harvest guarantee
                </li>
                <li>
                  <span></span> Pause or cancel anytime
                </li>
                <li>
                  <span></span> WhatsApp support
                </li>
              </ul>
              <div className="pricing__cta">
                <a
                  href={contact.whatsappLink}
                  className="btn btn--primary btn--lg btn--full"
                >
                  Start My Subscription
                </a>
              </div>
            </div>
            <div className="pricing__image">
              <img
                src="https://images.unsplash.com/photo-1518977676601-b53f82ber3a?auto=format&fit=crop&w=600&q=80"
                alt="Fresh microgreens delivery"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--cream" id="reviews">
        <div className="container">
          <div className="section__header section__header--center">
            <span className="section__eyebrow">Testimonials</span>
            <h2 className="section__title">What Our Customers Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {"".repeat(testimonial.rating)}
                </div>
                <p className="testimonial-card__content">
                  "{testimonial.content}"
                </p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container container--narrow">
          <div className="section__header section__header--center">
            <span className="section__eyebrow">FAQ</span>
            <h2 className="section__title">Common Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${
                  openFaq === index ? "faq-item--open" : ""
                }`}
              >
                <button
                  className="faq-item__question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.question}
                  <span className="faq-item__icon">
                    {openFaq === index ? "" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="faq-item__answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section--cta">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-box__title">Ready for Fresher Greens?</h2>
            <p className="cta-box__subtitle">
              Join hundreds of Hyderabad families enjoying farm-fresh
              microgreens every week.
            </p>
            <div className="cta-box__actions">
              <a href={contact.whatsappLink} className="btn btn--white btn--lg">
                Start on WhatsApp
              </a>
              <a
                href={contact.instagramLink}
                className="btn btn--outline-white btn--lg"
              >
                Follow @{contact.instagram.split("_")[0]}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__brand">
              <span className="footer__logo">{config.brand}</span>
              <p>Living nutrition, grown to order.</p>
            </div>
            <div className="footer__contact">
              <a href={contact.whatsappLink}>WhatsApp</a>
              <a href={contact.instagramLink}>Instagram</a>
            </div>
          </div>
          <div className="footer__bottom">
            <p> 2026 {config.brand}. Made with in Hyderabad.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
