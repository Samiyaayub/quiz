//Question 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

interface Magician{
    name :string
  }
  const magicians: {name:string}[] = [
    { name: "Harry Houdini" },
    { name: "David Copperfield" },
    { name: "Penn Jillette" }
  ];
  // Function to add "the Great" to each magician's name
  function make_great(magicians: Magician[]): void {
    magicians.forEach(magician => {
        magician.name = `The Great  "${magician.name}"`;
    });
  }
  
  // Function to display the magicians' names
  function show_magicians(magicians: Magician[]): void {
    magicians.forEach(magician => {
        console.log(magician.name);
    });
  }
  // Call make_great() to modify the magicians array
  make_great(magicians);
  
  // Call show_magicians() to display the modified list
  show_magicians(magicians);