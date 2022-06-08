/*
Write a program that takes a string and 'repeats it' until the string's length is greater than or equal to 10.

Examples
Enter a string:
> abc

abc
abcabc
abcabcabc
abcabcabcabc
Enter a string:
> a

a
aa
aaa
aaaa
aaaaa
aaaaaa
aaaaaaa
aaaaaaaa
aaaaaaaaa
aaaaaaaaaa
*/

const prompt = require('prompt-sync')({sigint: true});

let final = "";
let in_str = prompt("Enter a string: ");

while (final.length < 10) {
    final = in_str + final;
    console.log(final);
}