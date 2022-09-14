import {busqueda, eliminarCliente} from './API.js'
const tabla = document.querySelector('#tabla');
const busca = document.querySelector('#busqueda');
(function(){
  document.addEventListener('DOMContentLoaded',traerData);
tabla.addEventListener('click',confirmarEliminar);
busca.addEventListener('keyup',buscar);
function traerData(){
const url = 'http://localhost:3000/candidatos';
fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultados =>{
        console.log(resultados)
        mostratHTML(resultados)

    } )
    
}

function mostratHTML(datos){
    
    let html = ''
    
    // console.log(datos.results[0].name)
    
   datos.forEach(candidato => {
    const { nombre,posicion,entrevistador,fecha,estatus,id} = candidato
    html +=`
    <div class="item">
           <p>${nombre} </p>
         </div>

         <div class="item item1">
           <p>${posicion}</p>
         </div>
         <div class="item item1">
           <p>${entrevistador}</p>
         </div>
         <div class="item">
           <p>${estatus}</p>
         </div>
         <div class="item">
          <p>${fecha}</p>
         </div>
         <div class="item item1">
         
          <img class="tabla__borrar" data-cliente=${id} src="../images/Delete.png" alt="">
          
          </div>
   `
   }); 
   
   tabla.innerHTML = html
   
   }
   function confirmarEliminar(e){
    if(e.target.classList.contains('tabla__borrar')){
      const clienteId = parseInt(e.target.dataset.cliente);
      const confirmar = confirm('deseas eliminar este registro?') 
      if(confirmar){
        eliminarCliente(clienteId)
      }
    }
  }

 async function buscar(){
    const cliente = await busqueda(busca.value)
    mostratHTML(cliente)
  }

  

   
   
})()









  