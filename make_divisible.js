/*
Write a program that prompts the user for two numbers, x and y. The program should add one to x until it is divisble by y.
*/

const prompt = require("prompt-sync")({sigint: true});

let x = Number(prompt("Enter your first number: "));
let y = Number(prompt("Enter your second number: "));

while (x % y !== 0) {
    console.log(x);
    x++
}
console.log(`${x} is divisible by ${y}`);

