/**
Accessed on 17 December 2019 : https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-39-integer-right-triangles

----------------------------------------------------------------------------------------
Project Euler: Problem 39: Integer right triangles
If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ n, is the number of solutions maximised?
----------------------------------------------------------------------------------------
**/

/**
 * Inspired by https://www.mathblog.dk/project-euler-39-perimeter-right-angle-triangle/
 *
 * Given the problem, we know that we are dealing with integer sides that sum up to some perimeter P:
 *
 * (1) a^2 + b^2 = c^2
 *
 * (2) a + b + c = P
 *
 * Let's let c = P - a - b and combine the two equations:
 *
 * a^2 + b^2 = (P-a-b)^2
 *
 * which, if written out, gives P^2 + a^2 + b^2 - 2Pa - 2Pb + 2ab.
 * We can continue the simplification to get b in terms of P and a
 *
 * b = (P^2 - 2Pa)/(2P - 2a)
 *
 * So for every combination of P and a, if b is an integer, then we've got a Pythagorean triangle with some given perimeter.
 *
 * What remains is to check every perimeter up to our maximum allowed P, and to see how many integer solutions it has for b.
 */

function intRightTriangles(n) {
  let result = 0;
  let resultSolutions = 0;

  for (let P = 2; P <= n; P += 2) {
    // The perimeter of a Pythagorean triangle must always be even, so we can iterate by 2
    // We let the perimeter get up to n, which is our limit.
    let numberOfSolutions = 0; // we start with zero solutions for this perimeter

    for (let a = 3; a < P / 3; a++) {
      // we start with a = 3, since that's the smallest possible Pythagorean triple (3,4,5); a is supposed to be the smallest side, so we set the upper bound to one third of the perimeter.
      if ((P * (P - 2 * a)) % (2 * (P - a)) == 0) {
        numberOfSolutions++;
      }
    }

    if (numberOfSolutions > resultSolutions) {
      resultSolutions = numberOfSolutions;
      result = P;
    }
  }

  console.log(
    `Up to P=${n}, the perimeter with the most triangles is ${result}, which has ${resultSolutions} solutions.`
  );
  return result;
}

intRightTriangles(500); // 420.
intRightTriangles(800); // 420.
intRightTriangles(900); // 840.
intRightTriangles(1000); // 840.
