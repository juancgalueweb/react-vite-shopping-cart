import { useContext } from 'react'
import { FiltersContext } from '../contexts/filters.jsx'

export function useFilters() {
  // Vamos a filtrar los productos por categoria y precio
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = products => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  return { filterProducts, setFilters, filters }
}
