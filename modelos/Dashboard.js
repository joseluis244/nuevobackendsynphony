const moment = require('moment')
const colores1=["#2364AA","#73BFB8","#EA7317","#3DA5D9","#FEC601"]
const colores2=["#8CB369","#F4A259","#BC4B51","#F4E285","#5B8E7D"]
class Dashboard {
    constructor() {
        this.cantidadEstudios = 0
        this.usodisco = new GraficoPie();
        this.cantidaddia = new GraficoDona(colores1);
        this.cantidadmes = new GraficoDona(colores1);
        this.cantidaddiaEq = new GraficoDona(colores2);
        this.cantidadmesEq = new GraficoDona(colores2);
        this.estudios24 = []
    }
    addbymod(array) {
        let hoy = moment(new Date()).format("YYYYMMDD")
        let mes = moment(new Date()).subtract(1, "M").format("YYYYMMDD")
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element.FECHA === hoy) {
                this.cantidaddia.agregar(element.SERIES[0].MODALIDAD)
                this.cantidadmes.agregar(element.SERIES[0].MODALIDAD)
                //agregaryear(element)
            }
            else {
                if (element.FECHA >= mes) {
                    this.cantidadmes.agregar(element.SERIES[0].MODALIDAD)
                    //agregaryear(element)
                } else {
                    //agregaryear(element)
                }
            }
        }
    }
    addbyeqp(array){
        let hoy = moment(new Date()).format("YYYYMMDD")
        let mes = moment(new Date()).subtract(1, "M").format("YYYYMMDD")
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if(element.AE === ""){
                element.AE="MTAE"
            }
            if (element.FECHA === hoy) {
                this.cantidaddiaEq.agregar(element.AE)
                this.cantidadmesEq.agregar(element.AE)
                //agregaryear(element)
            }
            else {
                if (element.FECHA >= mes) {
                    this.cantidadmesEq.agregar(element.AE)
                    //agregaryear(element)
                } else {
                    //agregaryear(element)
                }
            }
        }
    }
    addcantidadequipos(data){
        this.cantidadEstudios = data
    }
    Datos() {
        return {
            cantidadEstudios: this.cantidadEstudios,
            usodisco: this.usodisco,
            cantidaddia: this.cantidaddia.verdatos(),
            cantidadmes: this.cantidadmes.verdatos(),
            cantidaddiaEq: this.cantidaddiaEq.verdatos(),
            cantidadmesEq: this.cantidadmesEq.verdatos(),
            estudios24: this.estudios24
        }
    }
}

class GraficoDona {
    constructor(bg) {
        this.labels = []
        this.datasets = [{
            data: [],
            backgroundColor: bg
        }]
    }
    agregar(element) {
        let pos = this.labels.indexOf(element)
        if (pos > -1) {
            this.datasets[0].data[pos] = this.datasets[0].data[pos] + 1
        } else {
            this.labels.push(element)
            pos = this.labels.indexOf(element)
            this.datasets[0].data[pos] = 1
        }
    }
    verdatos() {
        return (
            {
                labels: this.labels,
                datasets: this.datasets
            }
        )
    }
}

class GraficoPie {
    constructor() {
        this.labels = ["Libre","Usado"]
        this.datasets = [{
            data: [100,0],
            backgroundColor: ["#008148","#CC2936"]
        }]
    }
    asignareespacios(data){
        this.datasets = [{
            data: data,
            backgroundColor: ["#008148","#CC2936"]
        }]
    }
    verdatos() {
        return (
            {
                labels: this.labels,
                datasets: this.datasets
            }
        )
    }
}

let DashboardC = new Dashboard()
module.exports = DashboardC