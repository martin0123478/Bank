window.onload = function(){
    obtenerData();
}

function obtenerData(){
    const url = 'https://jsonplaceholder.typicode.com/users'; 
    fetch(url)
    .then(response => response.json())
    //.then(json => console.log(json))
    .then(json => getData(json))
}


// Funcion que consume los campos de la api y genera objetos de cada usuario y los agregar a un arreglo
function getData(info){
    getEntrevistadores(info);
    getEntrevistados(info);
}

let entrevistadores = [];
function getEntrevistadores(info){
    for (let i = 0; i < 4; i++){
        let alias = info[i].username;
        let porcentaje = (info[i].id) * 10;
        let nuevoEntrevistador = new entrevistador(alias, porcentaje);
        entrevistadores.push(nuevoEntrevistador);
    }
    getSerie(entrevistadores);
}

const entrevistados = [];
const cantidad = [];
function getEntrevistados(info){
    //console.log(info);
    for (let j = 0; j < info.length; j++){
        let nombre = info[j].name;
        entrevistados.push(nombre);
        let barraInfo = info[j].address.suite;
        let sub = parseInt(barraInfo.substr(barraInfo.length - 2));
        cantidad.push(sub);
    }
}


//Funcion que genera los objetos
function entrevistador (alias, porcentaje){
    this.alias = alias;
    this.porcentaje = porcentaje;
}