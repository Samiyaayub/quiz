"use strict";
//Question 26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alienColor = 'green';
alienColor = 'green';
//Version that passes the if test (yellow mango)
if (alienColor === 'green') {
    console.log("player just earned 5 points!");
}
else {
    console.log("player just earnes 10 points!");
}
// Version that passes the else condition
alienColor = 'purple';
if (alienColor === 'yellow') {
    console.log("player just earned 5 points!");
}
else {
    console.log("player just earnes 10 points!");
}
