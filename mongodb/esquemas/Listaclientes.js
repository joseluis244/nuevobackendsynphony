var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listaclientes = new Schema({
    "nombre": String,
    "area": String,
    "correo": String,
    "prefijo": String,
    "telefono": String,
});

module.exports = mongoose.model('listaclientes', listaclientes);