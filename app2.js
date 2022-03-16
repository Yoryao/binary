

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

//declaro las variables a utilizar
let numeroBuscado = 0;
let numeroUsuario = 0;
let numeroIndice = 0;

let intentos = 0;
let arrIntentos = [];
let arrNumeros = [];

//defino el sorteo del numero.
const elegirNumero = (index) => {
  numeroIndice = index;
  numeroBuscado = parseInt(Math.random() * index);
  console.log("Random Number: " + numeroBuscado);
};

//defino la eleccion del usuario.
const eleccionUsuario = (index) => {
  numeroUsuario = parseInt(Math.random() * index);
  console.log("Numero elegido Inicial: " + numeroUsuario);
};

//DEFINO EL ALGORITMO DE BUSQUEDA.
const verificarCoincidencia = (objetivo, elegido) => {
  intentos++;
  if (objetivo === elegido) {
    // arrNumeros.push(numeroUsuario);
    arrNumeros.push(elegido);
    console.log("Acerto el numero. Era el " + elegido + ".");
    console.log("Numeros: " + arrNumeros);
    arrIntentos.push(intentos);
    console.log("Intentos: " + intentos);
    console.log("----------------------------");

    intentos = 0;
    numeroBuscado = 0;
    numeroUsuario = 0;
    arrNumeros = [];
  } else if (arrNumeros.includes(elegido)) {
    intentos--;
    numeroUsuario = parseInt(Math.random() * numeroIndice);
    console.log("Numero ya elegido. Elija Otro: " + numeroUsuario);
    verificarCoincidencia(objetivo, numeroUsuario);
  } else {
    arrNumeros.push(elegido);
    numeroUsuario = parseInt(Math.random() * numeroIndice);
    console.log("Ese numero no es. Elija Otro: " + numeroUsuario);
    verificarCoincidencia(objetivo, numeroUsuario);
  }
};

const promedio = (array, tipo) => {
  let sumando = 0;

  for (let i = 0; i < array.length; i++) {
    sumando += array[i];
  }
  console.log("el promedio es " + sumando / array.length);

if ("a" === tipo){
  let resultado = sumando/array.length;
let verResultado = document.getElementById("inputGroup-sizing-default")
verResultado.innerText =`En promedio de acierto es con ${resultado} intentos.`
} else if ("b" === tipo){
  let resultado = sumando/array.length;
let verResultado = document.getElementById("inputGroup-sizing-defaultB")
verResultado.innerText =`En promedio de acierto es con ${resultado} intentos.`
}

};

//DEFINICION DE FX PRUEBA
const probar = (cantidadPruebas, cantidadNumeros) => {
  //EJECUTO EL BUCLE PARA LAS PRUEBAS
  for (let i = 0; i < cantidadPruebas; i++) {
    //EJECUTO LA FUNCION PARA SORTEAR EL NUMERO
    elegirNumero(cantidadNumeros);
    //EJECUTO LA PRIMERA ELECCION DEL USUARIO
    eleccionUsuario(cantidadNumeros);
    //COMIENZO LA ITERACION DE LOS NUMEROS PARA ACERTAR
    verificarCoincidencia(numeroBuscado, numeroUsuario);
  }
  promedio(arrIntentos, "a");
};

//CAPTURO EL BOTON EJECUTAR.
const ejecutar = document.getElementById("tryBtn");

//LE ASIGNO UNA ESCUCHA AL EVENTO CLICK.
ejecutar.addEventListener("click", () => {
  //CAPTURO LAS OPCIONES DEL USUARIO EN 2 VARIABLES
  let cantidadNumeros = document.forms["tabla"]["testRange"].value;
  let cantidadPruebas = document.forms["tabla"]["testQuantity"].value;

  //EJECUTO LA FUNCION CON LAS VARIABLES DEL USUARIO
  probar(cantidadPruebas, cantidadNumeros);
});

const verificarCoincidenciaB = (objetivo) => {
  console.log("Numero elegido: " + numeroUsuario);

  intentos++;
  if (objetivo === numeroUsuario) {
    // arrNumeros.push(numeroUsuario);
    arrNumeros.push(numeroUsuario);
    console.log("Acerto el numero. Era el " + numeroUsuario + ".");
    console.log("Numeros: " + arrNumeros);
    arrIntentos.push(intentos);
    console.log("Intentos: " + intentos);
    console.log("----------------------------");

    intentos = 0;
    numeroBuscado = 0;
    numeroUsuario = 0;
    arrNumeros = [];
  } else {
    arrNumeros.push(numeroUsuario);
    numeroUsuario++;
    console.log("Ese numero no es. Elija Otro: " + numeroUsuario);
    verificarCoincidenciaB(objetivo);
  }
};


const probarB = (cantidadPruebas, cantidadNumeros) => {
  //EJECUTO EL BUCLE PARA LAS PRUEBAS
  for (let i = 0; i < cantidadPruebas; i++) {
    //EJECUTO LA FUNCION PARA SORTEAR EL NUMERO
    elegirNumero(cantidadNumeros);
    //EJECUTO LA PRIMERA ELECCION DEL USUARIO
   // eleccionUsuario(cantidadNumeros);
    //COMIENZO LA ITERACION DE LOS NUMEROS PARA ACERTAR
    verificarCoincidenciaB(numeroBuscado);
  }
  promedio(arrIntentos, "b" );
};

const ejecutarB = document.getElementById("tryBtnB");

//LE ASIGNO UNA ESCUCHA AL EVENTO CLICK.
ejecutarB.addEventListener("click", () => {
  //CAPTURO LAS OPCIONES DEL USUARIO EN 2 VARIABLES
  let cantidadNumeros = document.forms["tablaB"]["testRangeB"].value;
  let cantidadPruebas = document.forms["tablaB"]["testQuantityB"].value;

  //EJECUTO LA FUNCION CON LAS VARIABLES DEL USUARIO
  probarB(cantidadPruebas, cantidadNumeros);
});

