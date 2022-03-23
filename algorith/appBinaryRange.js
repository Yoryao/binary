console.log("App Working - binaryRange");

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

let maximoD = 0;
let minimoD = 0;
let numeroBuscadoBinaryD = 0;
let numeroUsuarioD = 0;
let intentosB = 0;
let arrIntentosB = [];
let ultimoIntentoD = -1;

const elegirNumeroB = (min, max) => {
  numeroBuscadoBinaryD = parseInt(Math.random() * (max - min) + min);
  console.log("Random Number: " + numeroBuscadoBinaryD);
};

const eleccionUsuarioB = (min, max) => {
  numeroUsuarioD = (max - min) * 0.75;
  console.log("Binary Search: " + numeroUsuarioD);
};

const verificarCoincidenciaD = (objetivo, elegido) => {


  if (objetivo === elegido) {
   intentosB++;
    console.log("Acerto el numero en " + intentosB + " intentosB.");
    arrIntentosB.push(intentosB);

    numeroBuscadoBinaryD = 0;
    numeroUsuarioD = 0;
    maximoD = 100;
    minimoD = 0;
    contador = 0; 
intentosB = 0;

    console.log("----------------------------");

} 
  else if (objetivo > elegido) {
   intentosB++;
    
    minimoD = elegido;
    numeroUsuarioD = Math.floor(minimoD + (maximoD - minimoD) * .75);
    console.log("Ese numero no es, es muy chico. Elija Otro: " + numeroUsuarioD);
    verificarCoincidenciaD(numeroBuscadoBinaryD, numeroUsuarioD);
  } 
  else {
   
    intentosB++;

    maximoD = elegido;
    numeroUsuarioD = Math.floor(minimoD + (maximoD - minimoD) * .75);
    console.log("Ese numero no es, es muy grande. Elija Otro: " + numeroUsuarioD);

    verificarCoincidenciaD(numeroBuscadoBinaryD, numeroUsuarioD);
  }
};

const promedioD = (array) => {
  let sumando = 0;

  for (let i = 0; i < array.length; i++) {
    sumando += array[i];
  }

  console.log(arrIntentosB);


  let resultado = sumando/array.length;
  let verResultado = document.getElementById("inputGroup-sizing-defaultD");
verResultado.innerText =`En promedio de acierto es con ${resultado} intentosB.`;
console.log(`En promedio de acierto es con ${resultado} intentosB.`)

arrIntentosB=[];


};

const probarCD = (pruebas, rangoMinimoD, rangoMaximoD) => {
  for (let i = 0; i < pruebas; i++) {
    elegirNumeroB(rangoMinimoD, rangoMaximoD);
    eleccionUsuarioB(rangoMinimoD, rangoMaximoD);
    verificarCoincidenciaD(numeroBuscadoBinaryD, numeroUsuarioD);
  }

  promedioD(arrIntentosB);
};


let ejecutarD = document.getElementById("tryBtnD");
ejecutarD.addEventListener("click", () =>{
  console.log("escuchando el evento")
  
  let cantidadNumeros = document.forms["tablaD"]["testRangeD"].value;
  let cantidadPruebas = document.forms["tablaD"]["testQuantityD"].value;
  maximoD = cantidadNumeros;


  probarCD(cantidadPruebas, minimoD, cantidadNumeros);
})
