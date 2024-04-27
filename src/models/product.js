const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        precio: {
            type: Number
        },
        descripcion: {
            type: String
        },
        dimensiones: {
            type: Map,
            of: String
        },
        proveedor: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Producto", ProductSchema);
