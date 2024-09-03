// ------WHILE LOOP---------

// Find all the odd numbers from 61 to 100.
let i=61;
while(i<=100){
    if(i%2 !== 0){
        console.log(i, 'is odd number')
    }
    i++;
}

// Find all the even numbers from 78 to 98.
let j=78;
while(j<=98){
    if(j%2 === 0){
        console.log(j, 'is even number')
    }
    j++;
}

// -------------FOR LOOP--------

console.log('for loop')
for(let i=61 ; i<=100 ; i++){
    if(i%2 !== 0){
        console.log(i, 'is odd number');
    }
}
for(let j=78 ; j<=100 ; j++){
    if(j%2 === 0){
        console.log(j, 'is even number');
    }
}


