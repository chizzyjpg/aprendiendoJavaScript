class Calculadora {
  sumar(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }
  restar(num1, num2) {
    return parseInt(num1) - parseInt(num2);
  }
  dividir(num1, num2) {
    return parseInt(num1) / parseInt(num2);
  }
  multiplicar(num1, num2) {
    return parseInt(num1) * parseInt(num2);
  }
  potencia(num1, num2) {
    return parseInt(num1) ** parseInt(num2);
  }
  raizCuadrada(num) {
    return Math.sqrt(parseInt(num));
  }
  raizCubica(num) {
    return Math.cbrt(parseInt(num));
  }
}

const calculadora = new Calculadora();

alert("¿Que operación deseas realizar?");
let operacion = prompt(
  "1: suma,  2: resta,  3: división,  4: multiplicación,  5: potencia,  6: raiz cuadrada,  7: raiz cubica"
);

if (operacion == 1) {
  let numero1 = prompt("primer número para sumar");
  let numero2 = prompt("segundo número para sumar");
  resultado = calculadora.sumar(numero1, numero2);
  alert(`tu resultado es ${resultado}`);
} else if (operacion == 2) {
  let numero1 = prompt("primer número para restar");
  let numero2 = prompt("segundo número para restar");
  resultado = calculadora.restar(numero1, numero2);
  alert(`tu resultado es ${resultado}`);
} else if (operacion == 3) {
  let numero1 = prompt("primer número para dividir");
  let numero2 = prompt("segundo número para dividir");
  resultado = calculadora.dividir(numero1, numero2);
  alert(`tu resultado es ${resultado}`);
} else if (operacion == 4) {
  let numero1 = prompt("primer número para multiplicar");
  let numero2 = prompt("segundo número para multiplicar");
  resultado = calculadora.multiplicar(numero1, numero2);
  alert(`tu resultado es ${resultado}`);
} else if (operacion == 5) {
  let numero1 = prompt("numero base");
  let numero2 = prompt("elevado a");
  resultado = calculadora.potencia(numero1, numero2);
  console.log(`tu resultado es ${resultado}`);
} else if (operacion == 6) {
  let numero1 = prompt("Ingrece el numero");
  resultado = calculadora.raizCuadrada(numero1);
  alert(`tu resultado es ${resultado}`);
} else if (operacion == 7) {
  let numero1 = prompt("Ingrece el numero");
  resultado = calculadora.raizCubica(numero1);
  alert(`tu resultado es ${resultado}`);
} else {
  alert("no se ha encontrado la operación");
}
