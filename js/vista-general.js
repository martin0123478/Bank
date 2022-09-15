window.onload = async function () {
    consumoAPI();
}

function formulario(){
    window.location = "../html/formulario_superUsuario.html";
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
                            <select name="ops" id="opciones${id}" class="option" onChange="eliminarEditar(${id})">
                                <option disable selected hidden>Seleccione</option>
                                <option value="eliminar" class="op eliminar">Eliminar</option>
                                <option value="editar" class="op editar">Editar</option>
                            </select>
                        </td>
                    </tr>`
        tabla.innerHTML = filadatos;
    });
}

function eliminarEditar(id) {
    let op = document.querySelector(`#opciones${id}`).value;
    if(op == 'eliminar'){
        console.log(id);
        fetch(`http://localhost:3000/entrevista/${id}`, {
            method: 'DELETE'
        })
        window.location.reload();
    }else{
        let url = `../html/editar-entrevista.html?id=${id}`;
        location.href = url;
    }

    /* if(option == 'editar'){
            const datos = fetch(`http://localhost:3000/entrevista/${id}`)
            .then((response) => response.json())
            .then((json) => {
                document.getElementById("nombreRH").value = json.entrevistador;
                document.getElementById("fecha").value = json.fecha;
                document.getElementById("entrevistado").value = json.entrevistado;
                document.getElementById("especialidad").value = json.especialidad;
                document.getElementById("experiencia").value = json.experiencia;
                document.getElementById("encargado").value = json.encargado;
            }); 
    } */
}
