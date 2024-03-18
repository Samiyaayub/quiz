//Question 46: Enhanced Laptop Object:Construct an object for a loptop properties make, model, year, and a method described() that logs a sentence about the laptop.


let laptop = {
    make: "Dell",
    model: "XPS 13 plus",
    year: 2023,
    describe: function() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();