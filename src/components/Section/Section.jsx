import "./Section.css";

export default function Section({
  children,
  id,
  variant = "default",
  className = "",
  ...props
}) {
  const classes = [
    "section",
    variant !== "default" && `section--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes} {...props}>
      {children}
    </section>
  );
}

Section.Header = function SectionHeader({
  children,
  eyebrow,
  title,
  subtitle,
  action,
  className = "",
}) {
  return (
    <div className={`section__header ${className}`}>
      <div>
        {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
        {title && <h2 className="section__title">{title}</h2>}
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
        {children}
      </div>
      {action && <div className="section__action">{action}</div>}
    </div>
  );
};

Section.Grid = function SectionGrid({
  children,
  columns = "auto",
  className = "",
}) {
  return (
    <div className={`section__grid section__grid--${columns} ${className}`}>
      {children}
    </div>
  );
};
