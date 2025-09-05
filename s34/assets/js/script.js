let drinks = ["water", "Pepsi", "Fanta", "orenge juice"];
console.log(drinks);

drinks.push("energy drink");
console.log(drinks);

let lastDrink = drinks.pop();
console.log("Last drink:", lastDrink);

drinks.unshift("milk");
console.log(drinks);

drinks.shift();
console.log(drinks);

drinks.includes("Pepsi");
console.log(drinks.includes("Pepsi"));

drinks.indexOf("Fanta");
console.log(drinks.indexOf("Fanta"));

let drinksString = drinks.join();
console.log(drinksString);

console.log(drinks.join(". "));
console.log(drinks.join(" - "));
console.log(drinks.join(" "));
console.log(drinks.join(""));
console.log(drinks.join("\n"));
console.log(drinks.join(" * "));

let slideDrinks = drinks.slice(2);
console.log(slideDrinks);

console.log(drinks.slice(1, 3));

drinks.splice(2, 3, "7up", "sprite", "soda water");
console.log(drinks);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);

let numsMap = nums.map((x) => x * 2);
console.log(numsMap);

let numsToString = nums.map((x) => `Número: ${x}`);
console.log(numsToString);

let numsFilter = nums.filter((x) => x % 2 === 0);
console.log(numsFilter);

let sumOfAllElements = nums.reduce((a, b) => a + b, 0);
console.log(sumOfAllElements);

let productOfAllElements = nums.reduce((a, b) => a * b, 1);
console.log(productOfAllElements);

console.log(Math.round(4.6));
console.log(Math.round(4.4));

console.log(Math.ceil(4.1));

console.log(Math.floor(4.9));