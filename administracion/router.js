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
module.exports = Router