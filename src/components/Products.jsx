import { PRODUCTS } from '../data'
import ProductCard from './ProductCard'
import styles from './Products.module.css'

const DELAYS = [0, 0.1, 0.2, 0.15, 0.25, 0.3]

export default function Products() {
  return (
    <section id="products" className={styles.products}>
      <div className="section-inner">
        <div className="section-header">
          <span className="tag">Traditional Crafts</span>
          <h2>Explore Indian Heritage</h2>
          <p>Handmade creations from different regions of India.</p>
        </div>

        <div className={styles.grid}>
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} animationDelay={DELAYS[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
