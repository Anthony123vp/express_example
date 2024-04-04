const express = require('express');
const app = express();

// Datos de ejemplo para clientes y productos
const clientes = [
  { nombre: 'Cliente 1', imagen: 'https://via.placeholder.com/150', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { nombre: 'Cliente 2', imagen: 'https://via.placeholder.com/150', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { nombre: 'Cliente 3', imagen: 'https://via.placeholder.com/150', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
];

const productos = [
  { nombre: 'Producto 1', imagen: 'https://via.placeholder.com/150', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { nombre: 'Producto 2', imagen: 'https://via.placeholder.com/150', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { nombre: 'Producto 3', imagen: 'https://via.placeholder.com/150', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
];

// Función para generar tarjetas HTML horizontales con diseño de Bootstrap
function generateHorizontalCard(data) {
  return `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${data.imagen}" class="card-img" alt="${data.nombre}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data.nombre}</h5>
            <p class="card-text">${data.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Ruta para mostrar 3 clientes como tarjetas horizontales
app.get('/clientes', (req, res) => {
  let cards = '';
  clientes.forEach(cliente => {
    cards += generateHorizontalCard(cliente);
  });
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      </head>
      <body>
        <div class="container">
          ${cards}
        </div>
      </body>
    </html>
  `);
});

// Ruta para mostrar 3 productos como tarjetas horizontales
app.get('/productos', (req, res) => {
  let cards = '';
  productos.forEach(producto => {
    cards += generateHorizontalCard(producto);
  });
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      </head>
      <body>
        <div class="container">
          ${cards}
        </div>
      </body>
    </html>
  `);
});

// Iniciar el servidor en el puerto 9000
app.listen(12500, () => {
  console.log('Servidor Express iniciado en el puerto 12500');
});
