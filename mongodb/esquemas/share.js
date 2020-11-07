var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var share = new Schema({
    "clid": String,
    "cli":Object,
    "tipo": String,
    "data":String,
    "fecha": Date,
    "horas": Number
});

module.exports = mongoose.model('share', share);