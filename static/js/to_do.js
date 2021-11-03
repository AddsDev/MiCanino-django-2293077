const tarea = document.getElementById("tarea")
const agregar = document.getElementById("agregar")
const list_pen = document.getElementById("pendientes")
const list_fin = document.getElementById("finalizadas")

const local = window.localStorage
// var nuevaTarea = new Tarea('des',new Date(), false)
// list_pen.appendChild(getCard(nuevaTarea.detalle, true))

var tareas = []

window.onload = () =>{
    loadDataLocal()
}

agregar.onclick = ()=>{
    var valor = tarea.value
    var nuevaT = new Tarea(valor)
    saveTarea(nuevaT)
    
    list_pen.appendChild(getCard(nuevaT, true))
    addListeners()
}

function saveTarea(tareaN){
    tareas.push(tareaN)
    saveLocal()
}
function saveLocal(){
    local.setItem('tareas', JSON.stringify(tareas))
}
function loadDataLocal(){
    var tasks = JSON.parse(local.getItem('tareas'))
    tasks.forEach((task)=>{
        let tempTarea = new Tarea(task.descripcion)
        tempTarea.inicial = new Date(task.inicial)
        tempTarea.final = task.final == null? NaN : new Date(task.final)
        tempTarea.status = task.status
        tempTarea.notas = task.notas
        saveTarea(tempTarea)

        if(tempTarea.status)
            list_fin.appendChild(getCard(tempTarea, false))
        else 
            list_pen.appendChild(getCard(tempTarea, true))
        addListeners()
    })
    
}
function getCard(valor, opcion) {
    let card = document.createElement('div')
    let tarea = document.createElement('p')
    let agregar = document.createElement('button')
    let eliminar = document.createElement('button')

    tarea.innerHTML = valor.detalle
    agregar.innerHTML ="&#9989;"
    tarea.classList= "tarea"
    eliminar.innerHTML ="&#10060;"

    card.classList = "card c-tarea card-white"
    tarea.classList = "tarea"
    agregar.classList ="fin"
    eliminar.classList ="eliminar"
    card.setAttribute('data',"0")
    card.setAttribute('index',tareas.length - 1)
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
        card.addEventListener('click',(event)=>{
            
            if(event.target.childNodes.length > 2){
                addRemoveClass(event.target, 'card-white', 'card-checked')
                
            }else if(event.target.className == 'tarea'){
                addRemoveClass(event.target.parentNode, 'card-white', 'card-checked')
            }
        })   
    })

    function addRemoveClass(element, propert1, propert2){
        element.classList.toggle(propert1)
        element.classList.toggle(propert2)
    }
    function cardAction(e){
        var div = e.target.parentNode
        var tempTarea = tareas[div.getAttribute('index')]
        switch(e.target.className){
            case "fin":
                tempTarea.status = !tempTarea.status
                tempTarea.final = new Date()
                div.childNodes.forEach((element)=>{
                    if(element.type == "submit")
                        element.setAttribute('hidden','hidden')
                    else if(element.tagName == 'P')
                        element.innerHTML = tempTarea.detalle

                })
                list_fin.appendChild(div)
                
                //list_pen.removeChild(e.target.parentNode)
                break;
            case "eliminar":
                list_pen.removeChild(div)
                tareas.splice(div.getAttribute('index'), 1)
                break;
        }
        saveLocal()

        
    }

    // agregar.onclick= ()=>{
    //     list_fin.appendChild(getCard(valor, false))
    // }
}