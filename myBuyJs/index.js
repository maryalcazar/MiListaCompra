var express = require('express');
var mongoose = require('mongoose');
var productos = require('../myBuyJs/model/productos');
// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;
// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect('mongodb://localhost:27017/compra', {})
    .then(() => {
            // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log('La conexión a MongoDB se ha realizado correctamente!!');
    })
    .catch(err => console.log(err));
    // Si no se conecta correctamente escupimos el error

var webServer = express();
webServer.listen(8080);
webServer.use(express.static(__dirname));
webServer.get('/lista', function (req, res) {
    productos.find().then(producto => {
        var responseData = "";
        for(var i=0; i<producto.length; i++){
            var productNombre = producto[i]._doc.nombre;
            responseData += `<p>${productNombre}</p>`;
        }
        res.send(responseData);
      })
      .catch(err => {
        console.error(err);
      })
});
webServer.get('*', function (req, res) {
    res.redirect('/style/html');
});