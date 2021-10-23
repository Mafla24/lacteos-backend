const express = require ("express");
const productosSchema = require("../models/productos");

const router = express.Router(); //constructor

//crear productos

router.post('/productos', (req, res) => {
    const productos = productosSchema(req.body);
    productos
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});

//listar productos

router.get('/productos', (req, res) => {
    productosSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});

//buscar productos

router.get('/productos/:id', (req, res) => {
    const {id} = req.params;
    productosSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});

//editar productos

router.put('/productos/:id', (req, res) => {
    const {id} = req.params;
    const {sku, producto, descripcion, valor} = req.body;
    productosSchema
    .updateOne({_id:id}, {$set:{sku, producto, descripcion, valor}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});

//eliminar producto

router.delete('/productos/:id', (req, res) => {
    const {id} = req.params;
    productosSchema
    .remove({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});

module.exports = router;