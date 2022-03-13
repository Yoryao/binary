console.log("App Working");


/*
1) elegir un numero al azar entre 1 y 100. numero buscado 
2) declarar contadores necesarios.
3) declarar algoritmo de busqueda
4) elegir un numero al azar.
5) verificar si acerto
    registrar datos.
6) definir la mitad del rango
7) preguntar si es mayor o menor
8) elegir numero al azar dentro del rango
continuar desde 5 hasta que acierte
*/


let numeroBuscado = 0;
let numeroUsuario = 0;
let intentos = 0;
let arrIntentos = [];
let arrNumeros = [];

const elegirNumero = () => {
  numeroBuscado = parseInt(Math.random() * 5);
  console.log("Random Number: " + numeroBuscado);
};

const eleccionUsuario = () => {
  numeroUsuario = parseInt(Math.random() * 5);
  console.log("Numero elegido Inicial: " + numeroUsuario);
};

const verificarCoincidencia = (objetivo, elegido) => {
  intentos++;
  
  if (objetivo === elegido) {
      console.log("Acerto el numero");
      //console.log("Numero elegido acertado: " + numeroUsuario);
      console.log("Numeros: " + arrNumeros);
    arrNumeros.push(numeroUsuario);
    arrIntentos.push(intentos);
    console.log("Intentos: " + intentos);
    console.log("----------------------------");

    intentos = 0;
    numeroBuscado = 0;
    numeroUsuario = 0;
    arrNumeros = [];

  } else if (arrNumeros.includes(numeroUsuario)) {
    intentos--;
    numeroUsuario = parseInt(Math.random() * 5);
    console.log("Numero ya elegido. Elija Otro: " + numeroUsuario );
    verificarCoincidencia(numeroBuscado, numeroUsuario);
  } else {
      numeroUsuario = parseInt(Math.random() * 5);
    console.log("Ese numero no es. Elija Otro: " + numeroUsuario)
    // if(!(arrNumeros.includes(numeroUsuario))){
         arrNumeros.push(numeroUsuario);
    verificarCoincidencia(numeroBuscado, numeroUsuario);
  }
};

const promedio = (array) => {
  let sumando = 0;

  for (let i = 0; i < array.length; i++) {
    sumando += array[i];
  }

  console.log(arrIntentos);
  console.log("el promedio es " + sumando / array.length);
};

const pruebas = (x) => {
  for (let i = 0; i < x; i++) {
    elegirNumero();
    eleccionUsuario();
    verificarCoincidencia(numeroBuscado, numeroUsuario);
  }

  promedio(arrIntentos);
};

pruebas(5);
