//Question 51: Refactoring the Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

// Original function for calculating the area of a rectangle
function calculateArea(width: number, height: number): number {
    return width * height;
}

// Refactored into an arrow function
let calculateAreaArrow = (width: number, height: number): number => width * height;

// Example usage of the arrow function
console.log(calculateAreaArrow(3, 7)); // Logs the area of the rectangle