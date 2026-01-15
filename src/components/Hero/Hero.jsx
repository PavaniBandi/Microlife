import "./Hero.css";
import Button from "../Button";
import { config } from "../../data/config";

export default function Hero() {
  const { pricing } = config;

  return (
    <section className="hero" id="about">
      <div className="hero__content">
        <div className="hero__pill">Hyd curated microgreens · Fresh weekly</div>
        <h1 className="hero__title">{config.tagline}</h1>
        <p className="hero__lede">
          Microgreens cut the morning of delivery, kept chilled, and dropped at
          your door so your salads, bowls, and smoothies stay vibrant all week.
        </p>
        <div className="hero__actions">
          <Button to="/subscription">Start subscription</Button>
          <Button variant="outline" to="/products">
            View current greens
          </Button>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">
              {pricing.deliveriesPerMonth}
            </span>
            <span className="hero__stat-label">Deliveries / month</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">
              {pricing.currency}
              {pricing.monthly}
            </span>
            <span className="hero__stat-label">Flat monthly plan</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">0</span>
            <span className="hero__stat-label">Pesticides or sprays</span>
          </div>
        </div>
      </div>
      <div className="hero__panel">
        <h3>Why microgreens?</h3>
        <p>
          Young shoots harvested at their nutrient peak. Add them raw for
          crunch, spice, and color.
        </p>
        <div className="hero__tags">
          <span>Antioxidants</span>
          <span>Digestive health</span>
          <span>Immunity</span>
          <span>Plant protein</span>
        </div>
      </div>
    </section>
  );
}
