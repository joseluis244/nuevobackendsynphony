const mongoose = require('mongoose');

const Informes = require("./esquemas/Informes");
const Usuarios = require("./esquemas/Usuarios");
const Listaclientes = require("./esquemas/Listaclientes")
const Share = require("./esquemas/share")
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

let ListaUsuarios = ()=>{
    return new Promise((Pres,Prej)=>{
        Usuarios.find({"CONFIGURACION.LISTABLE":true},(err,res)=>{
            Pres(res)
        })
    })
}

let updateuser = (data)=>{
    return new Promise((Pres,Prej)=>{
        Usuarios.updateOne({_id:data._id},data,(err,data)=>{
            if(err){
                console.log(err)
            }else{
                Pres(true)
            }
        })
    })
}

let borrarusuario = (data)=>{
    return new Promise((Pres,Prej)=>{
        Usuarios.deleteOne({_id:data},(err,data)=>{
            if(err){
                console.log(err)
            }else{
                Pres(true)
            }
        })
    })
}

let crearusuario = (data)=>{
    return new Promise((Pres,Prej)=>{
        let user = new Usuarios(data)
        user.save()
        Pres(true)
    })
}

let ListarDifucion = ()=>{
    return new Promise((Pres,Prej)=>{
        Listaclientes.find({},(err,res)=>{
            Pres(res)
        })
    })
}
let AgregarDifucion = (Ndif)=>{
    return new Promise((Pres,Prej)=>{
        let Dif = new Listaclientes(Ndif)
        Dif.save(()=>{
            Pres(true)
        })
    })
}
let UpdateDifucion = (dif)=>{
    return new Promise((Pres,Prej)=>{
        Listaclientes.updateOne({_id:dif._id},(err,res)=>{
            console.log(res)
            Pres(true)
        })
    })
}
let BorrarDifucion = (id)=>{
    return new Promise((Pres,Prej)=>{
        Listaclientes.deleteOne({_id:id},()=>{
            Pres(true)
        })
    })
}
let saveshare = (data)=>{
    let share = new Share(data)
    share.save((e)=>{})
}
module.exports.ExisteInforme = (ID)=>{
    return existeinforme(ID)
}

module.exports.ListaUsuarios = ListaUsuarios
module.exports.updateuser = updateuser
module.exports.crearusuario = crearusuario
module.exports.borrarusuario= borrarusuario
module.exports.ListarDifucion = ListarDifucion
module.exports.AgregarDifucion = AgregarDifucion
module.exports.UpdateDifucion = UpdateDifucion
module.exports.BorrarDifucion = BorrarDifucion
module.exports.saveshare = saveshare