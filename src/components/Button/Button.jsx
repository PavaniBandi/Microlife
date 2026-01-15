import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  href,
  to,
  external = false,
  className = "",
  ...props
}) {
  const baseClass = `btn btn--${variant} ${className}`.trim();

  // Internal link (React Router)
  if (to) {
    return (
      <Link to={to} className={baseClass} {...props}>
        {children}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a
        href={href}
        className={baseClass}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Button
  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}
