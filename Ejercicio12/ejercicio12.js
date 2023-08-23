const d= document;
let campoTexto = d.querySelector(".texto");
let botonCrear = d.querySelector(".boton");
let tabla =d.querySelector(".table tbody");
let contar = 1;

botonCrear.addEventListener("click",  () => {
    crearTarea();
})

let crearTarea = () => {
    if(campoTexto.value == ""){
        alert("Escribe una tarea");
        return;
    }
    let fila = d.createElement("tr");
    fila.innerHTML = `<td> ${contar++} </td>
    <td> <span class="respuesta"> ${campoTexto.value} </span> </td>
    <td> <span class= "botonEditar" onclick="editarTarea(this);"> ✍ </span> </td>
    <td> <span class= "botonEliminar" onclick="eliminarTarea()";> X </span> </td>`;
    
    tabla.appendChild(fila);
    campoTexto.value = "";
}

let eliminarTarea = () => {
    let botonEliminar = d.querySelector(".botonEliminar");
    let confirmar = confirm("Desea eliminar esta tarea ? ");
    if(confirmar){
        botonEliminar.parentElement.parentElement.remove();
    }
}

campoTexto.addEventListener("keyup", (e) => {
    if(e.key == "Enter" ){
        crearTarea();
    }
});

let editarTarea = (elemento) => {
    let encontrarFila = elemento.closest("tr");
    let respuesta = encontrarFila.querySelector(".respuesta");
    let newTexto = prompt("Edita aqui");
    if(newTexto !== null){
        respuesta.textContent = newTexto;
    }
}