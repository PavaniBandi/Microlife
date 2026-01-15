import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { name, image, flavor, nutrition, benefits } = product;

  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__name">{name}</h3>
        <ul className="product-card__details">
          <li>
            <strong>Flavour:</strong> {flavor}
          </li>
          <li>
            <strong>Nutrition:</strong> {nutrition}
          </li>
          <li>
            <strong>Benefits:</strong> {benefits}
          </li>
        </ul>
      </div>
    </article>
  );
}
