export const searchProducts = async () => {
  try {
    const products = await fetch('https://fakestoreapi.com/products').then(
      res => res.json()
    )
    return products
  } catch (error) {
    throw new Error('Error al buscar los productos en la API de fakestoreapi')
  }
}
