const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim:true,
    }, 
    descripcion: {
        type: String,
        required: true,
        trim:true,
    },
    imagen: {
        type: String,
        required: true,
        trim:true,
    }, 
})

module.exports = mongoose.model("Producto", ProductoSchema);