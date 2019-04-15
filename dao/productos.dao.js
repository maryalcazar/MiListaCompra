var productos = require('../model/productos');
var producto = mongoose.model("Producto", productosSchema);

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
ProductosDAO.saveOne = function (productName) {
        //var obj={nombre:"Huevos"}
        var myData = new Producto(productName);
        productos.save(myData, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            productos.close();
        });
}
module.exports = ProductosDAO;