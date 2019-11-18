/**
Accessed on 17 November 2019 : https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-37-truncatable-primes

----------------------------------------------------------------------------------------
Project Euler: Problem 37: Truncatable primes
The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only n (8 <= n <= 11) primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
----------------------------------------------------------------------------------------
**/

// This is a basic prime number checker; it just checks divisibility for every number upto the square root of num
function isPrime(num) {
  let limit = Math.sqrt(num)

  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1; // numbers less than two don't count as primes; otherwise, the number passes this test
}


function isTruncatable(p) {
  for (var div = 10; div < p; div *= 10) {
    /*
    On the left, we test from the last digit and add digits (e.g. 7, 97, 797 ).
    On the right, we the remove last digit and keep doing so (e.g. 379, 37, 3)

    We never check the entire number (here, 3797),
    because we check if p is prime before we ever run this function
    */
    if (!isPrime(p % div) || !isPrime(Math.floor(p / div))) {
      return false
    }
  }
  return true
}


function truncatablePrimes(n) {
  var sum = 0 // start with a sum of zero
  var num = 0 // start with the total number of truncatable primes found at zero; keep going until n

  for (var i = 11; num < n; i += 2) { // start with the first two-digit prime. Add two each time (even numbers will never be prime).
    if (isPrime(i)) { // first check if i is prime
      if (isTruncatable(i)) { // if it is prime, check if it's truncations are prime as well; if they are, increase num and add to the sum
        num++
        sum += i
        // console.log("found truncatable prime at " + i)
      }
    }
  }
  console.log("The final sum of truncatable primes (up to the " + n + "th prime) is " + sum + "\n")
  return sum
}

truncatablePrimes(8); // 1986
truncatablePrimes(9); // 5123
truncatablePrimes(10); // 8920
truncatablePrimes(11); // 748317