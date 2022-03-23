console.log("App Working - binary");

/*
1) elegir un numero al azar entre 1 y 100. numero buscado 
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
let intentosR = 0;
let arrIntentosBinario = [];
let ultimoIntento = -1;

const elegirNumeroBinario = (min, max) => {
  numeroBuscadoBinary = parseInt(Math.random() * (max - min) + min);
  console.log("Random Number: " + numeroBuscadoBinary);
};

const eleccionUsuarioBinario = (min, max) => {
  numeroUsuario = (max - min) / 2;
  console.log("Binary Search: " + numeroUsuario);
};

const verificarCoincidenciaBinario = (objetivo, elegido) => {


  if (objetivo === elegido) {
   intentosR++;
    console.log("Acerto el numero en " + intentosR + " intentosR.");
    arrIntentosBinario.push(intentosR);

    numeroBuscadoBinary = 0;
    numeroUsuario = 0;
    maximo = 100;
    minimo = 0;
    contador = 0; 
intentosR = 0;

    console.log("----------------------------");

} 
  else if (objetivo > elegido) {
   intentosR++;
    
    minimo = elegido;
    numeroUsuario = Math.floor(maximo - (maximo - minimo) / 2);
    console.log("Ese numero no es, es muy chico. Elija Otro: " + numeroUsuario);
    verificarCoincidenciaBinario(numeroBuscadoBinary, numeroUsuario);
  } 
  else {
   
    intentosR++;

    maximo = elegido;
    numeroUsuario = Math.floor(minimo + (maximo - minimo) / 2);
    console.log("Ese numero no es, es muy grande. Elija Otro: " + numeroUsuario);

    verificarCoincidenciaBinario(numeroBuscadoBinary, numeroUsuario);
  }
};

const promedioBinario = (array) => {
  let sumando = 0;

  for (let i = 0; i < array.length; i++) {
    sumando += array[i];
  }

  console.log(arrIntentosBinario);
  let valorPromedio = parseInt(sumando / array.length);


  let verResultado = document.getElementById("inputGroup-sizing-defaultD");
  verResultado.innerText =`En promedio de acierto es con ${valorPromedio} intentos.`;

  arrIntentosBinario=[];




};

const probarBinario = (pruebas, rangoMinimo, rangoMaximo) => {
  for (let i = 0; i < pruebas; i++) {
    elegirNumeroBinario(rangoMinimo, rangoMaximo);
    eleccionUsuarioBinario(rangoMinimo, rangoMaximo);
    verificarCoincidenciaBinario(numeroBuscadoBinary, numeroUsuario);
  }

  promedioBinario(arrIntentosBinario);
};


let ejecutarBinario = document.getElementById("tryBtnD");
ejecutarBinario.addEventListener("click", () =>{
  console.log("escuchando el evento")
  
  let cantidadNumeros = document.forms["tablaD"]["testRangeD"].value;
  let cantidadPruebas = document.forms["tablaD"]["testQuantityD"].value;
  maximo = cantidadNumeros;


  probarBinario(cantidadPruebas, minimo, cantidadNumeros);
})
