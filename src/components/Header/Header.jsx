import { Link, useLocation } from "react-router-dom";
import { config, routes } from "../../data/config";
import "./Header.css";

const navItems = [
  { path: routes.home, label: "Home" },
  { path: routes.products, label: "Products" },
  { path: routes.subscription, label: "Subscription" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="header__brand">
        {config.brand}
      </Link>

      <nav className="header__nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`header__link ${
              location.pathname === item.path ? "header__link--active" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
        <a
          href={config.contact.whatsappLink}
          className="header__link header__link--contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </nav>

      {/* Mobile menu button */}
      <button className="header__mobile-toggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
