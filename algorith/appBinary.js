let maximo = 0;
let minimo = 0;
let numeroBuscadoBinary = 0;
let numeroUsuario = 0;
let intentosR = 0;
let arrIntentosBinario = [];
let ultimoIntento = -1;

const elegirNumeroBinario = (min, max) => {
  numeroBuscadoBinary = parseInt(Math.random() * (max - min) + min);
};

const eleccionUsuarioBinario = (min, max) => {
  numeroUsuario = (max - min) / 2;
};

const verificarCoincidenciaBinario = (objetivo, elegido) => {

  if (objetivo === elegido) {
   intentosR++;
    arrIntentosBinario.push(intentosR);

    numeroBuscadoBinary = 0;
    numeroUsuario = 0;
    maximo = 100;
    minimo = 0;
    contador = 0; 
    intentosR = 0;

} 
  else if (objetivo > elegido) {
   intentosR++;
    
    minimo = elegido;
    numeroUsuario = Math.floor(maximo - (maximo - minimo) / 2);
    verificarCoincidenciaBinario(numeroBuscadoBinary, numeroUsuario);
  } 
  else {
   
    intentosR++;
    maximo = elegido;
    numeroUsuario = Math.floor(minimo + (maximo - minimo) / 2);
    verificarCoincidenciaBinario(numeroBuscadoBinary, numeroUsuario);
  }
};

const promedioBinario = (array) => {
  let sumando = 0;
  for (let i = 0; i < array.length; i++) {
    sumando += array[i];
  }

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
  
  let cantidadNumeros = document.forms["tablaD"]["testRangeD"].value;
  let cantidadPruebas = document.forms["tablaD"]["testQuantityD"].value;
  maximo = cantidadNumeros;
  probarBinario(cantidadPruebas, minimo, cantidadNumeros);
})
