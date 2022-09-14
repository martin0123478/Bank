var arrayOpciones = new Array();

window.onload = async function () {
    consumoAPI();
}



function consumoAPI() {
    const api_url = "http://localhost:3000/entrevista";
    fetch(api_url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarHTML(resultado));
}

function mostrarHTML(datos) {
    console.log(datos);

    let tabla = document.querySelector('#table');
    let filadatos = tabla.innerHTML;

    datos.forEach(usr => {
        let entrevistador = usr.entrevistador;
        let fecha = usr.fecha;
        let entrevistado = usr.entrevistado;
        let especialidad = usr.especialidad;
        let experiencia = usr.experiencia;
        let encargado = usr.encargado;
        let cv = usr.cv;
        let id = usr.id;

        let fila = document.createElement("tr");
        fila.setAttribute("class", "row-candidato");

        filadatos += `<tr>
                        <td>${entrevistador}</td>
                        <td>${fecha}</td>
                        <td>${entrevistado}</td>
                        <td>${especialidad}</td>
                        <td>${experiencia}</td>
                        <td>${encargado}</td>
                        <td>${cv}</td>
                        <td>
                            <select name="opciones" id="opcionesEE" aria-placeholder="Seleccionar" class="option" onChange="eliminarEditar()">
                                <option hidden selected>Seleccione</option>
                                <option value="editar" class="op eliminar">Eliminar</option>
                                <option value="eliminar" class="op editar">Editar</option>
                            </select>
                        </td>
                    </tr>`
        tabla.innerHTML = filadatos;
    });

    tabla.addEventListener('click',eliminarEditar);
}

function eliminarEditar(e) {
    if(e.target.classList.contains('eliminar')){
        console.log('Eliminar');
    }
}
