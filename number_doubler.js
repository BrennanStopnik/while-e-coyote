/*
Write a program that prompts the user for a number, then repeatedly doubles that number until it is greater than or equal to 100.

Example
Enter a number:
> 23

23
46
92
184
*/

const prompt = require("prompt-sync")({sigint: true});

let number = Number(prompt("Enter a number under 100: "));
 
let sum = 0;
while (number <= 100) {
    console.log(number);
    number = number*2
}

console.log(sum)