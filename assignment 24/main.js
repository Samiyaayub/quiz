"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Equality and Inequality
let name_1 = "Camile";
let name_2 = "Noah";
let name_3 = "Jack";
if (name_1 === name_3) {
    console.log("Both names are Equal digits/words.\n");
}
else {
    console.log("Digits/Words of Both names are uneqaul.\n");
}
if (name_1 !== name_2) {
    console.log("Both names are'nt Equal.\n");
}
else {
    console.log("Both names are Eqaul\n");
}
// lowercase Function
let actorName = "Imran Ashraf";
console.log(actorName.toLowerCase(), "\n");
// numerals equality & inequality, greater than and less than, greater than or equal to, and less than or equal to
let age = 18;
if (age === 18) {
    console.log("You are eligible for vooting.\n");
}
else {
    console.log("You are'nt eligible for Voting.\n");
}
if (age !== 23) {
    console.log("Junior\n");
}
else {
    console.log("Senior\n");
}
if (age > 19) {
    console.log("You cannot Drink.\n");
}
else {
    console.log("You can Drink.\n");
}
if (age < 28) {
    console.log("Not Eligible for Driving.\n");
}
else {
    console.log("Can Drive.\n");
}
if (age >= 15) {
    console.log("Person is in 8th Standard.\n");
}
else {
    console.log("Person is in Matric.\n");
}
if (age <= 30) {
    console.log("Young\n");
}
else {
    console.log("Old\n");
}
// • Tests using "and" and "or" operators
let age_1 = 15;
let age_2 = 25;
if (age_1 && age_2) {
    console.log("Both Persons are of Equal ages.\n");
}
else {
    console.log("Both Persons are of Equal ages.\n");
}
if (age_1 || age_2) {
    console.log("Age differnce is 10.\n");
}
else {
    console.log("No age difference.\n");
}
// • Test whether an item is in a array
let Fruits = ["Apple", "Bnanana", "Cherry", "Stawberry", "Mango"];
console.log('Apple' === Fruits[0], "Apple is in Friut array/list.\n");
// • Test whether an item is not in a array
let fvrtFruits = ["Apple", "Bnanana", "Cherry", "Stawberry", "Mango"];
console.log('Pineapple' === fvrtFruits[2], "Pineapple is'nt in fvrtFriut array/list.\n");
