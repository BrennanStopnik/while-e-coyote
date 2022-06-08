/*
Write a program, `fibonacci.js` that accepts a number, `n`, from the user and consequently logs the first `n` values in the fibonacci sequence.

The fibonacci sequence starts with 0 then 1. Each subsequent value can be obtained by summing the previous two values:
```
0 1 1 2 3 5 8 13 21 34 ...
```
Example
```
Enter a value for "n":
> 9

0
1
1
2
3
5
8
13
21
```
*/

const prompt = require("prompt-sync")({sigint: true});

let n = Number(prompt("enter a value for 'n': "));

let prev = 0;
let curr = 1;
let tot = 0; 

console.log(prev);
let count = 1;

while (count < n) {
    
    console.log(curr)
    tot = prev + curr;
    prev = curr;
    curr = tot

    count++;
}