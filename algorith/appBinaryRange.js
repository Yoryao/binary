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

let maximoBinarioRango = 0;
let minimoBinarioRango = 0;
let numeroBuscadoBinarioRango = 0;
let numeroUsuarioBinarioRango = 0;
let intentosBinarioRango = 0;
let arrIntentosBinarioRango = [];

const elegirNumeroBinarioRango = (min, max) => {
  numeroBuscadoBinarioRango = parseInt(Math.random() * (max - min) + min);
  console.log("Random Number: " + numeroBuscadoBinarioRango);
};

const eleccionUsuarioBinarioRango = (min, max) => {
  numeroUsuarioBinarioRango = (max - min) * 0.75;
  console.log("Binary Search: " + numeroUsuarioBinarioRango);
};

const verificarCoincidenciaBinarioRango = (objetivo, elegido) => {


  if (objetivo === elegido) {
   intentosBinarioRango++;
    console.log("Acerto el numero en " + intentosBinarioRango + " intentos.");
    arrIntentosBinarioRango.push(intentosBinarioRango);

    numeroBuscadoBinarioRango = 0;
    numeroUsuarioBinarioRango = 0;
    maximoBinarioRango = 100;
    minimoBinarioRango = 0;
    contador = 0; 
    intentosBinarioRango = 0;
    console.log("----------------------------");

} 
  else if (objetivo > elegido) {
   intentosBinarioRango++;
    
    minimoBinarioRango = elegido;
    numeroUsuarioBinarioRango = Math.floor(minimoBinarioRango + (maximoBinarioRango - minimoBinarioRango) * .75);
    console.log("Ese numero no es, es muy chico. Elija Otro: " + numeroUsuarioBinarioRango);
    verificarCoincidenciaBinarioRango(numeroBuscadoBinarioRango, numeroUsuarioBinarioRango);
  } 
  else {
   
    intentosBinarioRango++;

    maximoBinarioRango = elegido;
    numeroUsuarioBinarioRango = Math.floor(minimoBinarioRango + (maximoBinarioRango - minimoBinarioRango) * .75);
    console.log("Ese numero no es, es muy grande. Elija Otro: " + numeroUsuarioBinarioRango);

    verificarCoincidenciaBinarioRango(numeroBuscadoBinarioRango, numeroUsuarioBinarioRango);
  }
};

const promedioBinarioRango = (array) => {
  let sumando = 0;

  for (let i = 0; i < array.length; i++) {
    sumando += array[i];
  }

  console.log(arrIntentosBinarioRango);
  let valorPromedio = parseInt(sumando / array.length);

  let verResultado = document.getElementById("inputGroup-sizing-defaultC");
verResultado.innerText =`En promedio de acierto es con ${valorPromedio} intentos.`;

arrIntentosBinarioRango=[];


};

const probarBinarioRango = (pruebas, rangoMinimoBinarioRango, rangoMaximoBinarioRango) => {
  for (let i = 0; i < pruebas; i++) {
    elegirNumeroBinarioRango(rangoMinimoBinarioRango, rangoMaximoBinarioRango);
    eleccionUsuarioBinarioRango(rangoMinimoBinarioRango, rangoMaximoBinarioRango);
    verificarCoincidenciaBinarioRango(numeroBuscadoBinarioRango, numeroUsuarioBinarioRango);
  }

  promedioBinarioRango(arrIntentosBinarioRango);
};


let ejecutarC = document.getElementById("tryBtnC");
ejecutarC.addEventListener("click", () =>{
  
  let cantidadNumeros = document.forms["tablaC"]["testRangeC"].value;
  let cantidadPruebas = document.forms["tablaC"]["testQuantityC"].value;
  maximoBinarioRango = cantidadNumeros;


  probarBinarioRango(cantidadPruebas, minimoBinarioRango, cantidadNumeros);
})
