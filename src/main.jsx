import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartProvider } from './contexts/cart.jsx'
import { FiltersProvider } from './contexts/filters.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </FiltersProvider>
)
