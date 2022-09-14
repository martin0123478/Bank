const url = 'http://localhost:3000/entrevista';

let entrevista = {
    entrevistador:'',
    fecha:'',
    entrevistado:'',
    especialidad:'',
    experiencia:'',
    encargado:'',
    cv: ''
}

function guardarEntrevista(){
    const entrevistador = document.querySelector('#nombreRH').value;
    const fecha = document.querySelector('#fecha').value;
    const entrevistado = document.querySelector('#entrevistado').value;
    const especialidad = document.querySelector('#especialidad').value;
    const experiencia = document.querySelector('#experiencia').value;
    const encargado = document.querySelector('#encargado').value;
    const cv = "cv.pdf";

    console.log(entrevistador);
    console.log(fecha);
    console.log(entrevistado);
    console.log(especialidad);
    console.log(experiencia);
    console.log(encargado);
    console.log(cv);

    //revisar si hay campos vacios
    const camposVacios =[entrevistador,fecha,entrevistado,especialidad,experiencia,encargado,cv].some(campo => campo==='');

    if(camposVacios){
        //verificar si ya hay una alerta
        const existe = document.querySelector('.alert');
        if(!existe){
            const alerta = document.createElement('p');
            alerta.classList.add('alert');
            alerta.style.color = 'red';
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('#form').appendChild(alerta);
            setTimeout(() => {
                alerta.remove();
            }, 15000);
        }
        return
    }
    //asignar datos del formulario a candidato
    entrevista = {entrevistador,fecha,entrevistado,especialidad,experiencia,encargado,cv}
    nuevaEntrevista(candidato);    
}

const nuevaEntrevista = async entrevista => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(entrevista),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'vista-general.html'
    } catch (error) {
        console.log(error)
    }
}