import { createSlice } from '@reduxjs/toolkit'

// Helper: Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('karigarCart')
    return savedCart ? JSON.parse(savedCart) : null
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error)
    return null
  }
}

// Helper: Save cart to localStorage
const saveCartToStorage = (state) => {
  try {
    localStorage.setItem('karigarCart', JSON.stringify({
      items: state.items,
      totalPrice: state.totalPrice,
      totalItems: state.totalItems,
    }))
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error)
  }
}

// Load initial state from localStorage or use default
const initialState = loadCartFromStorage() || {
  items: [],
  totalPrice: 0,
  totalItems: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existingItem = state.items.find((item) => item.id === product.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...product, quantity: 1 })
      }

      state.totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0)
      state.totalPrice = state.items.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('₹', '').replace(',', ''))
        return acc + (price * item.quantity)
      }, 0)
      
      saveCartToStorage(state)
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0)
      state.totalPrice = state.items.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('₹', '').replace(',', ''))
        return acc + (price * item.quantity)
      }, 0)
      
      saveCartToStorage(state)
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      
      // Remove item if quantity is 0 or less
      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        const item = state.items.find((item) => item.id === id)
        if (item) {
          item.quantity = quantity
        }
      }
      
      // Recalculate totals
      state.totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0)
      state.totalPrice = state.items.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('₹', '').replace(',', ''))
        return acc + (price * item.quantity)
      }, 0)
      
      saveCartToStorage(state)
    },

    clearCart: (state) => {
      state.items = []
      state.totalPrice = 0
      state.totalItems = 0
      
      saveCartToStorage(state)
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
