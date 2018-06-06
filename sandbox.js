const fs = require('fs');

let options = fs.readFileSync("./cookies.txt").toString().split("\n");
let optionsProcessed = [];

for (let i = 0; i < options.length - 1; i++) {
  optionsProcessed.push(options[i].split(" = "));
}

// console.log(optionsProcessed);

let optionsIngredients = [];
for (let i = 0; i < optionsProcessed.length; i++) {
  optionsProcessed[i].splice(0, 1);
  optionsIngredients.push(optionsProcessed[i].toString().split(", "));
  // optionsIngredients.push(optionsProcessed[i].split(", "));
}

console.log(optionsIngredients);
