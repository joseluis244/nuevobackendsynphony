const jwt = require("jsonwebtoken");
let institucion = "Medicaltec Soluciones"
let urlbase = "https://medpacs.medicaltecsrl.com"
let secret = "Medicaltec310188"
/**
 *
 * @param {Object} data
 */
function getmod(mod){
    switch (mod) {
        case "CT":
          return"Tomografia"
          //break;
          case "MR":
            return"Resonancia"
            //break;
            case "US":
              return"Ecografia"
              //break;
              case "CR":
            return"Rayos X"
            //break;
            case "DR":
            return"Rayos X"
            //break;
        default:
          return mod
          //break;
      }
}
function generarshare(data) {
  if (data.tipo == "whatsapp") {
      console.log(data.horas)
    let token = jwt.sign({id:data.clid},secret,{expiresIn:data.horas+"h"})
    let mensaje = `${institucion}: Estudio de ${getmod(data.cli.SERIES[0].MODALIDAD)} del paciente ${data.cli.NOMBRE}:
        ${urlbase}/externo/${token}`;
        return mensaje
  } else {
    console.log("email");
  }
}

module.exports.generarshare = generarshare;
