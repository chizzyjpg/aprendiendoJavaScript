const obtenerInformacion = (materia) => {
  materias = {
    fisica: ["bonancea", "jose", "ivan", "carlos", "cofla"],
    programacion: ["Dalto", "jose", "carlos"],
    logica: ["Eduardo", "jose", "pedro", "ivan", "carlos"],
    quimica: ["rodriguez", "jose", "pedro", "ivan", "carlos"],
  };
  if (materias[materia] != undefined) {
    return [materias[materia], materia];
  } else {
    return false;
  }
};

let info = obtenerInformacion("logica");
let profe = info[1][1];

if (info != false) {
  document.write(`alumnos precente en ${info[1]} son: `);
  let i = 1;
  while (info[0][i] != undefined) {
    document.write(`, ${info[0][i]}`);
  }
}
