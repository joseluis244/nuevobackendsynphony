const checkDiskSpace = require('check-disk-space')
const XlxsT = require('../modelos/xlsx')
const ExcelJS = require('exceljs');
const { Table } = require('mssql');
function infoespacio(){
    return new Promise((Pres,Prej)=>{
        checkDiskSpace('/').then((diskSpace) => {
            let L = (diskSpace.free*100)/diskSpace.size
            let T = 100 - L
            Pres([L,T])
        })
    })
}
/**
 * 
 * @param {Array} datos 
 */
async function crearxlsx(datos){
    let tabla = new XlxsT
    tabla.agregardatos(datos)
    const libreta = new ExcelJS.Workbook()
    const hoja = libreta.addWorksheet("estudios")
    hoja.columns = [
        { header: 'ID', key: 'ID', width: 10 },
        { header: 'NOMBRE', key: 'NOMBRE', width: 52 },
        { header: 'FECHA', key: 'FECHA', width: 10},
        { header: 'MODALIDAD', key: 'MODALIDAD', width: 20},
        { header: 'SERIES', key: 'SERIES', width: 10},
        { header: 'IMAGENES', key: 'IMAGENES', width: 10},
      ];
      let array = tabla.GetData()
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        hoja.addRow(element);
    }
    let Buff = await libreta.xlsx.writeBuffer()
    return Buff
}
module.exports.infoespacio=infoespacio
module.exports.crearxlsx=crearxlsx