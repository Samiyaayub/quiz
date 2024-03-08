"use strict";
//Question 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size, msg) {
    console.log(`Size of Shirt: ${size}\n${msg}`);
}
makeShirt(28, 'Be the Change You hope to See In the World.');
