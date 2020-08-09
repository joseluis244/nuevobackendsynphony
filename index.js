const app = require('express')();
const http = require('http').createServer(app);



const AppRouter = require("./app/router")


app.use("/app",AppRouter)


http.listen(4000, () => {
  console.log('http-init');
});