/**
 * Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.
 */

let Bangla = 72;
let Mathematics =11;
let Biology = 92;
let Chemistry= 20;
let Physics = 37;

let marks = Bangla+Mathematics+Biology+Chemistry+Physics;

console.log(marks);

let average= marks/5;

console.log(average.toFixed(2));