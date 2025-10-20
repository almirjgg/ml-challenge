import { Router } from 'express';
import { getItems, getItemById } from '../../../application/itemService.js';

const router = Router();

// Endpoint para buscar productos
// GET /api/items?q=:query
router.get('/', (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'El parámetro de búsqueda "q" es requerido.' });
  }

  try {
    const results = getItems(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar la búsqueda.' });
  }
});

// Endpoint para obtener el detalle de un producto
// GET /api/items/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  try {
    const item = getItemById(id);
    console.log(item);

    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: 'Producto no encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto.' });
  }
});

export default router;
