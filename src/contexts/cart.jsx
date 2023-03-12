import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer.js'

const CartContext = createContext()

function CartProvider({ children }) {
  const { state, addToCart, substractFromCart, removeFromCart, clearCart } =
    useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
        substractFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
