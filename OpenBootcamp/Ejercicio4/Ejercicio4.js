let nombre = "Leandro";
let apellido = "Reyes";

let estudiante = (nombre + " " + apellido);
console.log(estudiante);

let estudianteMayus = (estudiante.toUpperCase());
console.log(estudianteMayus);

let estudianteMinus = (estudiante.toLowerCase());
console.log(estudianteMinus);

let largoEstudiante = (estudiante.length);
console.log(largoEstudiante);

let firstLeatterNombre = (nombre.charAt(0));
console.log(firstLeatterNombre);

let lastLeatterApellido = (apellido.charAt(apellido.length - 1));
console.log(lastLeatterApellido);

let estudianteSinEspacio = (estudiante.replace(/\s/g, ""));
console.log(estudianteSinEspacio);

let siEsta = false;

if (estudiante.includes(nombre)){
    siEsta = true;
}

console.log(siEsta);