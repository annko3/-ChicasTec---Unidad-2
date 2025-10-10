// Métodos de arrays
let drinks = ["water", "Pepsi", "Fanta", "orenge juice"];
console.log(drinks);

// push(x) -> Agregar un elemento al final del arreglo
drinks.push("energy drink");
console.log(drinks);

// pop() -> Eliminar el último elemento del arreglo y retornarlo
let lastDrink = drinks.pop();
console.log("Last drink:", lastDrink);

// unshift(x) -> Agregar un elemento al inicio del arreglo
drinks.unshift("milk");
console.log(drinks);

// shift() -> Eliminar el primer elemento del arreglo y retornarlo
drinks.shift();
console.log(drinks);

// includes(x) -> Retorna true o false si el elemento x se encuentra en el arreglo
drinks.includes("Pepsi");
console.log(drinks.includes("Pepsi"));

// indexOf(x) -> Retorna el índice del elemento x en el arreglo, si no lo encuentra retorna -1
drinks.indexOf("Fanta");
console.log(drinks.indexOf("Fanta"));

// join(x) -> Retorna un string con todos los elementos del arreglo separados por x
let drinksString = drinks.join();
console.log(drinksString);

console.log(drinks.join(". "));
console.log(drinks.join(" - "));
console.log(drinks.join(" "));
console.log(drinks.join(""));
console.log(drinks.join("\n"));
console.log(drinks.join(" * "));

// slice(inicio, fin) -> Retorna una copia de una parte del arreglo desde el índice "inicio" hasta el índice "fin" (no incluido)
let slideDrinks = drinks.slice(2);
console.log(slideDrinks);

console.log(drinks.slice(1, 3));

// splice(inicio, cantidad, elementos nuevos (opcional)) -> Modifica el arreglo original.
// Solo el argumento de inicio es obligatorio
//Elimina "cantidad" elementos desde el índice "inicio" y retorna un arreglo con los elementos eliminados
drinks.splice(2, 3, "7up", "sprite", "soda water");
console.log(drinks);

console.log("============================");

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);

// map(funcion) -> Crea un nuevo arreglo con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
let numsMap = nums.map((x) => x * 2);
console.log(numsMap);

let numsToString = nums.map((x) => `Número: ${x}`);
console.log(numsToString);

// filter(funcion) -> Retorna una copia del arreglo con todos los elementos que cumplan la condición implementada por la función dada
let numsFilter = nums.filter((x) => x % 2 === 0);
console.log(numsFilter);

// reduce(funcion, acumulador) -> Aplica una función a un acumulador y a cada valor de un arreglo (de izquierda a derecha) para reducirlo a un único valor
let sumOfAllElements = nums.reduce((a, b) => a + b, 0);
console.log(sumOfAllElements);

let productOfAllElements = nums.reduce((a, b) => a * b, 1);
console.log(productOfAllElements);

// Math.round(x) -> Redondea el número x al entero más cercano
console.log(Math.round(4.6));
console.log(Math.round(4.4));

// Math.ceil(x) -> Redondea el número x al entero mayor más cercano
console.log(Math.ceil(4.1));

// Math.floor(x) -> Redondea el número x al entero menor más cercano
console.log(Math.floor(4.9));
