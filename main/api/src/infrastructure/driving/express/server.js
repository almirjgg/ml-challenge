import express from 'express';
import cors from 'cors';
import itemRoutes from './itemRoutes.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('API para Challenge MELI está funcionando!');
});

app.use('/api/items', itemRoutes);

export default app;
