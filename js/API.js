const url = 'http://localhost:3000/candidatos';

export const nuevoCandidato =async candidato => {
    try {
   await fetch(url,{
        method:'POST',
        body: JSON.stringify(candidato),
        headers:{
            'Content-Type':'application/json'
        }
    })  
    window.location.href = 'rh-tabla.html'
    } catch (error) {
        console.log(error)
    }
}
//Elimina un cliente

export const eliminarCliente = async id =>{
    try {
        await fetch(`${url}/${id}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}

export const busqueda = async  name =>{
    try {
     const res= await fetch(`${url}?nombre=${name}`) 
     const cliente = await res.json()
     return cliente
    } catch (error) {
        console.log(error)
    }
}
