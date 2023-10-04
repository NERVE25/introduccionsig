//alert("Hola este es mi Javascript");

//let nombre = "Bryan";

//var nombre1 = "Bryan";

//const nombre2 = "Bryan";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

// SELECCIONAR ELEMENTOS

let contenidotitulo = "Nombre";

let titulo = document .querySelector(".fuente-acento");
titulo.innerHTML = contenidotitulo;

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre" ){
    titulo.innerHTML = "otro";
}
else{
    console.log("no se cumple");
}

//actividad
let contenidomain = "Nombre";

let main = document .querySelector(".fuente");
main.innerHTML = contenidomain;

let textomain = main.innerText;
console.log(textomain);

if(textomain == "Nombre" ){
    main.innerHTML = "otro";
}
else{
    console.log("no se cumple");
}

//FUNCIONES

