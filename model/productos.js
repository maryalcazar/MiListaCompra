let mongoose = require('mongoose')
let productosSchema = new mongoose.Schema({
  nombre: String,
  precio: String
})
module.exports = mongoose.model('Producto', productosSchema);