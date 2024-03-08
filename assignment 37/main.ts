//Question 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeShirt(size: number, msg:string) {
    console.log(`Size of Shirt: ${size}\n${msg}`);
}      

makeShirt(40, 'I Love Typescript.(default msgs with too much large size).\n');
makeShirt(32, '"Be kind, for everyone\nYou meet is\nFighting a battle\nYou know nothing about"\n');
makeShirt(28, '\tBe the Change\n\tYou Hope to See\n\tIn the World.');