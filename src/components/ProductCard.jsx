import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import styles from './ProductCard.module.css'

export default function ProductCard({ product, animationDelay }) {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const isInCart = cartItems.some((item) => item.id === product.id)

  const handleAddToCart = () => {
    dispatch(addToCart(product))
    alert(`${product.title} added to cart!`)
  }

  return (
    <div className={styles.card} style={{ animationDelay: `${animationDelay}s` }}>
      <div className={styles.imgWrap}>
        <img src={product.img} alt={product.title} />
        <div className={styles.badge}>{product.badge}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.category}>{product.category}</div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.desc}>{product.desc}</div>
        <div className={styles.footer}>
          <span className={styles.price}>{product.price}</span>
          <button
            className={`${styles.btnCart} ${isInCart ? styles.inCart : ''}`}
            onClick={handleAddToCart}
          >
            {isInCart ? '✓ In Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}
