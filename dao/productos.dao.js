var productos = require('../model/productos');

var ProductosDAO = {};

ProductosDAO.findAll = function () {
    productos.find().then(producto => {
        var responseData = "";
        for (var i = 0; i < producto.length; i++) {
            var productNombre = producto[i]._doc.nombre;
            responseData += `<p>${productNombre}</p>`;
        }
        return responseData;
    }).catch(err => {
        console.error(err);
    })
}
ProductosDAO.saveOne = function (productData) {

}
module.exports = ProductosDAO;