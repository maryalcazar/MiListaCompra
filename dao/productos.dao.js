var Productos = require('../model/productos');

var ProductosDAO = {};

ProductosDAO.findAll = function () {
    return Productos.find();
}
ProductosDAO.saveOne = function (productName) {
    var newProduct = new Productos({ nombre: productName });
    newProduct.save(function (err) {
        if (err) return handleError(err);
        console.log('Saved');
    });
}
module.exports = ProductosDAO;