const btn_cargar = document.getElementById('btn')
const div_result = document.getElementById('result')

const delayed = (valor) => new Promise((resolve, reject) => {
    if(valor > 4)
        reject('El valor es mas de 13 => '+ valor)
    else
        setTimeout(()=> resolve(valor),valor*100)
})

btn_cargar.addEventListener('click',()=>{
    
    let users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(x => x.json())
    .then(x=> loadUsers(x))
    .catch(e => {
        alert(e)
    })
    // setTimeout(()=>{
    //     let p = document.createElement('p');
    //     p.innerHTML = `Iteracion: ${9+1}`
    //     div_result.appendChild(p)
    // }, 2000)

    // for(let a=0;a<5;a++){
        

    //     //var result = Promise.resolve(a)
    //     delayed(a).then(res => {
    //         let p = document.createElement('p');
    //         p.innerHTML = `Iteracion: ${res+1}`
    //         div_result.appendChild(p)
    //         return delayed(2*res)
    //     })
    //     .then(otro => {
    //         let p = document.createElement('p');
    //         p.innerHTML = `Iteracion 2: ${otro}`
    //         div_result.appendChild(p)
    //     })
    //     .catch(error =>{
    //         let p = document.createElement('p');
    //         p.innerHTML = `Error ${error}`
    //         div_result.appendChild(p)
    //     })
        
    // }
    // try {
    //     var x = 1+2;
        
    //     throw 'Sucedio algo malo muy malo.';
    //     console.log(x);
    // } catch (error) {
    //     console.log('Paso algo :c => '+error);
    // }

})

function loadUsers(usuariosJSON){
    usuariosJSON.forEach(usuario => {
        let p = document.createElement('p');
        p.innerHTML = `Nick: ${usuario.username} <br>Nombre: ${usuario.name}`
        div_result.appendChild(p)
    });
}