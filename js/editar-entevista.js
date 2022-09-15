window.onload = async function( ) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    id = urlParams.get('id');  
    obtenerDatos();  
}

function obtenerDatos(){
    fetch(`http://localhost:3000/entrevista/${id}`)
            .then((response) => response.json())
            .then((json) => {
                document.getElementById("nombreRH").value = json.entrevistador;
                document.getElementById("fecha").value = json.fecha;
                document.getElementById("entrevistado").value = json.entrevistado;
                document.getElementById("especialidad").value = json.especialidad;
                document.getElementById("experiencia").value = json.experiencia;
                document.getElementById("encargado").value = json.encargado;
            }); 
}

function editar(){
    let entrevistador = document.querySelector('#nombreRH').value;
    let fecha = document.querySelector('#fecha').value;
    let entrevistado = document.querySelector('#entrevistado').value;
    let especialidad = document.querySelector('#especialidad').value;
    let experiencia = document.querySelector('#experiencia').value;
    let encargado = document.querySelector('#encargado').value;
    let cv = "cv.pdf";

    fetch(`http://localhost:3000/entrevista/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            entrevistador : entrevistador,
            fecha: fecha,
            entrevistado: entrevistado,
            especialidad: especialidad,
            experiencia: experiencia,
            encargado: encargado,
            cv: cv
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((reponse) => reponse.json())
    .then((json) => console.log(json));
    location.href = "../html/vista-general.html";
}