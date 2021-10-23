const mongoose = require ("mongoose");

const ventasSchema = mongoose.Schema({
    idventa: {
        type: Number,
        required: true,
    },
    fecha: {
        type: String,
        required: true,
    },
    producto: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    preciounit: {
        type: Number,
        required: true,
    },
    valortotal: {
        type: Number,
        required: true,
    },
    cliente: {
        type: String,
        required: true,
    },
    vendedor: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('ventas', ventasSchema);