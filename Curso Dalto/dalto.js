// class Animal {
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Hola soy ${this.especie} tengo ${this.edad} años y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }

// class Perro extends Animal {
//     constructor(especie, edad, color, raza){
//         super(especie, edad, color);
//         this.raza = null;
//     }
//     set setRaza(newName){
//         this.raza = newName;
//     }
//     get getRaza(){
//         return this.raza;
//     }
// }

// let perro = new Perro("perro", 2, "marron");
// let gato = new Animal("gato", 3, "gris");
// let pajaro = new Animal("pajaro", 5, "verde");

// perro.setRaza = "labrador";

// // document.write(perro.getRaza);


// concatenar

let cadena = "Hola";
let cadena2 = " mundo";

let resultado = cadena.concat(cadena2);

console.log(resultado);

// comparar inicio

let cadena3 = "hola";
let cadena4 = "mundo";
let cadena5 = "ho";

resultado = cadena3.startsWith(cadena4);
console.log(resultado);

resultado = cadena3.startsWith(cadena5);
console.log(resultado);

// comparar al final

let cadena6 = "la";

resultado = cadena3.endsWith(cadena4);
console.log(resultado);

resultado = cadena3.endsWith(cadena6);
console.log(resultado);

// busca si esta incluida en la cadena

let cadena7 = "lorem ipsum";
let cadena8 = "lora";
let cadena9 = "em ip";

resultado = cadena7.includes(cadena8);
console.log(resultado);

resultado = cadena7.includes(cadena9);
console.log(resultado);

// obtener en que pocicion esta la primer letra a buscar

resultado = cadena7.indexOf(cadena9);
console.log(resultado);

// obtener en que pocicion esta la primer letra pero empezando de atras hacia adelanta

cadena7 = "lorem ipsum em ip";
resultado = cadena7.lastIndexOf(cadena9);
console.log(resultado);

// agrega al principio y al final hasta llegar a los caracteres deseados

resultado = cadena7.padStart(20,'l');
console.log(resultado);

resultado = cadena7.padEnd(20,'p');
console.log(resultado);

// repite la cadena las veces que quieras

resultado = cadena7.repeat(9);
console.log(resultado)

// separa cadenas por un caracter cualquiera el string y lo vuelve un array

resultado = cadena7.split(" ");
console.log(resultado)

// crea un nuevo string, y desidis desde donde crearlo

resultado = cadena7.substring(2, 9);
console.log(resultado);

// pasar letras a mayusculas y minusculas

resultado = cadena7.toUpperCase();
console.log(resultado);

resultado = resultado.toLowerCase();
console.log(resultado);

// combertir a string

let num = 123
console.log(num + 10); //suma
console.log(num.toString() + 10); //al pasarlo a string concatena

// con trim podemos eliminar los espacios del principio y final y con trimStart solo los del rincipio y con trimEnd los del final

let cadena10 = "     asda g       ";
console.log(cadena10.length);

console.log(cadena10.trim().length)

console.log(cadena10.trimStart().length)

console.log(cadena10.trimEnd().length)


// Metodos de arrays

let arr = ['pedro', 'jose', 'grman'];

// remover y mostrar ultimo elemento con pop y con shift el primero

console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.shift());
console.log(arr);

//agrega un elemento al final y te debuelve la cantidad de elementos que tiene el array

console.log(arr.push('juan','felipe'));
console.log(arr);

//revierte orden de array

console.log(arr);
console.log(arr.reverse());

// agregar elemento al inicio del array

console.log(arr.unshift('roberta'));
console.log(arr);

// ordenar el array

console.log(arr.sort())

// con .splice() podes agregar reemplazar o borrar elementos de un array .splice(inicio, cuantos borrar, agregar elementos)

console.log(arr.splice(1,2)); // borrar
console.log(arr);

console.log(arr.splice(1,1, 'geronimo', 'fausto', 'pancracio')); // reemplazar
console.log(arr);

arr.splice(1,0, 'anda', 'pa', 'alla', 'bobo'); // agregar
console.log(arr);

arr.splice(-1,0, 'anda', 'pa', 'alla', 'bobo'); // agregar al final del array
console.log(arr);

