/**
Accessed on 5 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-23-non-abundant-sums/

----------------------------------------------------------------------------------------
Project Euler: Problem 23: Non-abundant sums
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all positive integers <= n which cannot be written as the sum of two abundant numbers.
----------------------------------------------------------------------------------------
**/


// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------- BASIC SOLUTION -------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
//
// function sumOfNonAbundantNumbers(n) {
//
//   // First, we will use the same trick for the sum of divisors as in problem #21
//   let divisorSum = new Array(n + 1).fill(0); // create new array of zeroes with length n + 1 (we go from zero to n)
//
//   // This very clever for-loop gives you an array with the sum of divisors (including 1) for every number up to n - except if the number is a prime (in which case we get a 1), or if it's 1 or 0 (in which case we get a 0). Try it out yourself! ;)
//   for (let i = 1; i < divisorSum.length; i++) {
//     for (let j = i * 2; j < divisorSum.length; j += i) {
//       divisorSum[j] += i
//     }
//   }
//   // console.log("The list of divisor sums (from 0 to "+n+") is " + divisorSum);
//
//
//   // Now let's find all the abundant numbers up to n
//   let abundantNumbers = [];
//   for (let i = 1; i < n; i++) {
//     if (divisorSum[i] > i) { // if the sum of divisors is bigger than the number itself, then by definition the number is abundant
//       abundantNumbers.push(i); // we add it to the list of abundant numbers
//     }
//   }
//   // console.log("The list of abundant numbers up to " + n + " is " + abundantNumbers);
//
//
//   // Next, we're going to check if a number can be written as the sum of two abundant numbers. If not, we add it to the sum.
//   let sumOfNonAbundantNumbers = 0;
//
//   for (let i = 1; i <= n; i++) { // we're going to check - for every number i up to our limit n - if an abundant number plus another one yields our number.
//     // console.log("\nNow at i=" +i)
//     var aSumOfTwo = false;
//     for (let j = 0; j < abundantNumbers.length; j++) { // we start with the first number in the abundantNumbers array
//       for (let k = j; k < abundantNumbers.length; k++) { // we can let k start from j -- if we checked 12 + 18, we don't have to check 18 + 12 as it's the same thing
//         if (abundantNumbers[j] + abundantNumbers[k] > i) { // this is a little optimization trick - don't bother increasing k anymore if the two numbers are greater than our i. This cuts the calculation time by 75% - 80% or so.
//           break;
//         }
//           // console.log("Trying j="+j+" and k="+k);
//           if (abundantNumbers[j] + abundantNumbers[k] == i) {
//             // console.log("Bingo! Got a sum of two at " + i + " for " + abundantNumbers[j]+" + "+abundantNumbers[k]);
//             aSumOfTwo = true;
//             // console.log("Did I break?")
//             break;
//           }
//         }
//       if (aSumOfTwo) {
//         // console.log("Did I break?")
//         break
//       }
//     }
//
//     if (aSumOfTwo == false) { // if it's still not a sum of two after all that looping, then increase our sum
//       sumOfNonAbundantNumbers += i;
//       // console.log(i+ " is not a sum of two abundant numbers")
//     }
//   }
//
//   console.log("\nThe final sum of non-abundant numbers up to " + n + " is " + sumOfNonAbundantNumbers + "\n");
//   return sumOfNonAbundantNumbers;
// }
//
//
// // sumOfNonAbundantNumbers(30); // 411
// // sumOfNonAbundantNumbers(10000); // 3731004
// // sumOfNonAbundantNumbers(15000); // 4039939
// // sumOfNonAbundantNumbers(20000); // 4159710
// // sumOfNonAbundantNumbers(28123); // 4179871
//
//
//
//

// ------------------------------------------------------------------------------------------------------------
// ----------------------------------------- ADVANCED SOLUTION ------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

/**
This solution is very, very efficient. Much more efficient than the one I could come up with on my own, above.
It's adapted from the following blogpost:

https://www.xarg.org/puzzle/project-euler/problem-23/

Thanks a lot Robert Eisele!

Original blogpost comments included in quotes ^_^ Other comments are my own.
*/



/**
"With Problem 21, we figured out on how to calculate the sum of proper divisors already. We can recycle this knowledge here, since we need to decide based on this sum, if a number is a perfect number, an abundant or a deficient number. Since they already spoilered the upper limit of 28123, we need primes only up to sqrt(28123) and can copy the sigma function over (I know, I should solve the prime generation with a sieve...):"
*/
function sigma(n) {
  var sum = 1;
  var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167]; // 167 is the last prime before sqrt(28123) (which is 167.7)

  if (n < 4) {
    return 1;
  }

  for (var i = 0; i < primes.length; i++) {

    var p = primes[i];

    if (0 === n % p) {

      var t = p * p;
      n /= p;
      while (0 === n % p) {
        t *= p;
        n /= p;
      }
      sum = sum * (t - 1) / (p - 1);
    }
    if (p * p > n) {
      break;
    }
  }

  if (n > 1) {
    sum *= n + 1;
  }
  return sum;
}

/**
"We know that σ is the sum of all divisors, not of all proper divisors. As such, abundant numbers can be checked with the following function, using the same caching mechanism as in Problem 21:"
*/
var cache = {};

function isAbundant(n) {

  if (n < 10)
    return false;

  if (cache[n]) {
    return cache[n];
  }
  return cache[n] = (sigma(n) - n > n);
}


/**
"Since this function scans all numbers for abundant numbers over and over again, we can save all abundant numbers once, and reduce the search scope quite a bit:"
*/
var abundants = [];
for (var i = 1; i <= 28123; i++) {
  if (isAbundant(i))
    abundants.push(i);
}

/**
"However, we know the abundant numbers already but still go back to the isAbundant function. A much faster way is just summing all abundant numbers and check if they exceed our limit, which removes the isSumOfTwoAbundants function and makes it a lookup array:"
*/


var isSumOfTwoAbundants = new Array(28123 + 1);
for (var i = 0; i < abundants.length; i++) {
  for (var j = i; j < abundants.length; j++) {
    if (abundants[i] + abundants[j] <= 28123) {
      isSumOfTwoAbundants[abundants[i] + abundants[j]] = true;
    } else {
      break;
    }
  }
}

/**
"Which finally lets us compute the solution:"
*/
function sumOfNonAbundantNumbers(n) {

  var sum = 0;
  for (var i = 1; i <= n; i++) {
    if (!isSumOfTwoAbundants[i]) {
      sum += i;
    }
  }
  console.log("The final sum of non-abundant numbers up to " + n + " is " + sum + "\n");
  return sum;
}

sumOfNonAbundantNumbers(30); // 411
sumOfNonAbundantNumbers(10000); // 3731004
sumOfNonAbundantNumbers(15000); // 4039939
sumOfNonAbundantNumbers(20000); // 4159710
sumOfNonAbundantNumbers(28123); // 4179871