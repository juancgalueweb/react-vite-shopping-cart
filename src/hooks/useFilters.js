import { useContext, useEffect, useState } from 'react'
import { FiltersContext } from '../contexts/filters.jsx'
import { categories } from '../services/categories.js'

export function useFilters() {
  // Vamos a filtrar los productos por categoria y precio
  const { filters, setFilters } = useContext(FiltersContext)
  const [categoryArray, setCategoryArray] = useState([])

  const getCategories = async () => {
    try {
      const newCategories = await categories()
      setCategoryArray(newCategories)
    } catch (error) {
      throw new Error('Error al usar el servicio de búsqueda de categorías')
    }
  }

  useEffect(() => {
    getCategories()
  }, [])
  const filterProducts = products => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  return { filterProducts, setFilters, filters, categoryArray }
}
