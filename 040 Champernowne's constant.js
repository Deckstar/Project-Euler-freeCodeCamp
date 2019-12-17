/**
Accessed on 17 December 2019 : https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-40-champernownes-constant

----------------------------------------------------------------------------------------
Project Euler: Problem 40: Champernowne's constant
An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
----------------------------------------------------------------------------------------
**/

function champernownesConstant(n) {
  let foundDigits = [];
  let countOfDigitsSoFar = 1;

  let tenPowersUpToN = [];
  for (let i = 0; i <= Math.log10(n); i++) {
    tenPowersUpToN.push(10 ** i);
  }
  let tensIndex = 0;

  for (let i = 1; i <= n; i++) {
    // first check if the digit we seek (10^something) is going to be coming up now;
    // This digit is going to be in the range of the previous digit and the next digit, inclusive
    if (
      countOfDigitsSoFar - i.toString().length <= tenPowersUpToN[tensIndex] &&
      tenPowersUpToN[tensIndex] <= countOfDigitsSoFar
    ) {
      // if we are in range, then we need to get the correct digit out of our i;
      // we find the digit we need by taking the remainder of the digits so far minus the digit we seek;
      // we add the sought digit of i to our found digits array
      foundDigits.push(
        parseInt(i.toString()[countOfDigitsSoFar - tenPowersUpToN[tensIndex]])
      );

      console.log(
        `Digit #${tenPowersUpToN[tensIndex]} is ${parseInt(
          i.toString()[countOfDigitsSoFar - tenPowersUpToN[tensIndex]]
        )}`
      );
      // next we have to make sure to increment our tensIndex, to go to the next power of 10
      tensIndex++;
    }
    // after the if test, increment the digits of Champernowne's constant so far by the length of i
    countOfDigitsSoFar += i.toString().length;
  }

  // after that for-loop, we take the product of our found digits as our result
  let result = foundDigits.reduce((a, b) => a * b);
  console.log(`\nUp to 10^${n}, the result is ${result}\n`);

  return result;
}

champernownesConstant(100); // 5.
champernownesConstant(1000); // 15.
champernownesConstant(1000000); // 210.
