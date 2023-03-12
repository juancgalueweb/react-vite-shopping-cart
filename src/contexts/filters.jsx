import { createContext, useState } from 'react'

// Este es el que tenemos que consumir
const FiltersContext = createContext()

// Este es el que nos brinda acceso al contexto
const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export { FiltersContext, FiltersProvider }
