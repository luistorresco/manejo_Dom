// selecionar por nombre de etiquetas 

/*let titulo =document.querySelector("h1");
console.log(titulo);
titulo.style.backgroundColor="red";
//seleccionar por nombre de la clase 
let subtitulo1 = document.querySelector(".sub1");
subtitulo1.style.color="green";
//seleccionar por id 
let p2 = document.querySelector("#p2");
p2.style.fontSize="50px";
// seleccionar una etiqueta dentro de otra 
//let subtitulo=document.querySelector("span  h2");
//subtitulo.style.backgroundColor ="green";
//subtitulo.display="flex";
let div1 = document.querySelector("div"); 
//div1.style.display="flex";

//titulo.textContent = "hola mundo";

// seleccionar varias etiquetas 
let ps = document.querySelectorAll("p");
console.log(ps);
console.log("total:" +ps.length);
for (let i = 0; i < ps.length; i++){
    ps[i].textContent = "hola" +i;
}
ps [2].textContent = "soy otro parrafo";
ps [2].style.fontSize="100px";


// crear etiquetas 
let a = document.createElement("a");
let textoA =document.createTextNode("ir a youtube");
a.appendChild(textoA);
a.setAttribute("href", "https://www.youtube.com");
a.setAttribute("target", "_blank");
a.textContent="youtube";
let textoEnlace= a.textoContent;
subtitulo1.insertAdjacentElement("afterend", a);

//let body = document.body;
//body.appendChild(a);


let p3 =document.querySelector(".p3");
let h1= document.createElement("h1");
let texto =p3.textContent;
h1.textContent=texto;
p3.replaceWith(h1);

h1.remove()*/

let titulo = document.querySelector("h1");
//agregar una clase desde css
//titulo.classList.add("color")
//eliminar una cladse de css al elemento 
//titulo.classList.remove("letra");
titulo.classList.toggle("color");
//comprobar si existe una clase en el elemento
let existeClase = titulo.classList.contains ("color");
console.log ("el elemento tiene la clase?" + existeClase);

let p2 = document.querySelector(".p2");
// ocultar por style
//p2.style.display="none";
//p2.classList.add("ocultar");
//
