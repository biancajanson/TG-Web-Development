// LECTURE: Values and Variables
/*
let country = "The Netherlands"
let continent = "Europe"
*/
// let population = 17

/*
console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/
// LECTURE: let, const and var
// language = "Dutch";
// const country = "The Netherlands";
// const continent = "Europe"
// const isIsland = false;
// isIsland = true;

// LECTURE: Basic Operators
// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
// console.log(description); 

// const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
// console.log(descriptionNew);

// LECTURE: Type Conversion and Coercion
// console.log('9'- '5'); // voorspelling: 4
// console.log('19' - '13' + '17') // voorspelling: 617
// console.log('19' - '13' + 17) // voorspelling: 23
// console.log('123' < 57); // voorspelling: false
// console.log(5 + 6 + '4' + 9 - 4 - 2) // voorspelling: 1143

// LECTURE: Equality Operators: == vs. ===
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border!')
// }   else if (numNeighbours > 1) {
//     console.log('More than 1 border')
// }   else {
//     console.log('No borders')
// }

// LECTURE: Logical Operators
const speaksEnglish = true;
const lessThan50Million = true;
const isIsland = false;

if (speaksEnglish && lessThan50Million && !isIsland) {
    console.log("You should live in The Netherlands")
}   else {
    console.log("The Netherlands does not meet your criteria :(")
}