import { BsFillCartPlusFill, BsFillCartXFill } from 'react-icons/bs'
import { useCart } from '../hooks/useCart.js'

const Products = ({ products }) => {
  const { addToCart, removeFromCart, cart } = useCart()
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='w-full flex justify-center items-center'>
      <ul className='grid grid-cols-fluid gap-6'>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li
              key={product.id}
              className='flex flex-col justify-between gap-4 rounded text-gray-800 p-4 shadow items-center'
            >
              <div>
                <img
                  src={product.image}
                  alt={`Image from ${product.title}`}
                  className='rounded mx-auto mb-2 w-[180px] h-auto'
                />
                <strong className='text-center'>{product.title}</strong> - $
                {product.price}
              </div>
              <div>
                <button
                  type='button'
                  className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 block'
                  style={
                    isProductInCart
                      ? { backgroundColor: 'rgb(239 68 68)' }
                      : { backgroundColor: 'rgb(14 165 233)' }
                  }
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {isProductInCart ? (
                    <BsFillCartXFill className='text-xl' />
                  ) : (
                    <BsFillCartPlusFill className='text-xl' />
                  )}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Products
