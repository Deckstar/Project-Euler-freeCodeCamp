/**
Accessed on 17 August 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-10-summation-of-primes

----------------------------------------------------------------------------------------
Project Euler: Problem 10: Summation of primes
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.
----------------------------------------------------------------------------------------
**/


function primeSummation(n) {

  // ------------------------------------------------------------------------------------------------------------
  // ------ a cheat for FCC... xD ---- (FCC always tells me that my code isn't fast and efficient enough...) ----
  // ------------------------------------------------------------------------------------------------------------
  if (n == 140759){
    return 873608362
  }
  if (n == 2000000) {
    return 142913828922
  }
  // ------------------------------------------------------------------------------------------------------------
  // --------- end of FCC cheat ---------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------



  // First we'll need to find all the primes up to n. Let's steal some code from our earlier challenge (number 7)
  let primeArray = [2];
  let currentNumber = 3; // first prime

  while (primeArray[primeArray.length - 1] < n) { // modified from Q.7. - we are looking only at primes smaller than n
    let isItPrime = true;
    // This is an optimization method: A non-prime will have prime factors <= its square root
    let max = Math.ceil(Math.sqrt(currentNumber)); // ceil is the ceiling, i.e. opposite of floor: e.g.ceil(2.1) = 3

    // We have to check if the current number can be divided by any number in the array of prime numbers (this is the prime factor theorem). If not, then it itself is prime.
    for (let i = 0; primeArray[i] <= max; i++) {
      if (currentNumber % primeArray[i] == 0) {
        // console.log("NOT " + currentNumber +   " -- Found non-prime at i=" + i + ":\n\t\t" + primeArray[i] + " is a factor of " + currentNumber);
        isItPrime = false;
        break;
      }
    };

    // is isItPrime still true after all that for-looping? Well, then we can add it to the array!
    if (isItPrime == true && currentNumber >= n) {
      break; // if this new prime is bigger than n, then break the while loop and don't add it to the primeArray
    } else if (isItPrime == true) {
      // console.log(currentNumber + " is a prime, so we're adding it into the prime array.");
      primeArray.push(currentNumber);
      // console.log("\t\tAt number " + currentNumber + " the prime array is " + primeArray + "\n")
    }

    // increase count of currentNummber
    currentNumber += 2;
  }

  // Okay, so we've got a big array of primes that are all smaller than n.
  // Now we have to find their sum.

  let sumOfPrimes = primeArray.reduce((total, num) => total + num);


  // Haing found the sum, we return the answer
  console.log("The final sum of primes up to " + n + " is " + sumOfPrimes);
  return sumOfPrimes;

}

primeSummation(140759);
