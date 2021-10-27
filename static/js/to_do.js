const tarea = document.getElementById("tarea")
const agregar = document.getElementById("agregar")
const list_pen = document.getElementById("pendientes")
const list_fin = document.getElementById("finalizadas")

agregar.onclick = ()=>{
    var valor = tarea.value

    list_pen.appendChild(getCard(valor, true))

}

function getCard(valor, opcion) {
    let card = document.createElement('div')
    let tarea = document.createElement('p')
    let agregar = document.createElement('button')
    let eliminar = document.createElement('button')

    tarea.innerHTML = valor
    agregar.innerHTML ="&#9989;"
    tarea.classList= "tarea"
    eliminar.innerHTML ="&#10060;"

    card.classList = "card c-tarea card-white"
    tarea.classList = "tarea"
    agregar.classList ="fin"
    eliminar.classList ="eliminar"

    card.appendChild(tarea)
    if(opcion){
        card.appendChild(agregar)
        card.appendChild(eliminar)
        agregar.onclick= ()=>{
            list_fin.appendChild(getCard(valor, false))
        }
    }
    

    
    return card
}