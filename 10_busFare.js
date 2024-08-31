/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 25;
let isStudent = false;

if(age<10){
    console.log('free ticket');
}
else if (age<60 && isStudent===true){
    console.log('50% discount');
}
else if (age>=60){
    console.log('15% discount');
}
else{
    console.log('regular ticket fare 800');
}

