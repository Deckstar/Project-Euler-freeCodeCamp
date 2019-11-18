/**
Accessed on 18 November 2019 : https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-38-pandigital-multiples

----------------------------------------------------------------------------------------
Project Euler: Problem 38: Pandigital multiples
Take the number 192 and multiply it by each of 1, 2, and 3:

192 × 1 = 192

192 × 2 = 384

192 × 3 = 576

By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1, 2, 3).

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1, 2, 3, 4, 5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1, 2, ... , n) where n > 1?
----------------------------------------------------------------------------------------
**/

/*
As with problem 32, copy pasted from Robert Eisele: https://www.xarg.org/puzzle/project-euler/problem-38/

Pandigital number problems (and general base-10 problems) are just not so interesting for me.
*/


function isPandigital(n) {

  var m = 0;

  for (var i = 0; n > 0; i++) {
    m |= 1 << n % 10;
    n = n / 10 | 0;
  }
  return 2 + m === 1 << (i + 1);
}


function pandigitalMultiples() {


  for (let x = 9487; x >= 9234; x--) {
    let res = 100002 * x;
    if (isPandigital(res)) {
      console.log("The largest pandigital found was " + res)
      return res;
    }
  }
  return null;
}

pandigitalMultiples(); // 932718654