const Router = require("express").Router()


const consultassql = require("../mysql/consultas")
const consultasmongo = require("../mongodb/consultas")


Router.get('/buscarestudios', (req, res) => {
    consultassql.BuscarEstudios(req.param("inicio"),req.param("final"),true,true,true)
    .then((sqlres)=>{
        res.json(sqlres);
    })
})

Router.get("/descargarimagenes",(req,res)=>{
    consultassql
})

Router.get('/informe', (req, res) => {
    consultasmongo.ExisteInforme(20)
    .then((mgres)=>{
        res.json(mgres);
    })
});

module.exports = Router