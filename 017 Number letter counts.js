/**
Accessed on 3 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-17-number-letter-counts/

----------------------------------------------------------------------------------------
Project Euler: Problem 17: Number letter counts
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
----------------------------------------------------------------------------------------
**/
function numberLetterCounts(limit) {

  // First, we will need two big arrays of words, so we could calculate their lengths
  let ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  // Next, we need a function that returns a number as a word
  function to_english(n) {
    if (n < 20) { // from 0 to 19 (in English, the teens have their own words, unlike "twenty-one" and "forty-two" etc.)
      return ONES[n];
    }
    else if (n < 100) { // from 20 to 99
      return String(TENS[Math.floor(n / 10)] + ((n % 10 != 0) ? ONES[n % 10] : ""))
    }
    else if (n < 1000) { // from 100 to 999
      return ONES[Math.floor(n / 100)] + "hundred" + ((n % 100 != 0) ? ("and" + to_english(n % 100)) : "") // We add an and after hundred
    }
    else if (n < 1000000) { // from 1,000 to 999,999
      return to_english(Math.floor(n / 1000)) + "thousand" + ((n % 1000 != 0) ? to_english(n % 1000) : "")
    }
    else {
      console.log("Range is too high.")
      return "fail"
    }
  }

  // Thirdly, we can begin a for loop that calculates the letter-length of every number, then adds it to the sum for every word up to the limit
  let ans = 0;

  for (let i = 1; i <= limit; i++) { // We start i with one, NOT zero ;)
    ans = ans + to_english(i).length;
  }

  // Finally, we return our answer
  console.log("If you summed up the number of letters in every number up to " + limit + ",\nthe sum would be:\t\t" + ans + "\n");
  return ans;
}

numberLetterCounts(5);
numberLetterCounts(150);
numberLetterCounts(1000);
