/**
Accessed on 4 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-20-factorial-digit-sum

----------------------------------------------------------------------------------------
Project Euler: Problem 20: Factorial digit sum
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits n!
----------------------------------------------------------------------------------------
**/

function sumFactorialDigits(n) {

  /**
  ------------------------------------------------------------------------------------
  These two functions were copied from this Medium article on how to make big factorial numbers in JavaScript:

  https://medium.com/@nitinpatel_20236/javascript-adding-extremely-large-numbers-and-extra-long-factorials-229b6055cb1a
  ------------------------------------------------------------------------------------
  */

  function add(str1, str2) {

    let sum = ""; // our result will be stored in a string.

    // we'll need these in the program many times.
    let str1Length = str1.length;
    let str2Length = str2.length;

    // if s2 is longer than s1, swap them.
    if (str2Length > str1Length) {
      let temp = str2;
      str2 = str1;
      str1 = temp;
    }

    let carry = 0; // number that is carried to next decimal place, initially zero.
    let a;
    let b;
    let temp;
    let digitSum;
    for (let i = 0; i < str1.length; i++) {
      a = parseInt(str1.charAt(str1.length - 1 - i)); // get ith digit of str1 from right, we store it in a
      b = parseInt(str2.charAt(str2.length - 1 - i)); // get ith digit of str2 from right, we store it in b
      b = (b) ? b : 0; // make sure b is a number, (this is useful in case, str2 is shorter than str1
      temp = (carry + a + b).toString(); // add a and b along with carry, store it in a temp string.
      digitSum = temp.charAt(temp.length - 1); //
      carry = parseInt(temp.substr(0, temp.length - 1)); // split the string into carry and digitSum ( least significant digit of abSum.
      carry = (carry) ? carry : 0; // if carry is not number, make it zero.

      sum = (i === str1.length - 1) ? temp + sum : digitSum + sum; // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.

    }

    return sum; // return sum

  }

  function extraLongFactorials(n) {
    let fact = 1;

    for (let i = 2; i <= n; i++) {

      if (Number.isSafeInteger(fact * i)) {
        fact = fact * i;
      } else {
        //fact = fact + fact + .. i times
        let factxi = "0"; // this is (fact * i) for us.
        for (let j = 0; j < i; j++) {
          factxi = add(factxi, fact.toString());
        }
        fact = factxi; // update value of fact before continuing the loop.
      }
    }

    return fact;
  }

  /**
  ------------------------------------------------------------------------------------
  The rest is easy: just split the factorial into an array of digits, then sum them up.
  ------------------------------------------------------------------------------------
  */

  let bigFactorialNumber = extraLongFactorials(n); // we're going to work with this big number
  console.log(n + " factorial is " + bigFactorialNumber + "\n\t(Returned with the type " + typeof(bigFactorialNumber) + ")") // remember, for big factorials, we are returning the number as a string

  let factorialArray = bigFactorialNumber.toString().split("") // we're converting the factorial to a string, then creating an array of digits

  let sumOfDigits = factorialArray.reduce((total, number) => parseInt(total) + parseInt(number)) // here we sum up the digits, being careful to parse them as integers

  console.log("\n\nThe sum of digits in " + n + "! is \t" + sumOfDigits + "\n\n");
  return sumOfDigits;

}

sumFactorialDigits(5)
sumFactorialDigits(10)
sumFactorialDigits(25)
sumFactorialDigits(50)
sumFactorialDigits(75)
sumFactorialDigits(100)
