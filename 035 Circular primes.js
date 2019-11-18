/**
Accessed on 20 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-35-circular-primes/

----------------------------------------------------------------------------------------
Project Euler: Problem 35: Circular primes
The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below n, whereas 100 <= n <= 1000000?
----------------------------------------------------------------------------------------
**/

function circularPrimes(limit) {
  // First, we need a function for checking if a number is prime or not
  function isItPrime(n) {
    if (n < 2) return false; // is the number less than 2?
    if (n % 2 === 0) return n === 2; // is it even? (all except 2 return not prime)
    if (n % 3 === 0) return n === 3; // is it divisible by three? (all except 3 return not prime)

    var h = Math.floor(1 + Math.sqrt(n));
    var i = 5;

    while (i <= h) {
      if (n % i === 0) return false;
      if (n % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }

  // Next, we need a way to check if the various rotations of the number are prime, too
  function allRotationsPrime(n) {
    var num = String(n); // start by converting our test-number to a string

    // The way we check every rotation is by moving the last digit to the beginning each time.
    for (var i = 1; i < num.length; i++) {
      num = num.slice(-1) + num.slice(0, num.length - 1);
      // console.log("For " + n + ", trying " + num);

      // Once we have our new rotation, we check if it's prime - if not, we return false and break the loop
      if (isItPrime(parseInt(num)) == false) {
        // console.log(num + " is not prime, so " + n + " is not circular.\n");
        return false;
      }
    }
    // console.log(n + " is circular!\n");
    return true;
  }

  // Here we create a counter for the number of circular primes up to our limit
  // 2 counts but we're going to skip it as it's the only even prime
  var answer = 1;

  // Finally, we loop through every number from 3 (the first prime) up to our limit, and check both conditions each time
  for (var i = 3; i < limit; i += 2) {
    // first check if the number is prime
    if (isItPrime(i) == true) {
      // then check if all its rotations are prime, too
      if (allRotationsPrime(i) == true) {
        answer++;
      }
    }
  }

  // After checking every number up to the limit, we return our answer
  console.log("The number of circular primes below " + limit + " is " + answer);
  return answer;
}

circularPrimes(100); // 13
circularPrimes(100000); // 43
circularPrimes(250000); // 45
circularPrimes(500000); // 49
circularPrimes(750000); // 49
circularPrimes(1000000); // 55
