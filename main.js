var express = require('express');
var ProductosDAO = require('./dao/productos.dao');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/compra', {})
    .then(() => {
        console.log('La conexiÃ³n a MongoDB se ha realizado correctamente!!');
    }).catch(err => console.log(err));

var webServer = express();
webServer.listen(8080);
webServer.use(express.static(__dirname));
webServer.get('/lista', function (req, res) {
    var result = ProductosDAO.findAll();
    res.send(result);
});
webServer.get('*', function (req, res) {
    res.redirect('/style/html');
});

//guarda productos
/*webServer.post('/Add', (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
        res.send("item saved to database");
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    });
});*/