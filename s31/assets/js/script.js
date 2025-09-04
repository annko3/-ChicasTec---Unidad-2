
let name = prompt("¿Cuál es tu nombre?");
alert("Hola " + name);

let number1 = parseInt(prompt("Escribe un número"));
let number2 = parseInt(prompt("Escribe otro número"));
console.log(`${number1} + ${number2} = ${number1 + number2}`);

let num = parseInt(prompt("Escribe un número para ver si es par o impar"));
switch (num % 2) {
  case 0:
    console.log("El número es par");
    break;
  case 1:
    console.log("El número es impar");
    break;
  default:
    console.log("Eso no es un número");
}

console.log(`${num} es ${num % 2 === 0 ? "par" : "impar"}.`);