window.onload = async function(){
    consumoAPI();
}

function consumoAPI(){
    const api_url = "http://localhost:3000/candidatos";
    fetch(api_url)
        .then( respuesta => respuesta.json())
        .then( resultado => mostrarHTML(resultado));
}

function mostrarHTML(datos){
    console.log(datos);

    let tabla = document.querySelector('#table');
    let filadatos = tabla.innerHTML;

    datos.forEach(usr => {
        let nombre = usr.nombre;
        let posicion = usr.posicion;
        let registro = usr.registro;
        let estatus = usr.estatus;
        
        let fila = document.createElement("tr");
        fila.setAttribute("class", "row-candidato");

        filadatos += `<tr>
                        <td>${nombre}</td>
                        <td>${posicion}</td>
                        <td>${registro}</td>
                        <td>${estatus}</td>
                        <td>
                            <div class="eye-section">
                                <input class="option-view" type="button" value="Ver perfil">
                                <span class="icon icon-eye"></span>
                            </div>
                         </td>
                    </tr>`
        tabla.innerHTML = filadatos;
    });
}