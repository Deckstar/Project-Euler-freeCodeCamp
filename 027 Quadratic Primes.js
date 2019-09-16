/**
Accessed on 14 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-27-quadratic-primes

----------------------------------------------------------------------------------------
Project Euler: Problem 27: Quadratic primes
Euler discovered the remarkable quadratic formula:

n^2 + n + 41

It turns out that the formula will produce 40 primes for the consecutive integer values 0 <= n <= 39. However, when n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41^2 + 41 + 41 is clearly divisible by 41.

The incredible formula n^2 - 79n + 1601 was discovered, which produces 80 primes for the consecutive values 0 <= n <= 79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n^2 + an + b, where |a| < range and |b| <= range, where |n| is the modulus/absolute value of n, e.g. |11| = 11 and |-4| = 4

Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.
----------------------------------------------------------------------------------------
**/

/**
NOTE:

My solution here is heavily inspired (read: mostly copy-pasted) by this blog:
https://www.xarg.org/puzzle/project-euler/problem-27/

Which is, as always, a wonderful source of solutions for these problems!
*/


// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------- BASIC SOLUTION -------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
/**
function quadraticPrimes(range) {

  // First, we need a function for checking if a number is prime or not
  function isItPrime(n) {
    if (n < 2)
      return false;
    if (n % 2 === 0)
      return n === 2;
    if (n % 3 === 0)
      return n === 3;

    var h = Math.floor(1 + Math.sqrt(n));
    var i = 5;

    while (i <= h) {
      if (n % i === 0)
        return false;
      if (n % (i + 2) === 0)
        return false;
      i+= 6;
    }
    return true;
  }

  // Next, we need a function that counts consecutive primes using the factors a and b
  function countConsecutivePrimes(a, b) {

    // keep doing this operation until n^2 + an + b returns a non-prime
    for (var n = 0; ; n++) {
      var resultOfQuadratic = n**2 + a * n + b;
      if (!isItPrime(resultOfQuadratic)) { // once the quadratic returns a non-prime number, we return and the for-loop breaks
        return n; // return how many consecutive primes we got with these coefficients
      }
    }
  }

  // Finally, we try to find the maximum |a| and |b|
  var maxC = 0;
  var maxAB = 0;
  var maxA = 0;
  var maxB = 0;

  for (var a = (-1)*Math.abs(range - 1); a <= Math.abs(range - 1); a++) { // for a, we do not include the range itself, so we have to do -1 on the range
    for (var b = -range; b <= range; b++) { // for b, we do include |range|

      var c = countConsecutivePrimes(a, b); // count how many consecutive primes we get with coefficients a and b
      if (c > maxC) { // we're starting with c=0 consecutives; if we get more, this becomes the new maximum; the max coefficient also increases
        maxC = c;
        maxAB = a * b;
        maxA = a;
        maxB = b;
      }
    }
  }
  console.log("The maximum product of coefficients\n(with a and b in the range of " + range + ") is \n\n\t" + maxAB + "\n\n(using coefficients a = " + maxA + " and b = " + maxB + ",\n\which give primes up to n = "+maxC+")\n\n")
  return maxAB;
}
*/

// ------------------------------------------------------------------------------------------------------------
// ----- More efficient solution by using a list of primes up to the range (necessary to pass FCC tests) ------
// ------------------------------------------------------------------------------------------------------------
function quadraticPrimes(range) {

  var primes = [
     2,   3,   5,   7,  11,  13,  17,  19,  23,  29,  31,  37,  41,
    43,  47,  53,  59,  61,  67,  71,  73,  79,  83,  89,  97, 101,
   103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167,
   173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239,
   241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313,
   317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397,
   401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467,
   479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569,
   571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643,
   647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733,
   739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823,
   827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
   919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];


  // First, we need a function for checking if a number is prime or not
  function isItPrime(n) {
    if (n < 2)
      return false;
    if (n % 2 === 0)
      return n === 2;
    if (n % 3 === 0)
      return n === 3;

    var h = Math.floor(1 + Math.sqrt(n));
    var i = 5;

    while (i <= h) {
      if (n % i === 0)
        return false;
      if (n % (i + 2) === 0)
        return false;
      i+= 6;
    }
    return true;
  }

  // Next, we need a function that counts consecutive primes using the factors a and b
  function countConsecutivePrimes(a, b) {

    // keep doing this operation until n^2 + an + b returns a non-prime
    for (var n = 0; ; n++) {
      var resultOfQuadratic = n**2 + a * n + b;
      if (!isItPrime(resultOfQuadratic)) { // once the quadratic returns a non-prime number, we return and the for-loop breaks
        return n; // return how many consecutive primes we got with these coefficients
      }
    }
  }

  // Finally, we try to find the maximum |a| and |b|
  var maxC = 0;
  var maxAB = 0;
  var maxA = 0;
  var maxB = 0;

  for (var a = (-1)*Math.abs(range - 1); a <= Math.abs(range - 1); a+=2) { // for a, we do not include the range itself, so we have to do -1 on the range
    // for (var b = -range; b <= range; b++) { // for b, we do include |range|
    for (var i = 0; primes[i]<range; i++) {
      var b = primes[i]

      // var c = countConsecutivePrimes(a, b); // count how many consecutive primes we get with coefficients a and b
      var c = countConsecutivePrimes(a - (i == 0 ? 1 : 0), b);
      if (c > maxC) { // we're starting with c=0 consecutives; if we get more, this becomes the new maximum; the max coefficient also increases
        maxC = c;
        maxAB = a * b;
        maxA = a;
        maxB = b;
      }
    }
  }
  console.log("The maximum product of coefficients\n(with a and b in the range of " + range + ") is \n\n\t" + maxAB + "\n\n(using coefficients a = " + maxA + " and b = " + maxB + ",\n\which give primes up to n = "+maxC+")\n\n")
  return maxAB;
}


quadraticPrimes(200);
quadraticPrimes(500);
quadraticPrimes(800);
quadraticPrimes(1000);
