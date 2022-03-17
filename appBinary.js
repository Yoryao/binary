console.log("App Working - binary");

/*
-------------1) elegir un numero al azar entre 1 y 100. numero buscado 
2) declarar contadores necesarios.
3) declarar algoritmo de buqueda
4) elegir un numero al azar.
5) verificar si acerto
    registrar datos.
6) definir la mitad del rango
7) preguntar si es mayor o menor
8) elegir numero al azar dentro del rango
continuar desde 5 hasta que acierte
*/

let maximo = 0;
let minimo = 0;
let numeroBuscadoBinary = 0;
let numeroUsuario = 0;
let intentos = 0;
let arrIntentos = [];
let ultimoIntento = -1;

const elegirNumero = (min, max) => {
  numeroBuscadoBinary = parseInt(Math.random() * (max - min) + min);
  console.log("Random Number: " + numeroBuscadoBinary);
};

const eleccionUsuario = (min, max) => {
  numeroUsuario = (max - min) / 2;
  console.log("Binary Search: " + numeroUsuario);
};

const verificarCoincidencia = (objetivo, elegido) => {


  if (objetivo === elegido) {
   intentos++;
    console.log("Acerto el numero en " + intentos + " intentos.");
    arrIntentos.push(intentos);

    numeroBuscadoBinary = 0;
    numeroUsuario = 0;
    maximo = 100;
    minimo = 0;
    contador = 0; 
intentos = 0;

    console.log("----------------------------");

} 
  else if (objetivo > elegido) {
   intentos++;
    
    minimo = elegido;
    numeroUsuario = Math.floor(maximo - (maximo - minimo) / 2);
    console.log("Ese numero no es, es muy chico. Elija Otro: " + numeroUsuario);
    verificarCoincidencia(numeroBuscadoBinary, numeroUsuario);
  } 
  else {
   
    intentos++;

    maximo = elegido;
    numeroUsuario = Math.floor(minimo + (maximo - minimo) / 2);
    console.log("Ese numero no es, es muy grande. Elija Otro: " + numeroUsuario);

    verificarCoincidencia(numeroBuscadoBinary, numeroUsuario);
  }
};

const promedio = (array) => {
  let sumando = 0;

  for (let i = 0; i < array.length; i++) {
    sumando += array[i];
  }

  console.log(arrIntentos);


  let resultado = sumando/array.length;
  let verResultado = document.getElementById("inputGroup-sizing-defaultC");
verResultado.innerText =`En promedio de acierto es con ${resultado} intentos.`;





};

const probarC = (pruebas, rangoMinimo, rangoMaximo) => {
  for (let i = 0; i < pruebas; i++) {
    elegirNumero(rangoMinimo, rangoMaximo);
    eleccionUsuario(rangoMinimo, rangoMaximo);
    verificarCoincidencia(numeroBuscadoBinary, numeroUsuario);
  }

  promedio(arrIntentos);
};


let ejecutarC = document.getElementById("tryBtnC");
ejecutarC.addEventListener("click", () =>{
  console.log("escuchando el evento")
  
  let cantidadNumeros = document.forms["tablaC"]["testRangeC"].value;
  let cantidadPruebas = document.forms["tablaC"]["testQuantityC"].value;
  maximo = cantidadNumeros;


  probarC(cantidadPruebas, minimo, cantidadNumeros);
})
