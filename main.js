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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
var producto = mongoose.model("Producto", productosSchema);

webServer.get('/lista', function (req, res) {
    var result = ProductosDAO.findAll();
    res.send(result);
});

webServer.post('/addname', function (req, res) {
    var productName = req.body.nombre;
    ProductosDAO.saveOne(productName);
});

webServer.get('*', function (req, res) {
    res.redirect('/style/html');
});


