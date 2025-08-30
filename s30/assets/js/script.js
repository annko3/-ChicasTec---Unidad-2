

let person = {
    name: "Nicole",
    age: 18,
    cellphone: "+51 987654321",
    hobbies: ["dibujar", "leer", "sudoku", "programar", "coser", "escribir", "cantar"]
};

console.log(person);

console.log(person.name);
console.log(person.age);
console.log(person.cellphone);
console.log(person["hobbies"]);


person.birthdate = "2005-03-25";
console.log(person);




let heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

  console.log(heroes.members[1].powers[1]);
  console.log(heroes.members[2].name);
  console.log(heroes.members[2].powers[2]);