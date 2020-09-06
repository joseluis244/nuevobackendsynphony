const jwt = require("jsonwebtoken")

let S1= "Medicaltec310188$"

function loadkey(key){
    return new Promise(async (Pres,Prej)=>{
        try{
            let data = await jwt.verify(key,S1)
            Pres({err:false,user:data.usuario})
        }
        catch(e){
            Pres({err:true,user:null})
        }
    })
}

module.exports.loadkey = loadkey