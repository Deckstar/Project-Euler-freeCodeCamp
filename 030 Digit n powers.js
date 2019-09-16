/**
Accessed on 16 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-30-digit-n-powers

----------------------------------------------------------------------------------------
Project Euler: Problem 30: Digit n powers
Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 1^4 + 6^4 + 3^4 + 4^4

8208 = 8^4 + 2^4 + 0^4 + 8^4

9474 = 9^4 + 4^4 + 7^4 + 4^4

As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of n powers of their digits.
----------------------------------------------------------------------------------------
**/

/**
----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------
                                  NOTES

Apparently, this is supposed to be solved by a brute-force solution. In this case,
we can discuss an idea in computer science known as the "halting problem".

Some calculations never give an answer (e.g., if I asked the computer to break a while-loop
when it encounters -1, but then I ask it to start with +1 and add one each time, it will never stop.)

Other calculations DO eventually give an answer, but it might take a hell of a long time.

So here's the halting problem: if we don't know IN ADVANCE, meaning BEFORE we run the calculation,
whether we will ever get an answer, then how long should we let the program run before we give up
and decide that probably, no answer exists?

That's all nice and theoretical. Here's how it relates to our problem: how high should we go before
we decide that no more numbers can be written as the sum of their digits, each raised to the power of n?

Well, apparently, according to the Internet, 6 * 9^n should be enough...

Here goes nothing...
*/

function digitnPowers(n) {

  let powerNumbers = [];

  for (let i = 2 ** n; i <= 6 * 9 ** n; i++) {
    let digits_AsList = i.toString().split('');

    let sum_Integers_RaisedToN = 0
    for (let j = 0; j < digits_AsList.length; j++) { // sum up the digits raised to n
      sum_Integers_RaisedToN += parseInt(digits_AsList[j]) ** n
    }

    if (sum_Integers_RaisedToN == i) { // if the power numbers array doesn't include this sum, add it in
      // for (let j = 0; j < digits_AsList.length; j++) {
      //   console.log(digits_AsList[j] + "^" + n + " = " + (parseInt(digits_AsList[j]) ** n))
      // }
      // console.log("Got a sum correct sum for " + i + "\n")
      powerNumbers.push(sum_Integers_RaisedToN)
    }
  }

  let answer = 0
  if (powerNumbers.length != 0) {
    answer = powerNumbers.reduce((total, num) => parseInt(total) + parseInt(num))
  }
  console.log("For n=" + n + ", we get the list: " + powerNumbers + "\nthe sum of which gives:\n\n\t" + answer + "\n")
  return answer;
}

digitnPowers(2); // 0
digitnPowers(3); // 1301
digitnPowers(4); // 19316
digitnPowers(5); // 443839