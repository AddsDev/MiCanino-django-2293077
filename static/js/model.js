class Tarea {
    constructor(descripcion){
        this.descripcion = descripcion
        this.inicial = new Date()
        this.final =  NaN
        this.status = false
        this.notas = []
    }

    get detalle(){
        return `${this.descripcion} [${this.getDate(this.inicial)}] [${this.getDate(this.final)}] (${this.notas.length})`
    }

    set nuevaNota(valor){
        if(this.notas.length <= 3)
            this.notas.push(valor)
    }

    getDate(fecha){
        console.log(fecha);
        return isNaN(fecha) || fecha == null ? '-': `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
    }
    


}