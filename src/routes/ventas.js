const express = require ("express");
const ventasSchema = require("../models/ventas");

const router = express.Router(); //constructor

//crear ventas.

router.post('/ventas', (req, res) => {
    const ventas = ventasSchema(req.body);
    ventas
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});

//listar ventas.

router.get('/ventas', (req, res) => {
    ventasSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});

//buscar ventas.

router.get('/ventas/:id', (req, res) => {
    const {id} = req.params;
    ventasSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});

//editar ventas.

router.put('/ventas/:id', (req, res) => {
    const {id} = req.params;
    const {idventa, fecha, producto, cantidad, preciounit, valortotal, cliente, vendedor, estado} = req.body;
    ventasSchema
    .updateOne({_id:id}, {$set:{idventa, fecha, producto, cantidad, preciounit, valortotal, cliente, vendedor, estado}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});

//eliminar ventas.

router.delete('/ventas/:id', (req, res) => {
    const {id} = req.params;
    ventasSchema
    .remove({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}));
});

module.exports = router;