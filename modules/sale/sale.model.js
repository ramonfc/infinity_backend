(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var SaleSchema = new Schema({
        idVendedor: {
            type: String,
            required: true
        },
        nombreVendedor: {
            type: String,
            required: true
        },
        valorTotal: {
            type: Number,
            required: true
        },
        estadoSale: {
            type: String,
            required: true
        },
        idCliente: {
            type: String,
            required: true
        },
        nombreCliente: {
            type: String,
            required: true
        },
        fechaSale: {
            type: String,
            required: true
        },
        fechaEnvio: {
            type: String,
            required: true
        },
        fechaEntrega: {
            type: String,
            required: true
        },

        
        productos:[{
            sku: String,
            nombre: String,
            descripcion: String,
            cantidad: Number,
            estado: String,
            ubicacion: String
        }]

        
    });

    module.exports = mongoose.model('sales', SaleSchema);
})();


