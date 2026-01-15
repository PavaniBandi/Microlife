import "./Card.css";

export default function Card({
  children,
  variant = "default",
  className = "",
  hoverable = true,
  ...props
}) {
  const classes = [
    "card",
    `card--${variant}`,
    hoverable && "card--hoverable",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes} {...props}>
      {children}
    </article>
  );
}

// Sub-components for flexible composition
Card.Header = function CardHeader({ children, className = "" }) {
  return <div className={`card__header ${className}`}>{children}</div>;
};

Card.Body = function CardBody({ children, className = "" }) {
  return <div className={`card__body ${className}`}>{children}</div>;
};

Card.Title = function CardTitle({ children, as: Tag = "h3", className = "" }) {
  return <Tag className={`card__title ${className}`}>{children}</Tag>;
};

Card.Chip = function CardChip({ children, className = "" }) {
  return <span className={`card__chip ${className}`}>{children}</span>;
};

Card.Note = function CardNote({ children, className = "" }) {
  return <p className={`card__note ${className}`}>{children}</p>;
};
