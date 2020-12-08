const fs = require('fs')
const conf = JSON.parse( fs.readFileSync('./conf.json') )
module.exports = conf