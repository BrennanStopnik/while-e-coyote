/*
In a file called `number-summer.js` file, write a program that continually prompts the user for numbers until the user enters the keyword `"done"` at which point the sum of all the inputted numbers is logged out.

#### Example

```
Enter some numbers (type 'done' when complete):
> 20
> 10
> 3.2
> done

Those numbers sum to 33.2
```
*/

const prompt = require("prompt-sync")({sigint: true});

let numbers = Number(prompt("Enter some numbers 1-100, (type 'done' when complete): "));
 
let sum = 0;
while (numbers > 0) {
    if (!(numbers > 100)) {
        sum += numbers
    }
    numbers = Number(prompt("Enter some numbers 1-100, (type 'done' when complete): "));
}

console.log("The Sum of your numbers is: " + sum);