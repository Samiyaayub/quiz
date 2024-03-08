//Question 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicianNames: string[] = ["Harry Porter", "Pinkro", "David Copperfield", "Neuro", "Hermione Granger"];

function show_magicians(magicians:string[]):void {
  for(let magician of magicians) {
    console.log(magician);
  }
}

function makeGreat(magicians:string[]) {
      let greatMagicians:void[] = magicians.map((magician) => {
          `The Great ${magician}`;
          console.log(greatMagicians);
      });
} 

const greatMagicians = makeGreat(magicianNames);
console.log("\tOriginal Magicians:");
show_magicians(magicianNames);
console.log("\n\tGreat Magicians");
show_magicians(magicianNames);