/* Problem 01 */
function calculateMoney(ticketSale) {
  if (ticketSale < 0 || typeof ticketSale !== "number") {
    return "Invalid Number";
  }
  let result = ticketSale * 120 - (500 + 8 * 50);

  return result;
}
// console.log(calculateMoney(-130));
// console.log(calculateMoney('ad'));
// ------------

// problem 2
function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }
  let lastLetter = name.slice(-1).toLowerCase();
  let result = false;
  let checkArray = ["a", "y", "i", "e", "o", "u"];

  //   for (let char of checkArray) {
  //     if (char === lastLetter) {
  //       result = true;
  //     }
  //   }
  result = checkArray.includes(lastLetter);
  return result ? "Good Name" : "Bad Name";
}
// console.log(checkName("salman"));
// console.log(checkName("RAFEE"));
// console.log(checkName("Jhankar"));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));
// ------------------------------------

// problem 3
function deleteInvalids(array) {
  if (Array.isArray(array) === false) {
    return "Invalid Array";
  }
  let numberArray = [];
  for (let element of array) {
    if (typeof element === "number" && isNaN(element) === false) {
      numberArray.push(element);
    }
  }
  return numberArray;
}

// problem 4
function password(obj) {
  if (
    obj.name === undefined ||
    obj.birthYear === undefined ||
    obj.siteName === undefined ||
    obj.birthYear.toString().length !== 4
  ) {
    return "invalid";
  }

  let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
  let passwordString = capitalSiteName + "#" + obj.name + "@" + obj.birthYear;

  return passwordString;
}
// console.log(
//   password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
// );
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
// console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
// console.log(password({ name: , birthYear: 2002, siteName: "Facebook" }));


// problem 5
function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr)===false || typeof livingCost !== 'number'){
        return 'Invalid Input';
    }

    let totalIncome = 0;
    for ( let payment of arr){
        if(payment>= 3000){
            let tax = payment*0.2;
            totalIncome += payment - tax;
        }
        else{
            totalIncome += payment;
        }
    }
    let savings = totalIncome - livingCost;
    if(savings >= 0){
        return savings;
    }
    else{
        return 'earn more';
    }
}

console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400 ));
console.log(monthlySavings(100, [ 900 , 2700 , 3400] ));
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000 ));
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000 ));
