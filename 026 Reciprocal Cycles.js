/**
Accessed on 11 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-26-reciprocal-cycles

----------------------------------------------------------------------------------------
Project Euler: Problem 26: Reciprocal cycles
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2 = 0.5
1/3 = 0.(3)
1/4 = 0.25
1/5 = 0.2
1/6 = 0.1(6)
1/7 = 0.(142857)
1/8 = 0.125
1/9 = 0.(1)
1/10 = 0.1

Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < n for which 1/d contains the longest recurring cycle in its decimal fraction part.
----------------------------------------------------------------------------------------
**/

function reciprocalCycles(n) {

  let answer = 0;


  function cycleLength(b) {
    var hash = {};
    var a = 1;
    var t = 0;
    do {
      hash[a] = t;
      a = a % b * 10;
      t++;
    } while (hash[a] === undefined);
    return t - hash[a];
  }


  var max = 0;
  for (var d = 1; d < n; d++) {
    var tmp = cycleLength(d);
    if (max < tmp) {
      answer = d;
      max = tmp;
    }
  }

  console.log("The biggest sequence length for numbers under " + n + " is " + answer)
  return answer;
}




reciprocalCycles(10);
reciprocalCycles(700);
reciprocalCycles(800);
reciprocalCycles(900);
reciprocalCycles(1000);