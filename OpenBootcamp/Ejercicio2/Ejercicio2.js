
//Nombre
const nombre = "Leandro Reyes";
let eresDesarrollador = false;
var desarrollador = "no soy desarrollador";
const libro = {
    titulo: "El tesoro de Cañada Seca",
    autor: "Julián Murguía",
    fecha: 1994,
    url: "https://tuylaquimica.files.wordpress.com/2020/04/el-tesoro-de-cac391ada-seca.pdf"
}

const nacimiento = new Date("march 30 2003");

const diaNacimiento = nacimiento.getDate();
const mesNacimiento = nacimiento.getMonth() + 1;
const anyoNacimiento = nacimiento.getFullYear();

const ahora = new Date();
const anyoHoy = ahora.getFullYear()
let edad = (anyoHoy - anyoNacimiento);

if (eresDesarrollador == true){
    desarrollador = "soy desarrollador";
}
console.log("");
console.log("Mi nombre es " + nombre + " mi edad es " + edad + " nací el día " + diaNacimiento, mesNacimiento, anyoNacimiento + " y " + desarrollador);
console.log(`No me gusta leer pero me acuerdo de haber leido ${libro.titulo} que me pareció bueno es de ${libro.autor}, salió en el año ${libro.fecha}`);
console.log("y la URL para leerlo es " + libro.url);
console.log("");




