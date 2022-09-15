function login() {
    const api_url = "http://localhost:3000/users";
    fetch(api_url)
        .then(respuesta => respuesta.json())
        .then((resultado) => {
            console.log(resultado);
            var user, pass;

            user = document.getElementById("email").value;
            pass = document.getElementById("password").value;

            resultado.forEach(usr => {
                let email = usr.correo;
                let password = usr.password;
                let tipo = usr.tipoUsuario;

                if (email == user && password == pass) {
                    if (tipo == "admin") {
                        window.location = "../html/vista-general.html";
                    } else if (tipo == "entrevistador") {
                        window.location = "../html/entrevistador-Tabla.html";
                    } else if (tipo == "rh") {
                        window.location = "../html/rh-tabla.html";
                    }
                }
            });

            if(user == 0 && pass == 0){
                alert("ERROR. Ingresa tu correo y contraseña.")
            }
        });
}



