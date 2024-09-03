/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let i=1, sum=0;
while(i<=500){
    if(sum>=100){
        break;
    }
    sum=sum+i;
    console.log(i,sum);
    i++;
}
console.log(sum);
