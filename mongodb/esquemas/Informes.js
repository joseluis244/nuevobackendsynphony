var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var informes = new Schema({
    "ID": Number,
    "FECHA": Date,
    "NOMBRE":String,
    "SEXO": String,
    "PAS_ID": String,
    "MODALIDAD": String,
    "INFORME": {
        "FECHA": Date,
        "NOMBRE": String
    }
});

module.exports = mongoose.model('informes', informes);