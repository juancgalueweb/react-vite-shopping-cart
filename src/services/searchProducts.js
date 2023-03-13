export const searchProducts = async () => {
  try {
    const products = await fetch('https://fakestoreapi.com/products').then(
      res => res.json()
    )
    console.log('Búsqueda de productos realizada con éxito')
    return products
  } catch (error) {
    throw new Error('Error al buscar los productos en la API de fakestoreapi')
  }
}
