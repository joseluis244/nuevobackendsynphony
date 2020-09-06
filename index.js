const express = require("express")
const app = require('express')();
const http = require('http').createServer(app);
const cors = require("cors")



const AppRouter = require("./app/router")
const AdminRouter = require("./administracion/router")

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/app",AppRouter)
app.use("/administracion",AdminRouter)


http.listen(4000, () => {
  console.log('http-init');
});