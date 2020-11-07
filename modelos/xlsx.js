const moment = require('moment')
class Xlsx {
    constructor() {
        this.tabla = []
    }/**
     * 
     * @param {Array} datos 
     */
    agregardatos(datos){
        let array = datos
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            let row = new Row(element)
            this.tabla.push(row.data())
        }
    }
    GetData(){
        return(this.tabla)
    }
}
class Row {
    constructor(element) {
        this.ID = element.ID
        this.NOMBRE = element.NOMBRE
        this.FECHA = new Date(moment(element.FECHA,"YYYYMMDD").format("YYYY-MM-DD"))
        this.MODALIDAD = element.SERIES[0].MODALIDAD
        this.SERIES = element.SERIES.length
        this.IMAGENES = imagenes(element.SERIES)
        function imagenes(series) {
            let array = series
            let cantidad = 0
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                cantidad = cantidad + element.FILES.length
            }
            return cantidad
        }
    }
    data() {
        return{
            ID: this.ID,
            NOMBRE: this.NOMBRE,
            FECHA: this.FECHA,
            MODALIDAD: this.MODALIDAD,
            SERIES: this.SERIES,
            IMAGENES: this.IMAGENES
        }
    }
}

module.exports=Xlsx