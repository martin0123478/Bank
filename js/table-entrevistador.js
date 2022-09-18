
window.onload = async function( ) {
    obtnerDatosAPI();
}

function obtnerDatosAPI(){
    const url = "http://localhost:3000/candidatos" ;
    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => mostrarHTML(resultado));
}

function mostrarHTML(datos){
 
    

    //Dentro de Tbody
    let tabla = document.querySelector('#myTable');
    let filadatos = ''; //tabla.innerHTML;
    
    // ForEach que recorre el JSON 
    datos.forEach(usr => {
        let id = usr.id;
        let nombre     = usr.nombre;  
        let posicion   = usr.posicion; 
        let fecha = usr.fecha
        let estatus = usr.estatus
        let experiencia = usr.experiencia

        // LLenamos la tabla de candidatos 
        //Creamos una fila 
        let fila =  document.createElement("tr");
        fila.setAttribute("class", "row-candidato");

        filadatos += `<tr class="row-candidato">
                <td class="Nombre_Col">${nombre}</td>
                <td class="Posicion_Col">${posicion}</td>
                <td class="Registro_Col">${fecha}</td>
                <td class="Estatus_Col">${estatus}</td>`;
                /*<td class="Boton_Col"><a id="boton${id}" class="button_candidatos" href="entrevistador-Form.html?id=${id}"><img class="Icon_button_candidatos" src="../images/ver.png" /> Ver perfil </a></td>
            </tr>`*/

        if (experiencia != ''){
            filadatos += `<td class="Boton_Col"><a id="boton${id}" class="button_candidatos" href="entrevistador-Form.html?id=${id}"><img class="Icon_button_candidatos" src="../images/edit.png" /> Editar </a></td>
            </tr>`;
        }else {
            filadatos += `<td class="Boton_Col"><a id="boton${id}" class="button_candidatos" href="entrevistador-Form.html?id=${id}"><img class="Icon_button_candidatos" src="../images/ver.png" /> Ver perfil </a></td>
            </tr>`;
        }

        tabla.innerHTML = filadatos;
    });
}


