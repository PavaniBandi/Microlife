import { Section, ProductCard } from '../components'
import { products } from '../data/products'
import './Products.css'

export default function Products() {
  return (
    <div className="page">
      <Section>
        <Section.Header
          eyebrow="Catalog"
          title="Our Microgreens"
          subtitle="Mix and match any box. Ask for a tasting if you're new."
        />
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>
    </div>
  )
}
