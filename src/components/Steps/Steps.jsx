import "./Steps.css";

export default function Steps({ steps, className = "" }) {
  return (
    <div className={`steps ${className}`}>
      {steps.map((step, idx) => (
        <div className="step" key={step.title || idx}>
          <div className="step__index">0{idx + 1}</div>
          <h3 className="step__title">{step.title || step.t}</h3>
          <p className="step__description">{step.blurb || step.d}</p>
        </div>
      ))}
    </div>
  );
}
