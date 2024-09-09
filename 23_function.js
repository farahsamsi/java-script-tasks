/**
 * Task-1
Take four parameters. Multiply the four numbers and then return the result
 */

// function multiply(num1,num2,num3, num4){
//     let result = num1*num2*num3*num4;
//     return result;
// }

// let result = multiply(1,1,1,1);
// console.log(result);
// --------------------------------------



/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

// function oddEvenCalculation(num){
//     if(num%2 === 1 ){
//         let result = num*2;
//         return result;
//     }
//     else{
//         let result = num/2;
//         return result;
//     }
// }

// let numberCalculate = oddEvenCalculation(2);
// console.log(numberCalculate);
// --------------------------------------



/**
 * task 3
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

// function make_avg(numbers) {
//     let sum = 0;
//     for (let number of numbers) {
//         sum = sum + number;
//     }
//     console.log(sum);
//     console.log('total elements in the array :', numbers.length);

//     let avg = sum / numbers.length;
//     return avg;
// }

// let arrayOfintegers = [12, 34, 2, 64, 6, 2];
// let avg = make_avg(arrayOfintegers);
// console.log('average of elements of the array :', avg);
// --------------------------------------


/**
 * Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

// function count_zero(binary){
//     console.log(binary);
//     let count = 0;
//     for(let digit of binary){
//         if(digit === '0'){
//             count = count +1;
//         }
//     }
//     return count;
// }

// let string = '010001';
// let numberOfZero = count_zero(string);
// console.log('Total zeros are :', numberOfZero);
// ----------------------------------



/**
 * Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

function odd_even(num){
    if(num%2 === 0){
        return 'EVEN';
    }
    else{
        return 'ODD';
    }
}
console.log(odd_even(14));

