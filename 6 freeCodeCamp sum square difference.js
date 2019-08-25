/**
Accessed on 17 August 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-6-sum-square-difference

----------------------------------------------------------------------------------------
Project Euler: Problem 6: Sum square difference
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
----------------------------------------------------------------------------------------
**/


function sumSquareDifference(n) {

  // First, let's find the sum of squares
  var squaresArray = [];

  for (let i=1; i<=n; i++){
    squaresArray.push(i**2);
    // console.log("At " +i + ", we're pushing " + i**2 + " to the array.")
  }


  var sumOfSquares = squaresArray.reduce( (total, num) => total + num ); // we start at zero and add each item in the array to the total. In the end, we get one number as the result.
  console.log("Our sum of squares is " + sumOfSquares + "\n");


  // Second, let's find the square of sums
  var sumOfIntegers = 0;

  for (let i=1; i<=n; i++){
    sumOfIntegers += i;
    // console.log("By integer " + i + " our sum is " + sumOfIntegers);
  }

  var squareOfSum = sumOfIntegers ** 2;
  console.log("Our square of sums is " + squareOfSum + "\n");


  // Finally, let's calculate the difference
  var answer = squareOfSum - sumOfSquares;


  console.log("Finally, our answer is " + squareOfSum + " - " + sumOfSquares + " = " + answer)
  return answer;
}

sumSquareDifference(100);
