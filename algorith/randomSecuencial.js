let numeroBuscado = 0;
let numeroUsuarioA = 0;
let numeroIndice = 0;

let intentos = 0;
let arrIntentos = [];
let arrNumeros = [];

const elegirNumero = (index) => {
  numeroIndice = index;
  numeroBuscado = parseInt(Math.random() * index);
};

const eleccionUsuario = (index) => {
  numeroUsuarioA = parseInt(Math.random() * index);
};

const verificarCoincidencia = (objetivo, elegido) => {
  intentos++;
  if (objetivo === elegido) {
    arrNumeros.push(elegido);
    console.log("Acerto el numero. Era el " + elegido + ".");
    console.log("Numeros: " + arrNumeros);
    arrIntentos.push(intentos);
    console.log("Intentos: " + intentos);
    console.log("----------------------------");

    intentos = 0;
    numeroBuscado = 0;
    numeroUsuarioA = 0;
    arrNumeros = [];
  } else if (arrNumeros.includes(elegido)) {
    intentos--;
    numeroUsuarioA = parseInt(Math.random() * numeroIndice);
    console.log("Numero ya elegido. Elija Otro: " + numeroUsuarioA);
    verificarCoincidencia(objetivo, numeroUsuarioA);
  } else {
    arrNumeros.push(elegido);
    numeroUsuarioA = parseInt(Math.random() * numeroIndice);
    console.log("Ese numero no es. Elija Otro: " + numeroUsuarioA);
    verificarCoincidencia(objetivo, numeroUsuarioA);
  }
};

const promedio = (array, tipo) => {
  let sumando = 0;

  for (let i = 0; i < array.length; i++) {
    sumando += array[i];
  }

  let valorPromedio = parseInt(sumando / array.length);

  if ("a" === tipo) {
    let verResultado = document.getElementById("inputGroup-sizing-default");
    verResultado.innerText = `En promedio de acierto es con ${valorPromedio} intentos.`;
  } else if ("b" === tipo) {
    let verResultado = document.getElementById("inputGroup-sizing-defaultB");
    verResultado.innerText = `En promedio de acierto es con ${valorPromedio} intentos.`;
  }
};

const probar = (cantidadPruebas, cantidadNumeros) => {
  for (let i = 0; i < cantidadPruebas; i++) {
    elegirNumero(cantidadNumeros);
    eleccionUsuario(cantidadNumeros);
    verificarCoincidencia(numeroBuscado, numeroUsuarioA);
  }
  promedio(arrIntentos, "a");
};

const ejecutar = document.getElementById("tryBtnRandom");

ejecutar.addEventListener("click", () => {
  let cantidadNumeros = document.forms["tablaRandom"]["testRange"].value;
  let cantidadPruebas = document.forms["tablaRandom"]["testQuantity"].value;

  probar(cantidadPruebas, cantidadNumeros);
});

const verificarCoincidenciaB = (objetivo) => {

  intentos++;
  if (objetivo === numeroUsuarioA) {
    arrNumeros.push(numeroUsuarioA);
    arrIntentos.push(intentos);

    intentos = 0;
    numeroBuscado = 0;
    numeroUsuarioA = 0;
    arrNumeros = [];
  } else {
    arrNumeros.push(numeroUsuarioA);
    numeroUsuarioA++;
    verificarCoincidenciaB(objetivo);
  }
};

const probarB = (cantidadPruebas, cantidadNumeros) => {
  for (let i = 0; i < cantidadPruebas; i++) {
    elegirNumero(cantidadNumeros);
    verificarCoincidenciaB(numeroBuscado);
  }
  promedio(arrIntentos, "b");
};

const ejecutarB = document.getElementById("tryBtnSecuencial");

ejecutarB.addEventListener("click", () => {
  let cantidadNumeros = document.forms["tablaB"]["testRangeB"].value;
  let cantidadPruebas = document.forms["tablaB"]["testQuantityB"].value;
  probarB(cantidadPruebas, cantidadNumeros);
});
