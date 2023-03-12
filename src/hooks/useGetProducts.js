import { useEffect, useState } from 'react'
import { searchProducts } from '../services/searchProducts.js'
import { useFilters } from './useFilters.js'

export function useGetProducts() {
  const { filterProducts } = useFilters()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const getProducts = async () => {
    try {
      setLoading(true)
      const newProducts = await searchProducts()
      setProducts(newProducts)
    } catch (error) {
      throw new Error('Error al usar el servicio de búsqueda de productos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  const filteredProducts = filterProducts(products)

  return { filteredProducts, loading }
}
