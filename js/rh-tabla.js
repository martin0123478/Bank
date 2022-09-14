import {busqueda, eliminarCliente} from './API.js'
const tabla = document.querySelector('#lista');

(function(){
  document.addEventListener('DOMContentLoaded',traerData);
tabla.addEventListener('click',confirmarEliminar);
// busca.addEventListener('keyup',buscar);
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
    const { nombre,posicion,entrevistador,fecha,estatus,id} = candidato;
    const row = document.createElement('tr');
    row.innerHTML +=`
    <td class="Nombre_Col">${nombre}</td>
    <td class="Posicion item1">${posicion}</td>
   
    <td class="">${estatus}</td>
    <td class="">${fecha}</td>
    <td class="item1"> <img class="tabla__borrar" data-cliente=${id} src="../images/Delete.png" alt="">
        </td> 
          
          
   `
   tabla.appendChild(row)
   }); 
   
   
   
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

//  async function buscar(){
//     const cliente = await busqueda(busca.value)
//     mostratHTML(cliente)
//   }



   
   
})()









  