// Trabajos sobre consola
// activando quokka hay que ver la salida de la consola
// lo mejor es verlo en google chrome

// acertado
console.assert(5 < 10);
console.assert(5 > 10);

// limpiar consola

console.clear();

// error

console.error("que hiciste capo");

// informacion

console.info("hola kpo");

// depuracion

console.log("hola kpo");

// crea una tabla con un array

console.table([5, 6, 3, 4, 3, 4, 34, 31, , , , 23, 4, 12, 2]);

// tira advertencia

console.warn("cuidado leandro");

// despliega una lista interactiva

console.dir([5, 6, 3, 4, 3, 4, 34, 31, , , , 23, 4, 12, 2]);

// cuenta de forma iterativa

console.count();
console.count();
console.countReset(); //resetea el contador
console.count();

// crear grupos

console.group("hellowda");
console.log("tirame la goma");
console.groupEnd(); // termina el grupo
console.groupCollapsed("jaja"); // crea un grupo pero no lo abre automaticamente como .group() es literal lo mismo
console.groupEnd();

// crea un cronometro

console.time();
console.timeLog(); //muestra el tiempo que lleva
console.timeEnd(); //termina el tiempo
console.timeStamp(); // da el tiempo redondeado

// dar estilos en la consola

console.log("%chola", "color: red;padding: 30px;background: grey;");
