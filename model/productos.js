let mongoose = require('mongoose')
let productosSchema = new mongoose.Schema({
  nombre: String
})
module.exports = mongoose.model('Producto', productosSchema);