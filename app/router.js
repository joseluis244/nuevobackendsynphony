const Router = require("express").Router()


const consultassql = require("../mysql/consultas")
const consultasmongo = require("../mongodb/consultas")
const FuncionesShare = require("./share")


/* (consultassql.BuscarEstudios) buscar los estudios parametros 
"fecha de inicio(DATE)" "fecha de final (DATE)" "agregar las series (Bool)" "agregar las files (Bool)" "agregar informes (Bool)" */
Router.get('/buscarestudios', (req, res) => {
    consultassql.BuscarEstudios(req.param("inicio"),req.param("final"),true,true,true)
    .then((sqlres)=>{
        res.json(sqlres);
    })
})
Router.post("/share",(req,res)=>{
    let mensaje = FuncionesShare.generarshare(req.body)
    consultasmongo.saveshare(req.body)
    res.json({mensaje})
})
// contenido autiguo ---------------------------------------------------
Router.get('/getfiles/:id',(req,res)=>{
    
    /*mysqldb.files(req.param('id'))
    .then((DBres)=>{
        res.send(DBres)
    })*/
})


Router.get('/visorexterno/:token',(req,res)=>{
    mysqldb.externo(req.params.token)
    .then((Fres)=>{
        res.json(Fres)
    })
})

Router.get('/existeinforme/:id',(req,res)=>{
    db.informesF(req.params.id)
    .then((DBres)=>{
        if(DBres !== null){
            res.json({"existe":true,"nombre":DBres.INFORME.NOMBRE})
        }else{
            res.json({"existe":false,"nombre":null})
        }
    })
})

Router.get('/descargarinforme/:file',(req,res)=>{
    res.download(`./informes/${req.params.file}`,`${req.params.file}.pdf`)
})

Router.get('/descargarinformever/:file',(req,res)=>{
    let file = req.params.file.split(".")[0]
    res.contentType("application/pdf")
    res.sendfile(`./informes/${file}`)
})

Router.get("/DescargaEstudio/:id",(req,res)=>{
    let server = "localhost:8042"
    request(`http://${server}/studies/${req.params.id}/media`)
    setTimeout(() => {
        request(`http://${server}/studies/${req.params.id}/media`).pipe(res);
    }, 2000);
})
// contenido autiguo ---------------
Router.get("/",(req,res)=>{
    consultassql
})

Router.get('/informe', (req, res) => {
    consultasmongo.ExisteInforme(20)
    .then((mgres)=>{
        res.json(mgres);
    })
});

module.exports = Router