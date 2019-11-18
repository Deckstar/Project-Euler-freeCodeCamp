/**
Accessed on 4 October 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-36-double-base-palindromes/

----------------------------------------------------------------------------------------
Project Euler: Problem 36: Double-base palindromes
The decimal number, 585 = 1001001001(base 2) (binary), is palindromic in both bases.

Find the sum of all numbers, less than n, whereas 1000 <= n <= 1000000, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
----------------------------------------------------------------------------------------
**/

// First, let us copy our lovely palindrome function from Problem #4.
function isAPalindrome(intAsString) {
  let earlierDigit = 0;
  let latterDigit = intAsString.length - 1;

  while (earlierDigit <= latterDigit) {
    if (intAsString[earlierDigit] !== intAsString[latterDigit]) {
      return false
    }
    earlierDigit++
    latterDigit--
  }
  return true
}

// We just check all the palindroms up to n. If they're palindromic in both bases, we add them to the array. In the end we do a sum.
function doubleBasePalindromes(n) {
  let doublePalindromesSum = 0

  for (let i = 1; i < n; i++) {
    let stringVersion = i.toString(); // First, let's convert our number to a string
    let binaryVersion = (i >>> 0).toString(2); // Next, let's convert our number to binary

    // console.log(i + " in binary is " + binaryVersion)

    // If it's a palindrome in both cases, we add it to the sum
    if (isAPalindrome(stringVersion) && isAPalindrome(binaryVersion)) {
      doublePalindromesSum += i
      // console.log(`\tfound a double palindrome for ${i} and ${binaryVersion}`)
    }
  }

  console.log("Up to " + n + ", the sum of double palindromes is " + doublePalindromesSum)
  return doublePalindromesSum
}



doubleBasePalindromes(20) // 25
doubleBasePalindromes(1000) // 1772
doubleBasePalindromes(50000) // 105795
doubleBasePalindromes(500000) // 286602
doubleBasePalindromes(1000000) // 872187