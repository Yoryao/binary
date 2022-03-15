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
  numeroBuscado = parseInt(Math.random() * index);
  numeroIndice = index;
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
    console.log("Acerto el numero");
    console.log("Numero elegido acertado: " + numeroUsuario);
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
    numeroUsuario = parseInt(Math.random() * numeroIndice);
    console.log("Numero ya elegido. Elija Otro: " + numeroUsuario);
    verificarCoincidencia(numeroBuscado, numeroUsuario);
  } else {
    numeroUsuario = parseInt(Math.random() * numeroIndice);
    console.log("Ese numero no es. Elija Otro: " + numeroUsuario);
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
let resultado = sumando/array.length;
let verResultado = document.getElementById("inputGroup-sizing-default")
verResultado.innerText =`En promedio de acierto es con ${resultado} intentos.`

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
    verificarCoincidencia(numeroBuscado, numeroUsuario, cantidadNumeros);
  }
  promedio(arrIntentos);
};

//CAPTURO EL BOTON EJECUTAR.
const ejecutar = document.getElementById("tryBtn");

//LE ASIGNO UNA ESCUCHA AL EVENTO CLICK.
ejecutar.addEventListener("click", () => {
  //CAPTURO LAS OPCIONES DEL USUARIO EN 2 VARIABLES
  let cantidadNumeros = document.forms["tabla"]["testRange"].value;
  let cantidadPruebas = document.forms["tabla"]["testQuantity"].value;

  //VERIFICO LA CORRECTA CAPTURA DE LOS DATOS DEL USUARIO
  console.log("PruebasCantidad: " + cantidadPruebas);
  console.log("IndiceRango: " + cantidadNumeros);

  //EJECUTO LA FUNCION CON LAS VARIABLES DEL USUARIO
  probar(cantidadNumeros, cantidadPruebas);
});
