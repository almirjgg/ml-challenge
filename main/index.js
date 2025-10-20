import server from './api/src/infrastructure/driving/express/server.js';

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`[API] Servidor corriendo en el puerto ${PORT}`);
});
