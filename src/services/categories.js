export const categories = async () => {
  try {
    const categories = await fetch(
      'https://fakestoreapi.com/products/categories'
    ).then(res => res.json())
    console.log('Búsqueda de categorías realizada con éxito')
    return categories
  } catch (error) {
    throw new Error('Error al buscar las categorías en la API de fakestoreapi')
  }
}
