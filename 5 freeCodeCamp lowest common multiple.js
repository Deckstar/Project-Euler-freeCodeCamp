/**
Accessed on 10 August 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-5-smallest-multiple/

----------------------------------------------------------------------------------------
Project Euler: Problem 5: Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
----------------------------------------------------------------------------------------
I confess that this one I simply copy-pasted from the solutions page... xD I didn't know that you can find the LCM by first finding the GCD!
----------------------------------------------------------------------------------------
**/

//LCM of two numbers
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

//Euclidean recursive algorithm
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function smallestMult(n) {
  let maxLCM = 1;

  //Getting the LCM in the range
  for (let i = 2; i <= n; i++) {
    maxLCM = lcm(maxLCM, i);
  }
  return maxLCM;
}
