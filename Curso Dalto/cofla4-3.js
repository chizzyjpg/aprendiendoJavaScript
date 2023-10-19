const materias = {
  fisica: ["bonancea", "jose", "ivan", "carlos", "cofla"],
  programacion: ["Dalto", "jose", "carlos"],
  logica: ["Eduardo", "jose", "pedro"],
  quimica: ["rodriguez", "jose", "cofla", "ivan", "carlos"],
};

const inscribir = (alumno, materia) => {
  if (materias[materia].push() < 5) {
    materias[materia].push(alumno);
  } else {
    document.write("hay demaciados alumnos<br>");
  }
};

const mostrarInformacion = (materia) => {
  let i = 2;
  if (materias[materia][1] !== undefined) {
    document.write(materias[materia][1]);
  }
  while (materias[materia][i] !== undefined) {
    document.write(`, ${materias[materia][i]}`);
    i++;
  }
  document.write("<br>");
};
