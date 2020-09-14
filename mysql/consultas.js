const mysql = require("mysql");
const moment = require("moment");
const consultasongo = require("../mongodb/consultas");
const fs = require("fs")

let sqlinit,sqlend

let condata = {
  host: "localhost",
  user: "medicaltecmysql",
  password: "Medicaltec310188$",
};
/*
let condata = {
    host: "medpacs.medicaltecsrl.com",
    user: "medicaltecmysql",
    password: "Medicaltec310188$",
  };
*/
function BuscarEstudios(fechainicio,fechafinal,agregarseries,agregarfiles,agregarinforme){
    let con = mysql.createConnection(condata);
    return new Promise((Pres,Prej)=>{
        con.connect(function (err) {
            if (err) throw err;
            let sql = `SELECT
            A.value as "FECHA",
            A.id as "ID",
            B.value as "NOMBRE",
            C.value as "PAS_ID",
            D.value as "SEXO",
            E.publicId as "EST_UID"
            FROM medicaltec.MainDicomTags A
            left join (select * from medicaltec.MainDicomTags where tagGroup=16 and tagElement=16 ) B on A.id = B.id
            left join (select * from medicaltec.MainDicomTags where tagGroup=16 and tagElement=32 ) C on A.id = C.id
            left join (select * from medicaltec.MainDicomTags where tagGroup=16 and tagElement=64 ) D on A.id = D.id
            left join (select * from medicaltec.Resources where resourceType=1) E on A.id = E.internalId
            where A.tagGroup=8 and A.tagElement=32 and A.value <= ${fechafinal} and A.value >= ${fechainicio} order by A.value desc;`
            sqlinit = moment();
            con.query(sql, async function (err, result) {
              if (err) throw err;
              for (let index = 0; index < result.length; index++) {
                  const element = result[index];
                  if(agregarinforme){
                      let INFORME = await consultasongo.ExisteInforme(element.ID)
                      result[index].INFORME = INFORME.existe
                  }
                  if(agregarseries){
                      let SERIES = await BuscarSeries(element.ID,agregarfiles)
                      result[index].SERIES = SERIES
                  }
              }
              sqlend = moment();
              Pres(result);
              let dur = moment.duration(sqlend.diff(sqlinit));
              fs.appendFileSync("./mysql/mysql.log",moment().format("YYYY-MM-DD HH:mm")+"--->"+dur.asSeconds()+"\n")
              //console.log(dur.asSeconds());
              con.end();
            });
          });
    })
}

function BuscarSeries(ID,agregarfiles){
    let con = mysql.createConnection(condata);
    return new Promise((Pres,Prej)=>{
        con.connect(function (err) {
            if (err) throw err;
            let sql = `SELECT 
            A.publicId as SER_ID,
            A.internalId as SER_UID,
            B.value as MODALIDAD,
            C.value as NOMBRE
            FROM medicaltec.Resources A 
            left join (select * from medicaltec.MainDicomTags where tagGroup=8 and tagElement=96) B on A.internalId = B.id
            left join (select * from medicaltec.MainDicomTags where (tagGroup=8 and tagElement=4158) or (tagGroup=8 and tagElement=5120)) C on A.internalId = C.id
            where A.parentId=${ID} and A.resourceType=2;`
            con.query(sql, async function (err, result) {
              if (err) throw err;
              for (let index = 0; index < result.length; index++) {
                  const element = result[index];
                  if(agregarfiles){
                      let FILES = await BuscarFiles(element.SER_UID)
                      result[index].FILES = FILES
                  }
              }
              Pres(result);
              con.end();
            });
          });
    })
}

function BuscarFiles(ID){
    let con = mysql.createConnection(condata);
    return new Promise((Pres,Prej)=>{
        con.connect(function (err) {
            if (err) throw err;
            let sql = `SELECT
              B.value as POS,
              C.uuid as INS_UID
              FROM medicaltec.Resources A
              left join (select * from medicaltec.MainDicomTags where tagGroup=32 and tagElement=19) B on B.id = A.internalId
              left join (select * from medicaltec.AttachedFiles where fileType=1) C on B.id = C.id
              where A.resourceType=3 and A.parentId=${ID} order by cast(B.value as UNSIGNED) asc;`;
            con.query(sql, function (err, result) {
              if (err) throw err;
              Pres(result);
              con.end();
            });
          });
    })
}

function Imagenes(ID){
let con = mysql.createConnection(condata);
    return new Promise((Pres,Prej)=>{
        con.connect(function (err) {
            if (err) throw err;
            let sql = `SELECT 
            A.content as ARCHIVO,
            B.uncompressedSize as TAMANO 
            FROM medicaltec.StorageArea A
            left join (select * from medicaltec.AttachedFiles) B on A.uuid = B.uuid
            where A.uuid="${ID}";`;
            con.query(sql, function (err, result) {
              if (err) throw err;
              Pres(result);
              con.end();
            });
          });
    })
}
module.exports.BuscarEstudios = async function (inicio,final,agregarseries,agregarfiles,agregarinforme){
    if(inicio == undefined){
        inicio="19200101"
    }
    if(final == undefined){
        final=moment().format("YYYYMMDD")
    }
    return BuscarEstudios(inicio,final,agregarseries,agregarfiles,agregarinforme)
}
module.exports.GetImagen = async function(ID){
    return Imagenes(ID)
}
module.exports.ListaEstudios = async function (){
        let inicio="19200101"
        let final=moment().format("YYYYMMDD")
    return BuscarEstudios(inicio,final,true,false,false)
}