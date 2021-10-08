(function () {
    'use strict';

    module.exports = {
        createProduct: createProduct,
        fetchProducts: fetchProducts,
        fetchProductById: fetchProductById,
        updateProduct: updateProduct,
        deleteProduct: deleteProduct
    };

    var ProductModel = require('./product.module')().ProductModel;

    function createProduct(Product) {
        return ProductModel.create(Product);
    }

    function fetchProducts() {
        return ProductModel.find({})
            .exec();
    }

    function fetchProductById(ProductId) {
        return ProductModel.findById(ProductId)
            .exec();
    }

    function updateProduct(ProductId, Product) {
        return ProductModel
            .findByIdAndUpdate(ProductId, Product, {new: true})
            .exec();
    }

    function deleteProduct(ProductId) {
        return ProductModel
            .findByIdAndRemove(ProductId)
            .exec();
    }

})();