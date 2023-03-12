import Filters from './Filters.jsx'

const Header = () => {
  return (
    <header>
      <h1 className='text-center text-xl font-semibold'>
        React shop <span className='ml-2'>🛒</span>
      </h1>
      <Filters />
    </header>
  )
}

export default Header
