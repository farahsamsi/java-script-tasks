/**
 * What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.
 */

let x = '11';
console.log(typeof(x));

var a = isNaN(x); 

var b = isNaN(2-10);

console.log(a);
console.log(b);

// For number values, isNaN() tests if the number is the value NaN. When the argument to the isNaN() function is not of type Number, the value is first coerced to a number, and the resulting value is then compared against NaN.
