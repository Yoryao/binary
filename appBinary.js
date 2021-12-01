console.log("App Working");

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

// let numeroBuscado = 0;
// let numeroUsuario = 0;
// let intentos = 1;
// let arrIntentos = [];

// const elegirNumero = () => {
//   numeroBuscado = parseInt(Math.random() * 10);
// };

// const eleccionUsuario = () => {
//   numeroUsuario = parseInt(Math.random() * 10);
// };

// const verificarCoincidencia = (numeroObjetivo, numeroElegido) => {
//   if (numeroObjetivo === numeroElegido) {
//   //  console.log("Acerto el numero");
//   //  console.log("Intentos: " + intentos);
//     arrIntentos.push(intentos);
//     intentos = 1;
//   } else {
//     intentos++;
//     eleccionUsuario();
//     verificarCoincidencia(numeroBuscado, numeroUsuario);
//   }
// };

// const promedio = (array) => {
//   let sumando = 0;

//   for (let i = 0; i < array.length; i++) {
//     sumando += array[i];
//   }

//   console.log(arrIntentos);
//   console.log("el promedio es " + sumando / array.length);
// };

// const pruebas = (x) => {
//   for (let i = 0; i < x; i++) {
//     elegirNumero();
//     eleccionUsuario();
//     verificarCoincidencia(numeroBuscado, numeroUsuario);
//   }

//   promedio(arrIntentos);
// };

// pruebas(1000000);
