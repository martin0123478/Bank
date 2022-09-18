window.onload = async function( ) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    id = urlParams.get('id');
    if(id !== null){
        obtnerDatosAPI();
        
    }  
}
 var respuesta;
function obtnerDatosAPI(){
    const url = `http://localhost:3000/candidatos/${id}` ;
    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => mostrarHTML(resultado))
        .catch(function(error){
            console.log('Fetch Error:', error);
            console.log('Error al obtener el API JSON');
        });
}
     let id, nombre,posicion,entrevistador,estatus,
       fecha,
      experiencia,
      tecnologias,
      nivel_candidato,
      cumple_Si,
      cumple_No,
      comentarios
function mostrarHTML(datos){
     
     nombre = datos.nombre;
     posicion = datos.posicion; 
     id = datos.id
     entrevistador = datos.entrevistador
     estatus = datos.estatus
       fecha = datos.fecha
    let nuevacabecera = `${posicion} - ${nombre}`;

    let cabecera = document.querySelector('.principal__cabecera--titulo');
    cabecera.innerHTML = nuevacabecera;

    
    document.querySelector('#Experiencia').value = datos.experiencia;
    document.querySelector('#Tecnologias').value = datos.tecnologias;
    document.querySelector('#Nivel_candidato').value = datos.nivel_candidato;
    document.querySelector('#cumple_Si').checked = datos.cumple_Si;
    document.querySelector('#cumple_No').checked = datos.cumple_No;
    document.querySelector('#Comentarios').value = datos.comentarios;

}

//Variable 
const formulario = document.querySelector('#formulario');
 
//Event Listeners
eventListeners()
function eventListeners(){
    formulario.addEventListener('submit', agregarDatos);
}

function agregarDatos(e){
    e.preventDefault();
    console.log('Guadando en localStorage');

    //Texto en los formularios.
    let experiencia = document.querySelector('#Experiencia').value;
    let tecnologias = document.querySelector('#Tecnologias').value;
    let nivel_candidato = document.querySelector('#Nivel_candidato').value;
    let cumple_Si = document.querySelector('#cumple_Si').checked;
    let cumple_No = document.querySelector('#cumple_No').checked;
    let comentarios = document.querySelector('#Comentarios').value;

    // const candidato = {
    //     nombre: resultados.nombre,
    //   posicion: resultados.posicion,
    //   entrevistador: resultados.entrevistador,
    //   estatus:resultados.estatus,
    //   fecha:resultados.fecha,
    //     experiencia : experiencia,
    //     tecnologias: tecnologias,
    //     nivel_candidato: nivel_candidato,
    //     cumple_Si: cumple_Si,
    //     cumple_No: cumple_No,
    //     comentarios: comentarios
    // }
    fetch(`http://localhost:3000/candidatos/${id}`, {
        method: 'PUT',

        body: JSON.stringify({
            nombre: nombre,
            posicion: posicion,
            entrevistador: entrevistador,
            estatus:estatus,
            fecha:fecha,
        experiencia : experiencia,
        tecnologias: tecnologias,
        nivel_candidato: nivel_candidato,
        cumple_Si: cumple_Si,
        cumple_No: cumple_No,
        comentarios: comentarios
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((reponse) => reponse.json())
    .then((json) => console.log(json));
    
    // const candidatoString = JSON.stringify( candidato );
    // localStorage.setItem(id, candidatoString);
    window.location.href = "entrevistador-Tabla.html";
}


