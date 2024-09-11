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
