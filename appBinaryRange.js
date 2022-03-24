
let maximoBinarioRango = 0;
let minimoBinarioRango = 0;
let numeroBuscadoBinarioRango = 0;
let numeroUsuarioBinarioRango = 0;
let intentosBinarioRango = 0;
let arrIntentosBinarioRango = [];

const elegirNumeroBinarioRango = (min, max) => {
  numeroBuscadoBinarioRango = parseInt(Math.random() * (max - min) + min);
};

const eleccionUsuarioBinarioRango = (min, max) => {
  numeroUsuarioBinarioRango = (max - min) * 0.75;
};

const verificarCoincidenciaBinarioRango = (objetivo, elegido) => {

  if (objetivo === elegido) {
   intentosBinarioRango++;
    arrIntentosBinarioRango.push(intentosBinarioRango);

    numeroBuscadoBinarioRango = 0;
    numeroUsuarioBinarioRango = 0;
    maximoBinarioRango = 100;
    minimoBinarioRango = 0;
    contador = 0; 
    intentosBinarioRango = 0;

} 
  else if (objetivo > elegido) {
   intentosBinarioRango++;
    
    minimoBinarioRango = elegido;
    numeroUsuarioBinarioRango = Math.floor(minimoBinarioRango + (maximoBinarioRango - minimoBinarioRango) * .75);
    verificarCoincidenciaBinarioRango(numeroBuscadoBinarioRango, numeroUsuarioBinarioRango);
  } 
  else {
   
    intentosBinarioRango++;
    maximoBinarioRango = elegido;
    numeroUsuarioBinarioRango = Math.floor(minimoBinarioRango + (maximoBinarioRango - minimoBinarioRango) * .75);
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
