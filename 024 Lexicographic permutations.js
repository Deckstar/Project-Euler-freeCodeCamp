/**
Accessed on 11 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-24-lexicographic-permutations/

----------------------------------------------------------------------------------------
Project Euler: Problem 24: Lexicographic permutations
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
----------------------------------------------------------------------------------------
**/

function lexicographicPermutations(n, digitsLength = 9) { // default digits length is 9, as per exercise

  var integerArray = Array.from(Array(digitsLength + 1).keys()) // create a new array of 0, 1, 2 ... up to digitsLength

  // First make an array of factorial numbers up to (digitsLength + 1) - this is our number of permutations for the digits
  let factorialArray = [1];
  for (let i = 1; i <= digitsLength + 1; i++) {
    factorialArray.push(i * factorialArray[i - 1])
  }
  // console.log("The number of permutations of " + integerArray + " is " + factorialArray[digitsLength + 1] + "\n\t and the factorial array is " + factorialArray + "\n")

  let lexicographicPermutation = []
  let startingSize = n

  for (let i = digitsLength; i >= 0; i--) {

    let divisor = Math.floor(startingSize / factorialArray[i])
    // console.log("The divisor of " + startingSize + " / " + factorialArray[i] + " is " + divisor + ", \n\tso we push integerArray[" + divisor + "] which is " + integerArray[divisor])

    lexicographicPermutation.push(integerArray[divisor])
    integerArray = integerArray.filter(num => num != integerArray[divisor])
    // console.log("\t\tOur lexicographicPermutation so far is " + lexicographicPermutation + " and we have the digits [" + integerArray + "] leftover to add")

    startingSize -= divisor * factorialArray[i]
  }

  let lexicographicSequence = parseInt(lexicographicPermutation.join('')) // join the array into one big string, then parse it as a number

  console.log("For digits up to " + digitsLength + ",\n\t the lexicographic sequence #" + n + " is " + lexicographicSequence+"\n")
  return lexicographicSequence;
}




lexicographicPermutations(2, 2);
lexicographicPermutations(699999);
lexicographicPermutations(899999);
lexicographicPermutations(900000);
lexicographicPermutations(999999);
