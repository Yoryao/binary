console.log("App Working - binaryRange");

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

let maximo = 100;
let minimo = 0;
let numeroBuscado = 0;
let numeroUsuario = 0;

let indice = .5;

//el error se produce al pasar de .57 a .56

let intentos = 1;
let arrIntentos = [];
let ultimoIntento = -1;

const elegirNumero = (min, max) => {
  numeroBuscado = parseInt(Math.random() * (max - min) + min);
  // console.log("Numero Objetivo " + numeroBuscado);
 // console.log("Random Number: " + numeroBuscado);
};

const eleccionUsuario = (min, max) => {
  numeroUsuario = (max - min) * indice;
  // console.log("Numero elegido inicial: " + numeroUsuario);
};

const verificarCoincidencia = (objetivo, elegido) => {
//  console.log("Binary Search posterior: " + numeroUsuario);

  if (objetivo === elegido) {
    // console.log("Acerto el numero en " + intentos + " intentos.");
    arrIntentos.push(intentos);
    intentos = 1;

    numeroBuscado = 0;
    numeroUsuario = 0;
    maximo = 100;
    minimo = 0;

} 
  else if (elegido < objetivo) {
    minimo = elegido;

    numeroUsuario = Math.floor(minimo + ((maximo - minimo) * indice));


    // numeroUsuario = Math.floor(maximo - (maximo - minimo) *.75);
    intentos++;
    verificarCoincidencia(numeroBuscado, numeroUsuario);
  } 
  else {
    maximo = elegido;
    numeroUsuario = Math.floor(minimo + ((maximo - minimo) * indice));


    // numeroUsuario = Math.floor(minimo + (maximo - minimo) *.75);
    intentos++;
    verificarCoincidencia(numeroBuscado, numeroUsuario);
  }
};

// elegirNumero(minimo, maximo);
// eleccionUsuario(minimo, maximo);

// verificarCoincidencia(numeroBuscado, numeroUsuario);

const promedio = (array) => {
  let sumando = 0;

  for (let i = 0; i < array.length; i++) {
    sumando += array[i];
  }

  console.log(arrIntentos);
  console.log("el promedio es " + sumando / array.length);
};

const pruebas = (pruebas, rangoMinimo, rangoMaximo) => {
  for (let i = 0; i < pruebas; i++) {
    elegirNumero(rangoMinimo, rangoMaximo);
    eleccionUsuario(rangoMinimo, rangoMaximo);
    verificarCoincidencia(numeroBuscado, numeroUsuario);
  }

  promedio(arrIntentos);
};

pruebas(1000, 0, 100);
