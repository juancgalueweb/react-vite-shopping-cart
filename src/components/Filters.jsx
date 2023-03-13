import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'
import { useGetProducts } from '../hooks/useGetProducts.js'

const Filters = () => {
  const { filters, setFilters, categoryArray } = useFilters()
  const { maxPrice } = useGetProducts()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = e => {
    setFilters(prevState => ({ ...prevState, minPrice: e.target.value }))
  }

  // Cuando se cambia la categoría, vuelvo a colocar el filtro del precio mínimo a cero
  const handleChangeCategory = e => {
    setFilters({ category: e.target.value, minPrice: 0 })
  }

  return (
    <section className='flex justify-between items-center my-10'>
      <div className='flex items-center gap-4'>
        <label
          htmlFor={minPriceFilterId}
          className='inline text-sm font-medium text-gray-900'
        >
          Price starting from
        </label>
        <input
          id={minPriceFilterId}
          type='range'
          min='0'
          max={maxPrice}
          value={filters.minPrice}
          className='w-48 h-2 bg-gray-200 rounded-lg cursor-pointer'
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div className='flex items-center gap-4'>
        <label
          htmlFor={categoryFilterId}
          className='inline text-sm font-medium text-gray-900'
        >
          Categories
        </label>
        <select
          id={categoryFilterId}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-48 p-1.5'
          onChange={handleChangeCategory}
        >
          <option value='all'>All</option>
          {categoryArray.map(category => {
            return (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            )
          })}
        </select>
      </div>
    </section>
  )
}

export default Filters
