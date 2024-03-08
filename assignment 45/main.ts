//Question 45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function makeCar(manufacturer:string, model:string, ...options: {[key: string]: any}[]) {
    let car: {
      manufacturer:string, model:string, options: { [key:string]: any}
    } = {
      manufacturer: manufacturer,
      model: model,
      options: {}
    };
    for(let option of options) {
      for(let key in option) {
        car.options[key] = option[key];
      }
    }
    return car;
  }
  let car1 = makeCar('Toyato', 'Corola', {color: 'blue'}, {sunroof: true});
  let car2 = makeCar('Royal-royce', 'Phantom', {color: 'Black'});
  let car3 = makeCar('Supra', 'Toyato GR', {color: 'blue'}, {sunroof: true});
  console.log(car1, "\n", car2, "\n", car3);




  