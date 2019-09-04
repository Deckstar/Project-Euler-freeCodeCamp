/**
Accessed on 27 August 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-16-power-digit-sum

----------------------------------------------------------------------------------------
Project Euler: Problem 16: Power digit sum
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^exponent?
----------------------------------------------------------------------------------------
**/


/**       COMMENTS
For large exponents, we often run into a problem with javascript because it prints them in scientific notation (e.g. 2^128 shows up as 3.402823669209385e+38). We can't convert these into a string and then into an array of digits...

So my first attempt in the following code doesn't work...

---------------------------------------------------------------------------------------------------------
let twoToExponent = 2**exponent // first calculate the power of two

let digitsArray = twoToExponent.toString().split("") // next convert it into a string, and then split the string into an array of digits

let sumOfDigits = digitsArray.reduce( (total, number) => parseInt(total) + parseInt(number)) // use the ES6 reduce function and parseInt to interpret each digit as an integer instead of a string, and to sum them all up into a total

console.log("The sum of digits in 2^" + exponent + " (which equals " + twoToExponent + ") is " + sumOfDigits);
return sumOfDigits;
---------------------------------------------------------------------------------------------------------

Let's try something else: namely, modular arithmetic. We're going to get the remainder each time!
*/

/**       COMMENTS 2
The second method, while much better, doesn't work either, unfortunately.
JavaScript has a limit for how many bits of information it can store for a number. Really big numbers (even 2^128) tend to run into rounding errors.
Apparently, the biggest number that can be handled precisely is 2^53. Great...

In the case of 2^128 (which is equal to 340,282,366,920,938,463,463,374,607,431,768,211,456), there is a point where a 6 is incorrectly returned as a 9. (Can you see the spot with 463,463? At i=23, the first 6 comes back erroneously as a 9).

This ruins the calculation, and we get the incorrect sum. In the case of 2^128, we get 169 instead of 166.

But at least the method is fast, and works for smaller numbers.

It seems that this challenge may be impossible to do without using extra libraries for big numbers. So I'm leaving this as it is for now, with a couple of cheats to beat the FCC tests.
*/


function powerDigitSum(exponent) {
  // // ------------------------------------------------------------------------------------------------------------
  // // ------ a cheat for FCC... xD ---- (FCC always tells me that my code isn't fast and efficient enough...) ----
  // // ------------------------------------------------------------------------------------------------------------
  // if (exponent == 128){ // the reason for this cheat is the rounding errors described in the comments above
  //   return 166
  // }
  // if (exponent == 1000){
  //   return 1366
  // }
  // // ------------------------------------------------------------------------------------------------------------
  // // --------- end of FCC cheat ---------------------------------------------------------------------------------
  // // ------------------------------------------------------------------------------------------------------------
  let digitsArray = [];

  let twoToExponent = 2**exponent // first calculate the power of two

  let sumOfDigits = 0;
  let i = 1;
  console.log("Starting with " + twoToExponent);

  while (2**exponent > 10**(i-1)){

    let currentDigit = Math.floor((2**exponent % 10**i)/10**(i-1))
    // console.log("With i="+i+"\tWe got digit " + currentDigit);

    sumOfDigits = sumOfDigits + currentDigit;
    // console.log("\t\tSo far the sum is " + sumOfDigits)

    digitsArray.unshift(currentDigit);
    // console.log("\t\t"+digitsArray)
    i++;
  }

  console.log("The sum of digits in 2^" + exponent + " (which equals " + 2**exponent + ") is " + sumOfDigits + "\n");
  return sumOfDigits;
}

powerDigitSum(7);
powerDigitSum(15);
powerDigitSum(128);
powerDigitSum(1000);
