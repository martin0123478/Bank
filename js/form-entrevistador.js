window.onload = async function( ) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    id = urlParams.get('id');
    if(id !== null){
        obtnerDatosAPI();
        cargarFormulario();
    }  
}

function obtnerDatosAPI(){
    const url = `https://jsonplaceholder.typicode.com/users/${id}` ;
    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => mostrarHTML(resultado))
        .catch(function(error){
            console.log('Fetch Error:', error);
            console.log('Error al obtener el API JSON');
        });
}

function mostrarHTML(datos){
     
    let nombre = datos.name;
    let posicion = datos.company.catchPhrase; 
    let nuevacabecera = `${posicion} - ${nombre}`;

    let cabecera = document.querySelector('.principal__cabecera--titulo');
    cabecera.innerHTML = nuevacabecera;

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

    const candidato = {
        experiencia : experiencia,
        tecnologias: tecnologias,
        nivel_candidato: nivel_candidato,
        cumple_Si: cumple_Si,
        cumple_No: cumple_No,
        comentarios: comentarios
    }
    
    const candidatoString = JSON.stringify( candidato );
    localStorage.setItem(id, candidatoString);
    window.location.href = "entrevistador-Tabla.html";
}

function cargarFormulario(){
    
    if (localStorage.getItem(id) != null){
        const datosFormulario = JSON.parse(localStorage.getItem(id));

        document.querySelector('#Experiencia').value = datosFormulario.experiencia;
        document.querySelector('#Tecnologias').value = datosFormulario.tecnologias;
        document.querySelector('#Nivel_candidato').value = datosFormulario.nivel_candidato;
        document.querySelector('#cumple_Si').checked = datosFormulario.cumple_Si;
        document.querySelector('#cumple_No').checked = datosFormulario.cumple_No;
        document.querySelector('#Comentarios').value = datosFormulario.comentarios;
    }
   

}

