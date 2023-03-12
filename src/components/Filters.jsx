import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'

const Filters = () => {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = e => {
    setFilters(prevState => ({ ...prevState, minPrice: e.target.value }))
  }

  const handleChangeCategory = e => {
    setFilters(prevState => ({ ...prevState, category: e.target.value }))
  }

  return (
    <section className='flex justify-between items-center my-10'>
      <div className='flex items-center gap-4'>
        <label
          htmlFor={minPriceFilterId}
          className='inline text-sm font-medium text-gray-900'
        >
          Precio a partir de
        </label>
        <input
          id={minPriceFilterId}
          type='range'
          min='0'
          max='1000'
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
          Categoría
        </label>
        <select
          id={categoryFilterId}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-48 p-1.5'
          onChange={handleChangeCategory}
        >
          <option value='all'>Todas</option>
          <option value='electronics'>Equipos electrónicos</option>
          <option value='jewelery'>Joyas</option>
          <option value="men's clothing">Ropa de caballero</option>
          <option value="women's clothing">Ropa de dama</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
