# Challenge Técnico Frontend - Mercado Libre

Este repositorio contiene la solución al challenge técnico para la posición de Frontend Developer en Mercado Libre. La aplicación es una simulación simplificada del flujo de búsqueda de productos, mostrando una lista de resultados y el detalle de un producto específico.

## Estructura del Proyecto: Monorepo

Este proyecto está configurado como un **monorepo** utilizando **npm Workspaces**. Esta estructura fue elegida para centralizar la gestión de ambos proyectos (frontend y backend) en un solo repositorio, facilitando la instalación de dependencias, la ejecución de comandos y un futuro despliegue.

El monorepo contiene dos paquetes principales:

- `main/api`: Un servidor backend en **Node.js con Express**, encargado de servir los datos mockeados.

- `main/front`: La aplicación cliente desarrollada en **React con Vite y TypeScript**.

## Cómo Ejecutar el Proyecto

Sigue estos pasos para levantar el entorno de desarrollo completo.

### Pre-requisitos

- **Node.js**: Versión `20.x` o superior.

- **npm**: Versión `8.x` o superior (para el soporte de workspaces).

### 1\. Instalación

Clona el repositorio y, desde la carpeta raíz del proyecto (`Ml/`), ejecuta el siguiente comando. Este instalará todas las dependencias tanto del proyecto raíz como de los workspaces (`api` y `front`) de una sola vez.

```
npm install

```

### 2\. Iniciar el Entorno de Desarrollo

Desde la raíz del monorepo, ejecuta el siguiente comando para iniciar tanto el servidor de la API como la aplicación de React en modo de desarrollo simultáneamente:

```
npm start

```

Esto levantará:

- **API Server**: En `http://localhost:3001`

- **Frontend App**: En `http://localhost:5173` (o el puerto que Vite asigne).

La aplicación de React ya está configurada con un proxy para redirigir las llamadas de `/api` al servidor, evitando problemas de CORS.

para probar la funcionalidad por ahora puede buscar con los terminos de busqued de prueba por nombre

```
iphone
samsung
ipod
celulares
smartphones
celulares
```

### 3\. Ejecutar los Tests

#### Tests Unitarios (Jest)

Para ejecutar los tests unitarios del frontend, utiliza el siguiente comando desde la raíz del monorepo:

```
npm run test:front

```

#### Tests End-to-End (Cypress)

Para ejecutar los tests E2E, asegúrate de que la aplicación esté corriendo (`npm start`) y, en una terminal separada, ejecuta:

```
npm run e2e

```
