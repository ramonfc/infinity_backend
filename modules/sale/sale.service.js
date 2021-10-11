(function () {
    'use strict';

    module.exports = {
        createSale: createSale,
        fetchSales: fetchSales,
        fetchSaleById: fetchSaleById,
        updateSale: updateSale,
        deleteSale: deleteSale
    };

    var SaleModel = require('./sale.module')().SaleModel;

    function createSale(Sale) {
        return SaleModel.create(Sale);
    }

    function fetchSales() {
        return SaleModel.find({})
            .exec();
    }

    function fetchSaleById(SaleId) {
        return SaleModel.findById(SaleId)
            .exec();
    }

    function updateSale(SaleId, Sale) {
        return SaleModel
            .findByIdAndUpdate(SaleId, Sale, {new: true})
            .exec();
    }

    function deleteSale(SaleId) {
        return SaleModel
            .findByIdAndRemove(SaleId)
            .exec();
    }

})();