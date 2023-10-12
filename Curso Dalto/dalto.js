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




