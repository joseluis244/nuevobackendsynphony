var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarios = new Schema({
    "DATOS": {
        "NOMBRE": String,
        "APELLIDO": String,
        "PREFIJO":Number,
        "TELEFONO": Number,
        "CORREO": String
    },
    "LOGIN":{
        "USUARIO": String,
        "PASSWORD": String
    },
    "CONFIGURACION":{
        "LISTABLE": Boolean,
        "RESTRINGIDO": Boolean,
        "TIPO": String,
        "ESTADO": String,
        "FECHACREACION": Date,
        "ULTIMOACCESO": Date
    },
    "LISTA": Array
});

module.exports = mongoose.model('usuarios', usuarios);