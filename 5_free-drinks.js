/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 550;
let cokePrice = 30;

if(burgerPrice > 500){
    cokePrice = 0;
    console.log('free coke');
}
else{
    cokePrice = 30;
    console.log('coke price 30tk');
}

let total = burgerPrice + cokePrice;
console.log(total);