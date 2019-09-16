/**
Accessed on 16 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-28-number-spiral-diagonals

----------------------------------------------------------------------------------------
Project Euler: Problem 28: Number spiral diagonals
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25

20  7  8  9 10

19  6  1  2 11

18  5  4  3 12

17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a n by n spiral formed in the same way?
----------------------------------------------------------------------------------------
**/

function spiralDiagonals(n) {

  let spiralNumbers = [1]; // Start with a spiral number of 1;

  // We're going to keep appending spiral numbers to the list until we get a number bigger than n
  for (let i = 1; i <= n; i++) {
    spiralNumbers.push(spiralNumbers[spiralNumbers.length - 1] + i) // Each time, we push i two times

    if (i != n) { // here, we simply avoid pushing a second spiral number if we already got the final square size
      spiralNumbers.push(spiralNumbers[spiralNumbers.length - 1] + i)
    }
  }
  // console.log(spiralNumbers)

  let sumSpiralDiagonals = 0;

  // Easy part: sum of top-left to bottom-right
  for (let i = 0; i < spiralNumbers.length; i += 2) {
    sumSpiralDiagonals += spiralNumbers[i] // just add every other spiral number
    // console.log("added " + spiralNumbers[i])
  }

  // Tricky part: sum of bottom-left to 1
  for (let i = 3; i < spiralNumbers.length; i += 4) { // start at spiralNumbers[3] = 5, then add every fourth number (17, 37 etc.)
    sumSpiralDiagonals += spiralNumbers[i]
    // console.log("added " + spiralNumbers[i])
  }

  // Extra tricky part: sum of 1 to top-right
  for (let i = 5; i < spiralNumbers.length; i += 4) { // start at spiralNumbers[5] = 10, take off one, then do the same for every fourth number (26, 50 etc.)
    sumSpiralDiagonals += spiralNumbers[i] - 1 // NOTICE: we're taking off minus 1 each time
    // console.log("added " + spiralNumbers[i])
  }

  console.log("The final total of diagonals for a spiral \nsquare with sides of length " + n + " is \n\t" + sumSpiralDiagonals + "\n")
  return sumSpiralDiagonals;
}

spiralDiagonals(5);
spiralDiagonals(101);
spiralDiagonals(303);
spiralDiagonals(505);
spiralDiagonals(1001);
spiralDiagonals(10000001);


/**
          NOTES:

- First, notice that we are always making two jumps of n-length before turning: first a jump of 1 for 1 > 2 > 3; then a jump of 2 for 3 > 5 > 7; then 7 > 10 > 13; then 13 > 17 > 21; and so on.
    -> What would follow? Well, at n=5: 21 > 26 > 31; then at n=6: 31 > 37 > 43.
    -> Let us call these i's "spiral numbers"
- Second, notice that the top-left to bottom-right numbers are always every other number in this sequence: 1, 3, 7, 13, 21, 31, 43 etc.
- Third, notice that the numbers going from 1 to the bottom left are in the sequence: 5, 17, 37 etc. However, the numbers going UP from 1 are not: 9, 25, 49 etc.
- Next, notice that the last diagonal is always a spiral number minus one:
    -> 9 is 10-1; 25 is 26-1; 49 is 50-1; etc.

    Here's a bigger square to help visualize what's going on:

    43 44 45 46 47 48 49 50

    42 21 22 23 24 25 26

    41 20  7  8  9 10 27

    40 19  6  1  2 11 28

    39 18  5  4  3 12 29

    38 17 16 15 14 13 30

    37 36 35 34 33 32 31

*/