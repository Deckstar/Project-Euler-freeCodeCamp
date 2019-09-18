/**
Accessed on 18 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-33-digit-cancelling-fractions

----------------------------------------------------------------------------------------
Project Euler: Problem 33: Digit cancelling fractions
The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
----------------------------------------------------------------------------------------
**/

function digitCancellingFractions() {

  /**
  Firstly, from the geniuses at Wolfram (http://mathworld.wolfram.com/AnomalousCancellation.html):

    "
    There are exactly four anomalous cancelling proper fractions having two-digit base-10 numerator and denominator:

    (16)/(64)	=	1/4

    (19)/(95)	=	1/5

    (26)/(65)	=	2/5

    (49)/(98)	=	4/8
    "

  Looks easy: just multiply the top and bottom of these fractions.
  */

  let numerators = [1, 1, 2, 4];
  let denominators = [4, 5, 5, 8];

  let numeratorProduct = numerators.reduce((a, b) => a * b);
  let denominatorProduct = denominators.reduce((a, b) => a * b);

  let lowestDenominator = denominatorProduct / numeratorProduct;

  console.log("The answer is " + lowestDenominator)
  return lowestDenominator;
}

digitCancellingFractions();