/**
Accessed on 26 August 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-14-longest-collatz-sequence

----------------------------------------------------------------------------------------
Project Euler: Problem 14: Longest Collatz sequence
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)

n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
----------------------------------------------------------------------------------------
**/

function longestCollatzSequence(limit) {

  let startingNumber = 1;
  let currentLongestChain = 0;
  let currentNumberWithLongestChain = 0;

  while (startingNumber < limit) { // we're starting the Collatz sequence at 1 and going up to the limit number

    let currentNumber = startingNumber;
    let countOfTerms = 0;

    while (currentNumber != 1){

      if(currentNumber%2 == 0){ // if the startingNumber is even
        currentNumber = currentNumber/2;
        countOfTerms = countOfTerms + 1;
      }
      else if(currentNumber%2 != 0) { // if the startingNumber is odd
        currentNumber = 3*currentNumber + 1;
        countOfTerms = countOfTerms + 1;
      }
    }

    if (countOfTerms > currentLongestChain){
      // console.log("We found a long chain for number " + startingNumber + " that was " + countOfTerms + " terms long.")
      currentLongestChain = countOfTerms;
      currentNumberWithLongestChain = startingNumber;
    }
    startingNumber++;
  }

  console.log("In the end, for every number up to " + limit + ",\n\tthe number with the longest chain was " + currentNumberWithLongestChain + ",\n\t\t\twith a chain of " + currentLongestChain + " numbers.\n")
  return currentNumberWithLongestChain;
}

// longestCollatzSequence(14)
// longestCollatzSequence(5847)
// longestCollatzSequence(46500)
// longestCollatzSequence(54512)
longestCollatzSequence(100000000);

/**
--------------------------------------------------------------------------------
This code is great, but freeCodeCamp limits us to only 267 steps in the chain.
The last three numbers in the challenge have chains of 323, 339 and 524, respectively.

Clearly, we need to optimize our code somewhat. But how?
--------------------------------------------------------------------------------
*/
