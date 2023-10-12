
let i = 9;
let factorialWhileBreak = 10;

factorial: while (true){

    factorialWhileBreak *= i;

    if (i == 2){
        break factorial;
    }

    i--;

}

console.log("El factorial de 10 es: " + factorialWhileBreak);