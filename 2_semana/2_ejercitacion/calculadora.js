let operador = "+"//process.argv[0];
let resultado = 0;
let num1 = 10;
let num2 = 10;

switch (operador){
    case "+":
        resultado = num1 + num2;
        console.log(`El resultado de sumar ${num1} + ${num2} es ${resultado}`);
        break;

    case "-":
         resultado = num1 - num2;
        console.log(`El resultado de restar ${num1} - ${num2} es ${resultado}`);
        break;
    case "*":
        resultado = num1 * num2;
        console.log(`El resultado de multiplicar ${num1} * ${num2} es ${resultado}`);
        break;

    case "/":
        resultado = num1 / num2;
        console.log(`El resultado de dividir ${num1} / ${num2} es ${resultado}`);
        break;
    default:
        console.log("Operacion o valores no validos")
}
