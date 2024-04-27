const express = require("express");
const products = require("../controllers/productController");
const routes = express.Router();

// Ruta para la creación de un producto
routes.post('/product', products.create);

// Ruta para obtener todos los products registrados
routes.get('/products', products.findAll);

// Ruta para obtener un producto en particular
routes.get('/product/:id', products.findOne);

// Ruta para actualizar un producto completo
routes.put('/product/:id', products.update);

// Ruta para borrar un producto en particular
routes.delete('/product/:id', products.delete);

module.exports = routes;