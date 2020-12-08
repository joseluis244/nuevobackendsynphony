const express = require("express")
const app = require('express')();
const http = require('http').createServer(app);
const cors = require("cors")
const fs = require('fs');
const https = require('https');
let credentials
const conf = require('./configuracion')

if(conf.Seguro){
  const privateKey = fs.readFileSync('/var/www/html/medpacs/ssl/private.key');
  const certificate = fs.readFileSync('/var/www/html/medpacs/ssl/certificate.crt');
  credentials = {key: privateKey, cert: certificate};
}

const AppRouter = require("./app/router")
const AdminRouter = require("./administracion/router")
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/app",AppRouter)
app.use("/administracion",AdminRouter)

if(conf.Seguro){
  var httpsServer = https.createServer(credentials, app);
  httpsServer.listen(5443,()=>{
    console.log('https-init');
  });
}

http.listen(5000, () => {
  console.log('http-init');
});