/**
Accessed on 17 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-32-pandigital-products/

----------------------------------------------------------------------------------------
Project Euler: Problem 32: Pandigital products
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
----------------------------------------------------------------------------------------
**/


// I confess that I didn't know how to do this problem... and it didn't sound very interesting to me either, so I didn't bother.
//
// I copy-pasted the solution from the xarg.org blog:
// https://www.xarg.org/puzzle/project-euler/problem-32/
//
// I also confess that I couldn't really follow the logic of this solution.
// (I've never been very good at mathematics - but hey, at least I'm trying? 😅).
// It uses bitwise operators and seems very clever.



function pandigitalProducts() {

  function isPandigital(n) {

    var m = 0;

    for (var i = 0; n > 0; i++) {
      m |= 1 << n % 10;
      n = n / 10 | 0;
    }
    return 2 + m === 1 << (i + 1);
  }

  var products = new Set;

  function sumRange(m0, mn, n0, nn) {
    for (var m = m0; m <= mn; m++) {
      for (var n = n0; n <= nn; n++) {

        var x = m * n;
        var p = Number("" + m + n + x);

        if (isPandigital(p)) {
          products.add(x);
        }
      }
    }
  }

  sumRange(1, 9, 1234, 9876);
  sumRange(12, 98, 123, 987);

  let answer = [...products].reduce((a, b) => a + b, 0)
  console.log("The sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital is\n\n\t" + answer + "\n");
  return answer;
}

pandigitalProducts();