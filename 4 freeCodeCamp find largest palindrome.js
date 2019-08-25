/**
Accessed on 9 August 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-4-largest-palindrome-product

----------------------------------------------------------------------------------------
Project Euler: Problem 4: Largest palindrome product
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
----------------------------------------------------------------------------------------
**/

/** We need three things:
 * 1) a palindrome checking function, and;
 * 2) a function that returns an arbitrary number of nines (e.g. nines(3) = 999, nines(4) = 9999)
 * 3) a function for running through products and finding the biggest palindrome
 */

/** ---------------------------------------------------------------------------------------- */
/** Here we have a wonderful palindrome checking function */
function isAPalindrome(n) {
  let forwardN = n;
  let reversedN = 0;

  while (forwardN > 1) {
    reversedN = 10 * reversedN + (Math.floor(forwardN) % 10);
    /** we're going to have some decimals left over from dividing by ten (see line below), but we can ignore them */

    forwardN = forwardN / 10;
    /** eventually, this will stop being greater than 1 */

    /** Here we can have some console logs to tell us what's going on. For now, let's leave them commented out. */
    // console.log("reversedN is " + reversedN);
    // console.log("forwardN is " + forwardN);
  }

  /** Here we can have some console logs to tell us what's going on. For now, let's leave them commented out. */
  // console.log("Having started with " + n + ", final reversedN is " + reversedN);
  // console.log(
  //   "Is it a palindrome? " + (reversedN == n ? "YES! :D" : "NO! >:(")
  // );

  /** Finally, we just return whether the reversed number is the same as the forward number*/
  return reversedN == n;
}

/** ---------------------------------------------------------------------------------------- */
/** Now, for a quick nines function */
function nines(size) {
  if (size < 0 || Number.isInteger(size) == false) {
    throw "Number of nines must be 0 or more, and an integer!";
  }

  let num = 0;

  for (let i = 0; i < size; i++) {
    num = num + 9 * 10 ** i; // simple loop: return the number of nines that you need
  }

  return num;
}

/** ---------------------------------------------------------------------------------------- */
/** Next, let's find the biggest one */
function largestPalindromeProduct(digits) {
  let max = -1;

  for (let i = nines(digits); i > 10 ** (digits - 1); i--) {
    // start from the top, because the biggest palindrome will probably be closer to the top
    if (max >= i * nines(digits)) {
      // efficiency: prevent it from looping through all the digits - as soon as the maximum is greater than 99...9 times i, as 99...9 squared is the biggest possible palindrome for the given function), we stop the for-loop
      break;
    }

    for (let j = nines(digits); j >= i; j--) {
      // so, we've got two numbers that we're multiplying. We're going to loop through all the ones that are small
      let p = i * j;
      if (p > max && isAPalindrome(p)) {
        /** the reason we do this check is that sometimes we can get a bigger palindrome by considering smaller i's further down the line, e.g. try it for 3-digit multipliers: for i=924, 924 * 962 = 888888 -- but for i=913, 913 * 993 = 906609! Clearly, the second is a bigger palindrome!*/
        console.log(
          digits + ") Found a palindrome at " + i + " * " + j + " = " + p + "!"
        );
        max = p;
      }
    }
  }
  return max;
}

largestPalindromeProduct(0);
largestPalindromeProduct(1);
largestPalindromeProduct(2);
largestPalindromeProduct(3);
largestPalindromeProduct(4);
largestPalindromeProduct(5);
largestPalindromeProduct(6);
largestPalindromeProduct(7);
