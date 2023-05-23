import AppWrapper from './components/AppWrapper.jsx'
import Cart from './components/Cart.jsx'
import Header from './components/Header.jsx'
import Products from './components/Products.jsx'
import { useGetProducts } from './hooks/useGetProducts.js'

function App() {
  const { loading, filteredProducts } = useGetProducts()

  return (
    <AppWrapper>
      <Header />
      {loading ? (
        <p className='text-center text-3xl text-red-500 mb-4'>Loading...</p>
      ) : (
        <Products products={filteredProducts} />
      )}
      <Cart />
    </AppWrapper>
  )
}

export default App
