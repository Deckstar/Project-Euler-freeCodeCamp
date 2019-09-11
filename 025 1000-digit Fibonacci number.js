/**
Accessed on 11 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-25-1000-digit-fibonacci-number/

----------------------------------------------------------------------------------------
Project Euler: Problem 25: 1000-digit Fibonacci number
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.

Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144

The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain n digits?
----------------------------------------------------------------------------------------
**/


function digitFibonacci(n) {

  let fibonacciArray = [1, 1]; // we start at the 1st term (i=0); the first term of Fibonacci are 1 and 1

  let i = 2;
  while (fibonacciArray[fibonacciArray.length - 1].toString().length < n) { // we're checking the length of the latest number in the fibArray. If its number of digits is less than n, we add another one. Keep doing this until we get the first number with n digits

    fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2])

    // console.log("I just pushed " + (fibonacciArray[i - 1] + fibonacciArray[i - 2]));
    i++;
  }

  console.log("The first Fibonacci number to have " + n + " digits is " + fibonacciArray[fibonacciArray.length - 1])
  console.log("Its index is: " + (fibonacciArray.length) + "\n")
  return (fibonacciArray.length);
}

digitFibonacci(3);
digitFibonacci(5);
digitFibonacci(10);
digitFibonacci(15);
digitFibonacci(20);

/**
Don't try to follow the title and attempt a 1000-digit number...
JavaScript starts returning scientific notation after some number of digits way below 1000.
The toString() method that we use here will never return the right value, and we will get an infinite loop.
*/
