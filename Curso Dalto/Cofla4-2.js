const obtenerInformacion = (materia) => {
  materias = {
    fisica: ["bonancea", "jose", "ivan", "carlos", "cofla"],
    programacion: ["Dalto", "jose", "carlos"],
    logica: ["Eduardo", "jose", "pedro", "ivan", "carlos"],
    quimica: ["rodriguez", "jose", "cofla", "ivan", "carlos"],
  };
  if (materias[materia] !== undefined) {
    return [materias[materia], materia, materias];
  } else {
    return materias;
  }
};

const mostrarInformacion = (materia) => {
  let info = obtenerInformacion(materia);
  if (info !== false) {
    let profe = info[0][0];
    let alumnos = info[0];
    alumnos.shift();

    document.write(
      `el profesor de <b style = 'color:red'>${info[1]}</b> es: <b style = 'color:red'>${profe}</b> y sus alumnos son: <b style = 'color:red'>${alumnos}</b> <br>`
    );
  }
};

const cantidadDeMaterias = (alumno) => {
  let cantidadTotal = 0;
  let info = obtenerInformacion();
  for (inf in info) {
    if (info[inf].includes(alumno)) {
      cantidadTotal++;
    }
  }
  return cantidadTotal;
};

const enQueMateriasEsta = (alumno) => {
  let i = 0;
  let info = obtenerInformacion();
  let materias = [];
  let profesor = [];
  for (materia in info) {
    if (info[materia].includes(alumno)) {
      materias[i] = materia;
      profesor[i] = info[materia][0];
      i++;
    }
  }
  let cantidad = i;
  document.write(
    alumno +
      " esta en la materia: " +
      materias[0] +
      " con su profesor " +
      profesor[0]
  );
  for (i = 1; i < cantidad; i++) {
    if (cantidad - 1 === i) {
      document.write(` y ${materias[i]} con su profesor ${profesor[i]}`);
    } else {
      document.write(`, ${materias[i]} con su profesor ${profesor[i]}`);
    }
  }
};

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write("<br> esta en: " + cantidadDeMaterias("jose") + " materias ");

document.write("<br>");

enQueMateriasEsta("jose");
