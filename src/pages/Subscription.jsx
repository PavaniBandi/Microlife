import { Section, Button, Steps } from "../components";
import { config } from "../data/config";
import "./Subscription.css";

const subscriptionSteps = [
  { title: "Seed-to-order", blurb: "Your trays start after you join." },
  {
    title: "Harvest mornings",
    blurb: "Cut and chilled, then out for delivery.",
  },
  { title: "Weekly rotation", blurb: "Swap varieties or pause anytime." },
];

export default function Subscription() {
  const { pricing, contact } = config;

  return (
    <div className="page">
      <Section>
        <Section.Header
          eyebrow="Subscriptions"
          title="Stay stocked without thinking"
          subtitle="Pause anytime. Swap varieties weekly. Home delivery across Hyderabad."
        />

        {/* Pricing Plan Card */}
        <div className="plan">
          <div className="plan__info">
            <div className="plan__label">Home plan · Hyderabad</div>
            <div className="plan__price">
              {pricing.currency}
              {pricing.monthly} <span>/ month</span>
            </div>
            <p className="plan__meta">
              {pricing.deliveriesPerMonth} chilled deliveries · pick 1–2 boxes
              each drop
            </p>
            <ul className="list list--tight plan__features">
              <li>Same-day harvest, refrigerated transit</li>
              <li>Reusable containers with rinse-and-return</li>
              <li>Flexible: pause, skip, or swap varieties</li>
            </ul>
          </div>
          <div className="plan__actions">
            <Button href={contact.whatsappLink} external>
              Start my subscription
            </Button>
            <Button variant="ghost" to="/products">
              Browse greens
            </Button>
          </div>
        </div>

        {/* How it works */}
        <Section className="process">
          <Section.Header
            eyebrow="How it works"
            title="Simple delivery rhythm"
          />
          <Steps steps={subscriptionSteps} />
        </Section>
      </Section>
    </div>
  );
}
