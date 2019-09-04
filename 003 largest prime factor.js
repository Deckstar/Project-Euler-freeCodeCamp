/**
Accessed on 9 August 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-3-largest-prime-factor/

----------------------------------------------------------------------------------------
Project Euler: Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
----------------------------------------------------------------------------------------
**/

function largestPrimeFactor(n) {
  let factor = n;

  let divisor = 2;

  let largestDivisor = 1;

  while (factor != largestDivisor) {
    if (factor == 1) {
      // sometimes, this problem seems to cause an infinite loop
      console.log(
        "And here's our answer: for " +
          n +
          " the largest prime factor is " +
          largestDivisor +
          "\n"
      );
      return largestDivisor;
    }

    if (factor % divisor == 0) {
      // starting with 2, can we divide the current number by the divisor with no remainder?

      console.log(
        factor + " divided by " + divisor + " equals " + factor / divisor
      );

      factor = factor / divisor; // if yes, then update the divisor

      if (divisor > largestDivisor) {
        largestDivisor = divisor; // if the divisor is bigger than our largest divisor so far, then update the largest divisor
      }
      divisor = 2; // reset the divisor to 2 and start again
    } else {
      // if we get a remainder, increase the divisor by 1 or 2 and try again

        // console.log(divisor + " was not a divisor, so we are incrementing");

      if (divisor == 2) {
        divisor = divisor + 1;
      } else if (divisor > 2) {
        divisor = divisor + 2; // this is a redundancy control: 2 is the only even prime number, so we can increase by two to skip numbers like 4, 6, 8 etc.
      }
    }
  }

  // the largest divisor will always be a prime factor (otherwise, a smaller divisor would've divided first - e.g., 4 will always be false because 2 will work first), so we can return the largest divisor as our answer for the largest prime factor

  console.log(
    "And here's our answer: for " +
      n +
      " the largest prime factor is " +
      largestDivisor +
      "\n"
  );
  return largestDivisor;
}

for (let i = 20001; i < 100000; i += 4508) {
  largestPrimeFactor(i);
}
