/**
Accessed on 19 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-34-digit-factorials

----------------------------------------------------------------------------------------
Project Euler: Problem 34: Digit factorials
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the numbers and the sum of the numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.
----------------------------------------------------------------------------------------
**/

function digitFactorial() {

  // We're always considering the factorials of DIGITS - so we've only got 10 factorials: 0 to 9. Might as well list them, instead of calculating them each time.
  const factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

  // Next, we need to calculate the sum of the factorials of all the digits
  function sumOfFactorialDigits(num) {
    let digits = num.toString().split("").map(digitString => parseInt(digitString)); // convert it into an array of digits

    // get the sum of factorials
    let sumDigits = 0
    for (let i = 0; i < digits.length; i++) {
      sumDigits += factorials[digits[i]]
    }
    return sumDigits
  }

  // 10 is the first number that has 2 digits, so it can be our lower-bound of calculation.
  // There's probably a fancy way to choose an upper bound. For now let's just do a million. (FCC sucks here; they give you the answer before you start, so we know that the upperbound could have stopped at 40585...)
  let lowerBound = 10;
  let upperBound = 10 ** 6;

  var numbers = [];

  // With brute-force, check every number within our bounds - does the sum of digit factorials equal the number? If yes, push it to our numbers array
  for (let i = lowerBound; i <= upperBound; i++) {
    if (sumOfFactorialDigits(i) === i) {
      console.log("Found a digit factorial for " + i)
      numbers.push(i)
    }
  }

  // Finally, find the sum of numbers, as we need that as well.
  var sum = numbers.reduce((a, b) => a + b);

  console.log("The numbers that fit are " + numbers + " and their sum is " + sum)
  return {
    sum,
    numbers
  };
}

digitFactorial();