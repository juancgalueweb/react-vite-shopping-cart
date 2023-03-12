import { useId } from 'react'
import { BsCartCheckFill, BsFillCartXFill } from 'react-icons/bs'
import { useCart } from '../hooks/useCart.js'
import styles from '../styles/Cart.module.css'

const Cart = () => {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, substractFromCart } = useCart()

  function CartItem({
    image,
    title,
    price,
    quantity,
    addToCart,
    substractFromCart
  }) {
    return (
      <li>
        <img
          src={image}
          alt={`image of ${title}`}
          className='my-2 w-[180px] h-auto'
        />
        <div className='mb-2'>
          <strong>{title}</strong> - ${price}
        </div>
        <footer>
          <small>Qty: {quantity}</small>
          <button className='text-slate-100 bg-emerald-500' onClick={addToCart}>
            +
          </button>
          <button
            className='text-slate-100 bg-red-500'
            onClick={substractFromCart}
          >
            -
          </button>
        </footer>
      </li>
    )
  }
  return (
    <>
      <label htmlFor={cartCheckboxId} className={styles['cart-button']}>
        <BsCartCheckFill className='text-2xl' />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />
      <aside className={styles.cart}>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              substractFromCart={() => substractFromCart(product)}
              {...product}
            />
          ))}
        </ul>
        <div className='flex justify-center items-center'>
          <button
            className='bg-gray-800 px-4 py-3 mt-4 rounded-md text-slate-100'
            onClick={clearCart}
          >
            <BsFillCartXFill className='text-xl' />
          </button>
        </div>
      </aside>
    </>
  )
}

export default Cart
