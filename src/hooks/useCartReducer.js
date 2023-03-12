import { useReducer } from 'react'
import {
  cartInitialState,
  cartReducer,
  CART_ACTIONS_TYPES
} from '../reducers/cart.js'

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product =>
    // @ts-ignore
    dispatch({
      type: CART_ACTIONS_TYPES.ADD_TO_CART,
      payload: product
    })

  const substractFromCart = product =>
    // @ts-ignore
    dispatch({
      type: CART_ACTIONS_TYPES.SUBSTRACT_FROM_CART,
      payload: product
    })

  const removeFromCart = product =>
    // @ts-ignore
    dispatch({
      type: CART_ACTIONS_TYPES.REMOVE_FROM_CART,
      payload: product
    })

  const clearCart = () =>
    // @ts-ignore
    dispatch({
      type: CART_ACTIONS_TYPES.CLEAR_CART
    })
  return { state, addToCart, substractFromCart, removeFromCart, clearCart }
}
