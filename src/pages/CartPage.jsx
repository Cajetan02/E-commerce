import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity, clearCart } from '../redux/cartSlice'
import styles from '../styles/cart.module.css'

export default function CartPage() {
  const dispatch = useDispatch()
  const { items, totalPrice, totalItems } = useSelector((state) => state.cart)

  if (items.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h1>Your Cart is Empty</h1>
        <p>Start shopping to add items to your cart!</p>
      </div>
    )
  }

  return (
    <div className={styles.cartContainer}>
      <h1>Shopping Cart</h1>
      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.img} alt={item.title} />
              <div className={styles.itemDetails}>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
              <div className={styles.itemQuantity}>
                <button 
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch(updateQuantity({id: item.id, quantity: item.quantity - 1}))
                    } else {
                      dispatch(removeFromCart(item.id))
                    }
                  }}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => dispatch(updateQuantity({id: item.id, quantity: item.quantity + 1}))}
                >
                  +
                </button>
              </div>
              <button
                className={styles.removeBtn}
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className={styles.cartSummary}>
          <h2>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span>Items:</span>
            <span>{totalItems}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Subtotal:</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping:</span>
            <span>₹100</span>
          </div>
          <div className={styles.total}>
            <span>Total:</span>
            <span>₹{(totalPrice + 100).toFixed(2)}</span>
          </div>
          <button className={styles.checkoutBtn}>Proceed to Checkout</button>
          <button
            className={styles.clearBtn}
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  )
}
