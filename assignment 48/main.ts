//Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let set1 = [1500, 1900, 1200];
let set2 = [600, 900, 1200];
let combinedPrices = [...set1, ...set2].sort((a, b) => a - b);
console.log(combinedPrices);