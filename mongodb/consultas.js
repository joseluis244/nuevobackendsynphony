const mongoose = require('mongoose');

const Informes = require("./esquemas/Informes");
mongoose.connect('mongodb://localhost/medpacs', {useNewUrlParser: true});
const mongodb = mongoose.connection;


function existeinforme(ID){
    return new Promise((Pres,Prej)=>{
        let ret = {existe:false,nombre:null}
        Informes.find({"ID":ID},(err,res)=>{
            if(res.length>0){
                ret = {existe:true,nombre:res[res.length-1].INFORME.NOMBRE}
            }
            Pres(ret)
        })
    })
}

module.exports.ExisteInforme = (ID)=>{
    return existeinforme(ID)
}