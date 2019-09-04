/**
Accessed on 7 August 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-7-10001st-prime/

----------------------------------------------------------------------------------------
Project Euler: Problem 7: 10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
----------------------------------------------------------------------------------------
**/

function nthPrime(n) {
  let primeArray = [];

  let currentNumber = 2; // first prime

  let decimalPlaces = 2; // decimal places for rounding the percentages; in our console, we're going to see how the proportion of prime numbers evolve as you consider bigger and bigger numbers (hint, it goes down - so it gets harder and harder to pick a prime as the numbers go up!)

  while (primeArray.length < n) {
    let isItPrime = true;

    // This is an optimization method: A non-prime will have prime factors <= its square root
    let max = Math.ceil(Math.sqrt(currentNumber)); // ceil is the ceiling, i.e. opposite of floor: e.g.ceil(2.1) = 3

    // We have to check if the current number can be divided by any number in the array of prime numbers (this is the prime factor theorem). If not, then it itself is prime.
    for (let i = 0; primeArray[i] <= max; i++) {
      if (currentNumber % primeArray[i] == 0) {
        // console.log("NOT " + currentNumber + " -- Found non-prime at i=" + i + ":\n\t\t" + primeArray[i] + " is a factor of " + currentNumber);
        isItPrime = false;
        break;
      }
    }

    // is isItPrime still true after all that for-looping? Well, then we can add it to the array!
    if (isItPrime == true) {
      // console.log(currentNumber + " is a prime, so we're adding it into the prime array.");

      primeArray.push(currentNumber);

      // console.log("\t\tAt number " + currentNumber + " the prime array is " + primeArray + "\n")
    }

    // let decimalPlaces = 2;
    // console.log("\t\t\t\tAt " +currentNumber +" odds of getting a prime are: " +Math.round((primeArray.length / currentNumber) * 100 * 100) / 100 +"%");

    // increase count of currentNummber
    if (currentNumber == 2) {
      currentNumber++;
    } else {
      currentNumber += 2;
    } // we can skip the even numbers (they will never be prime), so we do +2.
  }

  console.log("\n\nPrime #" + n + " is " + primeArray[primeArray.length - 1] + "!");
  return primeArray[primeArray.length - 1]; // returns final prime
}

nthPrime(12);
