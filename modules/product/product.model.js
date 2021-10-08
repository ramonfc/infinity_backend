(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var ProductSchema = new Schema({
        sku: {
            type: String,
            required: true
        },
        nombreProducto: {
            type: String,
            required: true
        },
        precioUnitario: {
            type: Number,
            required: true
        },
        estadoProdInv: {
            type: String,
            required: true
        },
        cantidadDisponible: {
            type: Number,
            required: true
        },
        descripcionProducto: String
    });

    module.exports = mongoose.model('products', ProductSchema);
})();