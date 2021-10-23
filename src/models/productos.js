const mongoose = require ("mongoose");

const productosSchema = mongoose.Schema({
    sku: {
        type: Number,
        required: true,
    },
    producto: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('productos', productosSchema);