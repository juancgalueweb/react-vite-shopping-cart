import AppWrapper from './components/AppWrapper.jsx'
import Cart from './components/Cart.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Products from './components/Products.jsx'
import { useFilters } from './hooks/useFilters.js'
import mockProducts from './mocks/products.json'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(mockProducts)

  return (
    <AppWrapper>
      <Header />
      <Products products={filteredProducts} />
      <Cart />
      <Footer />
    </AppWrapper>
  )
}

export default App
