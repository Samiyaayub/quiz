//Question 21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let Book: { title:string; author:string; yearPublished:number} = {
title: "The Forty Rules of Love", 
author: "Elif Shafak",
yearPublished: 2009
};

console.log(`Book name: ${Book.title}, by ${Book.author}, published in ${Book.yearPublished}.`);