const express = require("express")
const Router = require("express").Router()


const consultassql = require("../mysql/consultas")
const consultasmongo = require("../mongodb/consultas")
const Tk = require("./tokens")

Router.use(express.static("./administracion/estatico/"))
Router.get('/', (req, res) => {
    res.sendfile("./administracion/views/index.html")
})

Router.post('/keyload', (req, res) => {
    Tk.loadkey(req.body.key)
    .then((Tres)=>{
        res.json(Tres)
    })
})
Router.get("/listausuarios",(req,res)=>{
    consultasmongo.ListaUsuarios()
    .then((DBres)=>{
        res.json(DBres)
    })
})
Router.put("/actualizarusuario",(req,res)=>{
    consultasmongo.updateuser(req.body)
    .then((Mres)=>{
        if(Mres){
            res.json({err:false})
        }else{
            res.json({err:true})
        }
    })
})

Router.delete("/actualizarusuario/:id",(req,res)=>{
    consultasmongo.borrarusuario(req.params.id)
    .then((Mres)=>{
        if(Mres){
            res.json({err:false})
        }else{
            res.json({err:true})
        }
    })
})
Router.put("/crearusuario",(req,res)=>{
    consultasmongo.crearusuario(req.body)
    .then((Mres)=>{
        res.json({err:false})
    })
})
Router.get("/cargardifucion",(req,res)=>{
    consultasmongo.ListarDifucion()
    .then((Mres)=>{
        res.json(Mres)
    })
})
module.exports = Router