/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

let sum = 0;
// for (let i = 91; i <= 129; i += 2) {
//     sum = sum + i;
// }
// console.log(sum);

for (let j = 51; j <= 85; j++) {
    if (j % 2 === 0) {
        sum = sum + j;
        console.log(j, sum);
    }
}
console.log(sum);
