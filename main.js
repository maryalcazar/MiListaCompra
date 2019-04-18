var express = require('express');
var ProductosDAO = require('./dao/productos.dao');


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/compra', {})
    .then(() => {
        console.log('La conexión a MongoDB se ha realizado correctamente!!');
    }).catch(err => console.log(err));

var webServer = express();

webServer.listen(8080);
webServer.use(express.static(__dirname));

var bodyParser = require('body-parser');
webServer.use(bodyParser.json());
webServer.use(bodyParser.urlencoded({ extended: false }));

webServer.get('/lista', function (req, res) {
    ProductosDAO.findAll().then(producto => {
        var responseData = "";
        for (var i = 0; i < producto.length; i++) {
            var productNombre = producto[i]._doc.nombre;
            var productPrice = producto[i]._doc.precio;
            responseData += `<p>${productNombre} ${productPrice}</p>`;
        }
        res.send(responseData);
    }).catch(err => {
        console.error(err);
    });
});

webServer.post('/addname', function (req, res) {
    var productName = req.body.nombre;
    var productPrice = req.body.precio;
    ProductosDAO.saveOne(productName, productPrice);
    res.end();
});

webServer.get('*', function (req, res) {
    res.redirect('/public');
});