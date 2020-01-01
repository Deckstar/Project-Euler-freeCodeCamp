/**
Accessed on 1 January 2020 : https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-45-triangular-pentagonal-and-hexagonal

----------------------------------------------------------------------------------------
Project Euler: Problem 45: Triangular, pentagonal, and hexagonal
Triangle, pentagonal, and hexagonal numbers are generated by the following formulae:

Triangle
Tn=n(n+1)/2
1, 3, 6, 10, 15, ...

Pentagonal
Pn=n(3n−1)/2
1, 5, 12, 22, 35, ...

Hexagonal
Hn=n(2n−1)
1, 6, 15, 28, 45, ...

It can be verified that T285 = P165 = H143 = 40755.

Find the next triangle number that is also pentagonal and hexagonal.


----------------------------------------------------------------------------------------
**/

/**
 * We can steal the isPentagonal function from the last problem (#44).
 * Then we can modify it to perform the same operation for triangle numbers and hexagonal numbers.
 * 
 * The brute-force solution — checking every consecutive integer — takes a little time (on my desktop it took 17.715 seconds in Visual Studio Code's terminal), but it works.
 */

function isPentagonal(num){
    // the inverse function of Pn is 1/6(1 +/- sqrt(24n + 1)). Since we're only considering positive n's, we can restrict our range to the positive range.
    let inversedNum = 1/6 * (1 + Math.sqrt(24 * num + 1))

    // if we perform our inverse pentagonal function on the number, do we get an integer? If yes, then it's pentagonal.
    let pentagonalness = inversedNum == parseInt(inversedNum)

    return pentagonalness
}

function isTriangular(num){
    // the inverse function of Tn is 1/2(-1 +/- sqrt(8n + 1)). Since we're only considering positive n's, we can restrict our range to the positive range.
    let inversedNum = 1/2 * (-1 + Math.sqrt(8 * num + 1))

    // if we perform our inverse triangular function on the number, do we get an integer? If yes, then it's triangular.
    let triangleness = inversedNum == parseInt(inversedNum)

    return triangleness
}

function isHexagonal(num){
    // the inverse function of Hn is 1/4(1 +/- sqrt(8n + 1)). Since we're only considering positive n's, we can restrict our range to the positive range.
    let inversedNum = 1/4 * (1 + Math.sqrt(8 * num + 1))

    // if we perform our inverse hexagonal function on the number, do we get an integer? If yes, then it's hexagonal.
    let hexagonalness = inversedNum == parseInt(inversedNum)

    return hexagonalness
}

function triPentaHexa(n) {
    
    // we're going to increment our hexagonals, since these grow the fastest.
    // first, let's find the index of the first hexagonal we should check. This will be the ceiling of our reverse hexagonal function.
    let firstHexagonal = Math.ceil(1/4 * (1 + Math.sqrt(8 * n + 1)));
    
    // next, we'll set our first index to that first hexagonal.
    let i = firstHexagonal;

    // let's set the limit to the 1 millionth hexagonal number
    while (i<1000000){

        // first let's calculate the i-th hexagonal, which we will also check for triangularity and pentagonality
        let ithHexagonal = i*(2*i - 1);

        // if it fits all the criteria, we're done;
        // note that checking hexagonality here is actually redundant, since the number is hexagonal by definition;
        if (isPentagonal(ithHexagonal) && isTriangular(ithHexagonal) && isHexagonal(ithHexagonal)){
            console.log(`The next tri-penta-hexa number after ${n} is ${ithHexagonal}, which is hexagonal #${i}.`)
            return ithHexagonal
        }
        i++;
    }

    return false;
  }
  
  triPentaHexa(40756); // 1533776805
  