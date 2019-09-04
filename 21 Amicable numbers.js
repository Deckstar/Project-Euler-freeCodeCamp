/**
Accessed on 4 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-21-amicable-numbers

----------------------------------------------------------------------------------------
Project Euler: Problem 21: Amicable numbers
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under n.
----------------------------------------------------------------------------------------
**/

function sumAmicableNum(n) {

  // Compute sum of proper divisors for each number
  let divisorSum = new Array(n).fill(0); // create new array of zeroes with length n

  // This very clever for-loop gives you the sum of divisors (including 1) for every number up to n - except if the number is a prime (in which case we get a 1), or if it's 1 or 0 (in which case we get a 0). Try it out yourself! ;)
  for (let i = 1; i < divisorSum.length; i++) {
    // console.log("At i=" + i + "\t" + divisorSum)
    for (let j = i * 2; j < divisorSum.length; j += i) {
      divisorSum[j] += i
    }
  }

  // // This for loop is completely optional - it's just to convince you that the algorithm above really shows the sum of divisors for every non-prime number
  // for (let i = 0; i < divisorSum.length; i++) {
  //   if (divisorSum[i] != 1 && divisorSum[i] != 0) {
  //     console.log("For i=" + i + " the sum of divisors is " + divisorSum[i])
  //   }
  //   else {
  //     console.log(i + " is a prime")
  //   }
  // }

  let sumOfAmicables = 0 // we start with a sum of zero

  // Find all amicable pairs within range
  for (let i = 1; i < divisorSum.length; i++) {
    let j = divisorSum[i];

    if (j != i && divisorSum[j] == i) { // we have to ignore the j's which are equal to i (these are accidents); otherwise, we are looking for the amicable numbers (numbers where d(j) = i and d(i) = j)
      sumOfAmicables += i // if we find such a pair, we increase the sum by i (or, alternatively, it could have been divisorSum[j] for the same answer)
    }
  }

  console.log("The sum of all amicable numbers under " + n + " is " + sumOfAmicables + "\n")
  return sumOfAmicables

}


sumAmicableNum(1000);
sumAmicableNum(2000);
sumAmicableNum(5000);
sumAmicableNum(10000);
