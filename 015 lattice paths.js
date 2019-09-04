/**
Accessed on 27 August 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-15-lattice-paths/

----------------------------------------------------------------------------------------
Project Euler: Problem 15: Lattice paths
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner

How many such routes are there through a given gridSize?

----------------------------------------------------------------------------------------
**/


/**
This is a wonderful combinatorics question! (Wonderful, of course, because it's very simple and easy to program ;p )

After a bit of short digging on Wikipedia, I found this article: https://en.wikipedia.org/wiki/Lattice_path#Counting_lattice_paths
The part we are interested in is this:

"The number of NE lattice paths from (0,0) to (a,b) counts the number of combinations of a objects out of a set of a+b objects."

The combinatorial formula, as we might remember from high school, is: (n,k) = n!/(k!(n-k)!)

Let us input the following parameters:
k = gridSize
n = 2 * gridSize

This gives (2n)! / ((2n - n)!n!), which just simplifies to (2n)! / (n!)^2

That should give us the correct result for every single grid size! ;)
 */

function latticePaths(gridSize) {

  function sFact(num) { // this calculates the factorial
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
  }


  let numberOfPaths = sFact(2 * gridSize) / (sFact(gridSize))**2

  console.log("The number of paths in a " + gridSize + "x" + gridSize + " grid is " + numberOfPaths)
  return numberOfPaths;
}

latticePaths(4);
latticePaths(9);
latticePaths(20);
