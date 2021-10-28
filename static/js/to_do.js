const tarea = document.getElementById("tarea")
const agregar = document.getElementById("agregar")
const list_pen = document.getElementById("pendientes")
const list_fin = document.getElementById("finalizadas")

agregar.onclick = ()=>{
    var valor = tarea.value
    list_pen.appendChild(getCard(valor, true))
    addListeners()
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
    card.setAttribute('data',"0")

    card.appendChild(tarea)
    if(opcion){
        card.appendChild(agregar)
        card.appendChild(eliminar)
    }
    
    
    return card
}

const addListeners = () => {

    
    list_pen.childNodes.forEach((card) => {
        if(card.childNodes.length == 3 && card.getAttribute('data') == "0"){
            card.childNodes.forEach((element) => {
                element.addEventListener('click', cardAction, false)
                card.setAttribute('data', "1") 
            })
        }   
    })

    function cardAction(e){
        var div = e.target.parentNode
        switch(e.target.className){
            case "fin":
                div.childNodes.forEach((element)=>{
                    if(element.type == "submit")
                        element.setAttribute('hidden','hidden')
                })
                list_fin.appendChild(div)
                //list_pen.removeChild(e.target.parentNode)
                break;
            case "eliminar":
                list_pen.removeChild(div)
                break;
        }

        
    }

    // agregar.onclick= ()=>{
    //     list_fin.appendChild(getCard(valor, false))
    // }
}