var Productos = require('../model/productos');

var ProductosDAO = {};

ProductosDAO.findAll = function () {
    return Productos.find();
}

ProductosDAO.findIdAndRemove = function (productId) {
    return Productos.findByIdAndRemove(productId);
}

ProductosDAO.saveOne = function (productName, productPrice) {
    var newProduct = new Productos({ nombre: productName, precio: productPrice });
    newProduct.save(function (err) {
        if (err) return handleError(err);
        console.log('Saved');
    });
}

module.exports = ProductosDAO;