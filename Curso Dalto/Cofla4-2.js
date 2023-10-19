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

let info = obtenerInformacion(prompt("Ingrece materia"));

if (info != false) {
  let profe = info[0][0];
  document.write(
    `el profesor de <b style = 'color:red'>${info[1]}</b> es: <b style = 'color:red'>${profe}</b> y sus alumnos son: <b style = 'color:red'>${info[0][1]}</b>`
  );
  let i = 2;
  while (info[0][i] != undefined) {
    document.write(`, <b style = 'color:red'>${info[0][i]}</b>`);
    i++;
  }
}
