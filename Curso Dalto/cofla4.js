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

  Menu() {
    alert("¿Que operación deseas realizar?");
    let operacion = prompt(
      "1: suma,  2: resta,  3: división,  4: multiplicación"
    );

    if (operacion == 1) {
      let numero1 = prompt("primer número para sumar");
      let numero2 = prompt("segundo número para sumar");
      resultado = this.sumar(numero1, numero2);
      alert(`tu resultado es ${resultado}`);
    } else if (operacion == 2) {
      let numero1 = prompt("primer número para restar");
      let numero2 = prompt("segundo número para restar");
      resultado = this.restar(numero1, numero2);
      alert(`tu resultado es ${resultado}`);
    } else if (operacion == 3) {
      let numero1 = prompt("primer número para dividir");
      let numero2 = prompt("segundo número para dividir");
      resultado = this.dividir(numero1, numero2);
      alert(`tu resultado es ${resultado}`);
    } else if (operacion == 4) {
      let numero1 = prompt("primer número para multiplicar");
      let numero2 = prompt("segundo número para multiplicar");
      resultado = this.multiplicar(numero1, numero2);
      alert(`tu resultado es ${resultado}`);
    } else {
      alert("no se ha encontrado la operación");
    }
  }
}
