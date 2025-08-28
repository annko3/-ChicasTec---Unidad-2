function number () {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}
number();

function addTwoNumbers (a, b) {
    console.log(`Primer parametro: ${a}`);
    console.log(`Segundo parametro: ${b}`);

    let result = a + b;
    console.log(`El resultado de ${a} + ${b} es: ${result}`);
}
let num1 = 5;
let num2 = 7;
addTwoNumbers(num1, num2);

function greet(targetName){
    let message = `Hola ${targetName}, ¿cómo estás?`;
    return message;
}

let name = "Vanessa";
let greetMessage = greet(name);
console.log(greetMessage);
console.log(greet(name));