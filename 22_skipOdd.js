/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// for(let i=1 ; i<=40 ; i++){
//     if(i%2 !== 0){
//         continue;
//     }
//     console.log(i);
// }

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for(let j=55 ; j<=85 ; j+=2){
    if(j%5 === 0){
        continue;
    }
    console.log(j);
}