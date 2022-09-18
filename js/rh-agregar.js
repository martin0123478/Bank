import {nuevoCandidato} from './API.js'
let candidato = {
    nombre:'',
    posicion:'',
    entrevistador:'',
    estatus:'',
    fecha:'',
    experiencia: '',
      tecnologias: '',
      nivel_candidato: '',
      cumple_Si: '',
      cumple_No: '',
      comentarios: ''

}

const  btnGuardar = document.querySelector('#guardar');
btnGuardar.addEventListener('click',guardarCandidato)

function guardarCandidato(){
    const nombre = document.querySelector('#nombre').value;
    const posicion = document.querySelector('#posicion').value;
    const entrevistador = document.querySelector('#entrevistador').value;
    const fecha = document.querySelector('#fecha').value;
    const estatus = document.querySelector('#estatus').value;
    const experiencia = ''
     const  tecnologias = ''
    const   nivel_candidato = ''
    const  cumple_Si = ''
     const cumple_No = ''
    const  comentarios = ''

    //revisar si hay campos vacios
    const camposVacios =[nombre,posicion,entrevistador,fecha,estatus].some(campo => campo==='')

    if(camposVacios){
        //verificar si ya hay una alerta
        const existe = document.querySelector('.alert');
        if(!existe){
            const alerta = document.createElement('p');
        alerta.classList.add('alert')
        alerta.style.color = 'red'
        alerta.textContent = 'Todos los campos son obligatorios'
        document.querySelector('#form').appendChild(alerta)
        setTimeout(() => {
            alerta.remove()
        }, 3000);
        }
        return
    }
    //asignar datos del formulario a candidato
    candidato = {nombre,posicion,entrevistador,fecha,estatus,experiencia,
    tecnologias,nivel_candidato,cumple_Si,cumple_No,comentarios}
    nuevoCandidato(candidato)    
    
    

    
}

