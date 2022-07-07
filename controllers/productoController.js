const Producto = require('../models/Producto')

// alta de Producto
exports.crearProducto = async (req, res) => {
    try {
        //Nuevo Producto 
        const producto = new Producto(req.body);
        // Guardar Producto
        await producto.save();
        // respuesta 
        res.send("producto creado Correctamente")
    } catch (error) {
        console.log(error);
        res.status(400).send("Hubo un error")
    }
}


// Obtener lista de productos
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.send(productos)
    } catch (error) {
        console.log(error);
        res.status(400).send("Hubo un error")
    }
}

//  obtener un producto por id
exports.obtenerProducto = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id)
        res.send(producto);
        console.log("producto encontrado")
    } catch (error) {
        console.log(error);
        res.status(400).send("Hubo un error")
    }
}

// modificar datos de un producto
exports.modificarProducto = async (req, res) => {
    try {
        // Buscamos cual es el meme que queremos modificar. 
        const producto = await Producto.findById(req.params.id);
        // VALIDACIÓN(evitar actualizar nuestra base de dato con datos vacios)
        if (req.body.hasOwnProperty('titulo')) {
            producto.titulo = req.body.titulo;
        }
        if (req.body.hasOwnProperty('imagen')) {
            producto.imagen = req.body.imagen;
        }
        if (req.body.hasOwnProperty('descripcion')) {
            producto.descripcion= req.body.descripcion;
        }
        producto.save();
        res.send(producto);
        console.log("producto actualizado")
    } catch (error) {
        console.log(error);
        res.status(400).send("Hubo un error")
    }
}

//borrar un producto
exports.borrarProducto = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id)
        res.send("producto eliminado");
        console.log("producto borrado");
    } catch (error) {
        console.log(error);
        res.status(400).send("Hubo un error")
    }
}