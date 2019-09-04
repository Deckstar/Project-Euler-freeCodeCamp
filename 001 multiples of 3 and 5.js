/**
Accessed on 25 August 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5/

----------------------------------------------------------------------------------------
Project Euler: Problem 1: Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
----------------------------------------------------------------------------------------
**/

function multiplesOf3and5(number) {

  let multiples = [];

  for (let i=3; i<number; i++){ // we can start at three because we are looking for multiples of 3 and 5
    if (i % 3 == 0 || i % 5 == 0) { // is the number a multiple of 3 or 5? (does it leave a remainder of 0?)
      multiples.push(i); // if it is a multiple, add it to our multiples array
    }
  }

  let sum = multiples.reduce( (total, number) => total + number); // reduce is a function that lets us turn an array into one variable, using some rule. Here, we start with a total of zero, and add every number in the array, until we get our final total.

  console.log("All the multiples of 3 and 5 below " + number + " sum up to " + sum);
  return sum;
}

multiplesOf3and5(49)
multiplesOf3and5(1000)
multiplesOf3and5(19564);
