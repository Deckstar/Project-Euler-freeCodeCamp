/**
Accessed on 22 December 2019 : https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-41-pandigital-prime

----------------------------------------------------------------------------------------
Project Euler: Problem 41: Pandigital prime
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest n-length digit pandigital prime that exists?
----------------------------------------------------------------------------------------
**/

/**
 *
 * @param {isPrime(num) }
 * STEP 1: We need a function to check if a number is prime
 *
 * @param {permutator(input)}
 * STEP 2: We need to get all the permutations of an array
 *
 * @param {pandigitalPrime(n)}
 * STEP 3: We check the primality of every permutation of integers up to n, and we return the highest one we could find.
 */

// This is a basic prime number checker; it just checks divisibility for every number upto the square root of num
function isPrime(num) {
  let limit = Math.sqrt(num);

  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1; // numbers less than two don't count as primes; otherwise, the number passes this test
}

function permutator(input) {
  // this is a quick way of returning an array of digits from 1 to N
  var inputArr = [...Array(input).keys()].map(x => ++x);
  var results = [];

  function permute(arr, memo) {
    var cur,
      memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

function pandigitalPrime(n) {
  let permutationsArray = permutator(n);
  let highestPrimeFound = 0;

  for (let i = 0; i < permutationsArray.length; i++) {
    // We have an array of digits, which we must parse as an integer
    let currentPermutation = parseInt(permutationsArray[i].join(""));
    // Check if it's prime
    if (isPrime(currentPermutation)) {
      // Check if it's bigger than the one found so far
      if (currentPermutation > highestPrimeFound) {
        highestPrimeFound = currentPermutation;
      }
    }
  }

  console.log(
    `The highest pandigital prime found with digits up to ${n} was ${highestPrimeFound}`
  );
  return highestPrimeFound;
}

pandigitalPrime(4); // 4231.
pandigitalPrime(7); // 7652413.
