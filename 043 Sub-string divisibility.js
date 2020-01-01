/**
Accessed on 22 December 2019 : https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-43-sub-string-divisibility

----------------------------------------------------------------------------------------
Project Euler: Problem 43: Sub-string divisibility
The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

d2d3d4=406 is divisible by 2

d3d4d5=063 is divisible by 3

d4d5d6=635 is divisible by 5

d5d6d7=357 is divisible by 7

d6d7d8=572 is divisible by 11

d7d8d9=728 is divisible by 13

d8d9d10=289 is divisible by 17

Find the numbers of all 0 to 9 pandigital numbers with this property.


----------------------------------------------------------------------------------------
**/

/**
 * Well... the first thing to notice is that there are 10! pandigital numbers with 10 digits. That's 3,628,800.
 * We could brute-force check every one of these 3.6 million options, but let's add at least a few optimizations:
 *
 * 1) division by 17 is the strictest criterion, so we may wish to start from the end and move backwards
 */

let primesList = [2, 3, 5, 7, 11, 13, 17];
let panDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let tenFactorial = 3628800;

// Thanks Coding Train! https://www.youtube.com/watch?v=9Xy-LMAfglE
function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

// Thanks Coding Train! https://www.youtube.com/watch?v=9Xy-LMAfglE
function nextOrder(order) {
  // STEP 1 of the algorithm
  // https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering
  var largestI = -1;
  for (var i = 0; i < order.length - 1; i++) {
    if (order[i] < order[i + 1]) {
      largestI = i;
    }
  }
  if (largestI == -1) {
    console.log("finished checking orders");
    return "finished";
  }

  // STEP 2
  var largestJ = -1;
  for (var j = 0; j < order.length; j++) {
    if (order[largestI] < order[j]) {
      largestJ = j;
    }
  }

  // STEP 3
  swap(order, largestI, largestJ);

  // STEP 4: reverse from largestI + 1 to the end
  var endArray = order.splice(largestI + 1);
  endArray.reverse();
  return order.concat(endArray);
}

// for the divisibility function, we input three integers and our prime divisor, and check for divisibility
function checkDivisibility(a, b, c, p) {
  let int = parseInt([a, b, c].join(""));

  return int % p == 0;
}

function substringDivisibility() {
  let divisiblePandigitals = [];

  for (let i = 0; i < tenFactorial; i++) {
    // completion tracker
    if (i % 500000 == 0) {
      console.log(`${Math.round((i / tenFactorial) * 100)}% done at i=$${i}`);
    }

    let panDivisible = true; // start by assuming it's true

    for (let j = panDigits.length - 1; j >= 3; j--) {
      let digit3 = panDigits[j];
      let digit2 = panDigits[j - 1];
      let digit1 = panDigits[j - 2];

      let prime = primesList[j - 3];

      // if it's false for at least one of these three digit & prime combos, break the loop and set divisibility to false
      if (!checkDivisibility(digit1, digit2, digit3, prime)) {
        panDivisible = false;
        break;
      }
    }
    // if we passed the divisibility test, add i to our array of divisibles
    if (panDivisible) {
      //   console.log(`Found panDigits at ${panDigits}`);
      divisiblePandigitals.push(parseInt(panDigits.join("")));
    }
    // after the check, try the next combination
    panDigits = nextOrder(panDigits);
  }
  console.log(`The divisible pandigitals are: ${divisiblePandigitals}.`);
  return divisiblePandigitals;
}

substringDivisibility(); // [ 1430952867, 1460357289, 1406357289, 4130952867, 4160357289, 4106357289 ].
