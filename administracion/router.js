const express = require("express")
const Router = require("express").Router()
const fs = require('fs')


const consultassql = require("../mysql/consultas")
const consultasmongo = require("../mongodb/consultas")
const Tk = require("./tokens")
const MSsql = require('../MSsql/consoltas')
const SistemJS = require('../sistemdata/sistem')

Router.use(express.static("./administracion/build"))
Router.get('/', (req, res) => {
    res.sendfile("./administracion/build/index.html")
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
Router.get("/Difucion",(req,res)=>{
    consultasmongo.ListarDifucion()
    .then((Mres)=>{
        res.json(Mres)
    })
})
Router.post("/Difucion",(req,res)=>{
    consultasmongo.AgregarDifucion(req.body)
    .then((Mres)=>{
        res.json(Mres)
    })
})
Router.put("/Difucion",(req,res)=>{
    consultasmongo.UpdateDifucion(req.body)
    .then((Mres)=>{
        res.json(Mres)
    })
})
Router.delete("/Difucion/:id",(req,res)=>{
    consultasmongo.BorrarDifucion(req.params.id)
    .then((Mres)=>{
        res.json(Mres)
    })
})
Router.get("/estudios",(req,res)=>{
    consultassql.BuscarEstudios(undefined,undefined,true,false,false)
    .then((Cres)=>{
        res.json(Cres)
    })
    .catch(e=>{
        console.log(e)
        res.status(500)
    })
})
Router.delete("/estudios/:id",(req,res)=>{
    console.log(req.params.id)
    res.json(true)
})

Router.get("/FuturePacientesSql/:FN/:ID",(req,res)=>{
    MSsql.LeerPaciente(req.params.FN,req.params.ID)
    .then((Sres)=>{
        res.json(Sres)
    })
})
Router.get("/Dashboard",(req,res)=>{
    consultassql.Dashboard()
    .then((Dres)=>{
        res.json(Dres)
    })
})
Router.get("/Dashboardxlsx",(req,res)=>{
    consultassql.BuscarEstudios(undefined,undefined,true,true,false)
    .then((Sres)=>{
        SistemJS.crearxlsx(Sres)
        .then((buff)=>{
            res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
            res.send(buff)
        })
    })
})
module.exports = Router