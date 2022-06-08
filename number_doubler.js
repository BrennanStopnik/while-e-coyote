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

// let var1 = true;
// let num = 0;
let num = Number(prompt("Enter a number under 100: "));
 

// while (var1 === true) {
//     num = num * 2;
//     if (num <= 100) {
//         console.log(num);
//     } else if (num > 100) {
//         var1 = false;
//         console.log(num);
//     }
// }

while (num < 100) {
    num = num * 2;
    console.log(num)
}