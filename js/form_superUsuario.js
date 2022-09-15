function registrar(){
    let entrevistador = document.querySelector('#nombreRH').value;
    let fecha = document.querySelector('#fecha').value;
    let entrevistado = document.querySelector('#entrevistado').value;
    let especialidad = document.querySelector('#especialidad').value;
    let experiencia = document.querySelector('#experiencia').value;
    let encargado = document.querySelector('#encargado').value;
    let cv = "cv.pdf";

    fetch('http://localhost:3000/entrevista', {
        method: 'POST',
        body: JSON.stringify({
            id: '',
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

    window.location.href = "../html/vista-general.html";
}