// crea un array y lo transforma a un string

resultado = arr.join()
console.log(resultado);

resultado = arr.join(' - ');
console.log(resultado);

// toma cietos elementos de un array

resultado = arr.slice(1,5);
console.log(resultado);

// recorre un array y te va mostrando elemento por elemento (filter y forEach funcionan igual)

//arr.filter(arr => document.write(arr + '<br>'));

//document.write('<br>');

arr.filter((arr) => {
   // document.write(arr + '<br>');
})

//document.write('<br>');

arr.filter(function(arr){
//    document.write(arr + '<br>');
})

//arr.forEach(arr => document.write(arr + '<br>'));

//document.write('<br>');

arr.forEach((arr) => {
   // document.write(arr + '<br>');
})

//document.write('<br>');

arr.forEach(function(arr){
//    document.write(arr + '<br>');
})

// exclusivo de filter

resultado = arr.filter(arr => arr.length > 4);
console.log(resultado);




// MATH BASICO

//raiz cuadrada
console.log(Math.sqrt(25)); // 5x5
//raiz cubica
console.log(Math.cbrt(27)); // 3x3x3

console.log(Math.max(3,23,5,12,53,2000000,23,54,123,542));

console.log(Math.min(3,23,5,12,53,2000000,23,54,123,542));

resultado = Math.random();
console.log(resultado);
resultado = resultado * 100;
console.log(resultado);
//Para redondearlo a un numero mas cercano se utiliza round

resultado = Math.round(resultado);
console.log(resultado);

resultado = Math.random() * 100;
console.log(resultado);

//redondea a un numero flotante mas cercano

console.log(Math.fround(resultado))

// numero random entre 0 y 100

resultado = Math.random() * 99;
console.log(resultado);
// floor redondea para abajo el numero 
console.log(Math.floor(resultado+1))

//elimina decimales
resultado = Math.random() * 99;
console.log(resultado);
console.log(Math.trunc(resultado));

console.log(Math.PI);

//Raiz cuadrada de 1/2
console.log(Math.SQRT1_2);

// raiz cuadrada de 2
console.log(Math.SQRT2);

// constante de Euler
console.log(Math.E);

// Logaritmo natural de 2
console.log(Math.LN2)

// Logaritmo natural de 10
console.log(Math.LN10)

// Logaritmo de Euler base 2
console.log(Math.LOG2E)

// Logaritmo de Euler base 10
console.log(Math.LOG10E)


// DOM

//toma el elemento de html con el id "parrafo" y lo asigna en texto
let texto = document.getElementById("parrafo");
//document.write(texto);

// toma todas las etiquetas 'p' de html
texto = document.getElementsByTagName("p");
// muestra una coleccion, pero al colocar el indice [0] muestra directamente el primer elemento
//document.write(texto[0]);

//toma el elemento con id parrafo, esto trabaja como cuando llamamos en css
texto = document.querySelector("#parrafo");
//document.write(texto);


// DEFINIR MODIFICAR Y ELIMINAR ATRIBUTOS

const rangoEtario = document.querySelector(".rangoEtario");
// Modifica
// rangoEtario.setAttribute("type","color");

// Saber tipo de atributo
// document.write(rangoEtario.getAttribute("type"));

// Remover atributo
// rangoEtario.removeAttribute("type");



// ATRIBUTOS GLOBALES

const title = document.querySelector(".title");

// Permite modificar el texto en el navegador
// title.setAttribute("contentEditable", "true");

// Modifica de donde empieza el texto
// title.setAttribute("dir","ltr"); //ltr left to right
// title.setAttribute("dir","rtl"); //rtl right to left

// Oculta, no es necesario el true, porque aunque no este oculta y la unica manera de desocultarlo es removiendo el hiden linea 323
// title.setAttribute("hidden", "true");

// Al dar tab permite que salte entre los textos funciona con el index, a mayor numero se mostra mas adelante
title.setAttribute("tabindex", 0);

// Modifica el titulo del objeto
title.setAttribute("title","hola pto");


// ATRIBUTOS IMPUTS

const imput = document.querySelector(".normalImput");

// muestra nombre de la clase
document.write("hola");