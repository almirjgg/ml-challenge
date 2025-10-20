import itemRepository from '../infrastructure/driving/mock-db/itemRepository.js';

const author = {
  name: 'almir',
  lastname: 'garcia',
};

/**
 * Busca items basados en una query.
 * @param {string} query - El término de búsqueda.
 * @returns {Object} - Un objeto con los resultados de la búsqueda.
 */
export const getItems = query => {
  const items = itemRepository.search(query);
  const categories = items.length > 0 ? ['Tecnología', 'Celulares', 'Smartphones'] : [];

  return {
    author,
    categories,
    items: items.slice(0, 4),
  };
};

/**
 * Obtiene un item por su ID.
 * @param {string} id - El ID del producto.
 * @returns {Object} - Un objeto con el detalle del item.
 */
export const getItemById = id => {
  const item = itemRepository.findById(id);
  if (!item) {
    return null;
  }

  return {
    author,
    item,
  };
};
