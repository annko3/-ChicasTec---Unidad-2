console.log("Hola mundo");
alert("Hola mundo");

let name = "Jia";

if (name.length > 7) {
    console.log("El nombre es largo");
}else{
    console.log("El nombre es corto");
}

let edad = 25;

if (edad >= 18) {
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log("El primer número es mayor");
}else if (num1 < num2) {
    console.log("El segundo número es mayor");
}else{
    console.log("Los números son iguales");
}

let USA = true;

if (edad >= 18){
    console.log("Eres mayor de edad");
}else if (USA){
    if (edad >= 21){
        console.log("Eres mayor de edad en USA");
    }else{
        console.log("Eres menor de edad en USA");
    }
}else{
    console.log("Eres menor de edad");
}

let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día no válido");
        break;
}