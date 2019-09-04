/**
Accessed on 3 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-18-maximum-path-sum-i

----------------------------------------------------------------------------------------
Project Euler: Problem 18: Maximum path sum I
By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)
----------------------------------------------------------------------------------------
**/

/**       COMMENTS
This problem is quite clever, but the solution is easy to find online. This one is taken from https://www.geeksforgeeks.org/maximum-path-sum-triangle/

Check this out: once we have our triangle, consider just the bottom two rows:

   3
  7 4
 2 4 6
8 5 9 3

Now we will play a game. For every number in the top row, we will look at the two numbers under it. Then, we will choose the bigger of the two, and ad it to the top one.

For instance, let's look at the first number: 2. The two numbers under it are 8 and 5. 8 is bigger, so we do 2 + 8 and get 10. The next number, 4, has 5 and 9 under it. 9 is bigger, so we do 4 + 9 and get 13.

We continue playing this game for every row. Eventually, we will only have one number left. That number is the length of the path with the maximum total.

Step 1 :
3 0 0 0
7 4 0 0
2 4 6 0
8 5 9 3

Step 2 :
3  0  0  0
7  4  0  0
10 13 15 0

Step 3 :
3  0  0  0
20 19 0  0

Step 4:
23 0 0 0

output : 23

Now let's try the exercise!
*/

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

const numTriangle = [[75],
                    [95, 64],
                    [17, 47, 82],
                    [18, 35, 87, 10],
                    [20,  4, 82, 47, 65],
                    [19,  1, 23, 75,  3, 34],
                    [88,  2, 77, 73,  7, 63, 67],
                    [99, 65,  4, 28,  6, 16, 70, 92],
                    [41, 41, 26, 56, 83, 40, 80, 70, 33],
                    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
                    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
                    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
                    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
                    [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
                    [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]]


function maximumPathSumI(triangle) {

  let tempTriangle = triangle

  for (let i = triangle.length - 2; i>=0; i--){ // descending order from the final row; starting at length minus TWO (because triange[length - 1] will be the last row, but we are starting from the second-last one)
    for (let j=0; j < triangle[i].length; j++){ // here, however, we can move in ascending order - we are going from left to right
      if (tempTriangle[i+1][j] > tempTriangle[i+1][j+1]) { // which one is bigger, the left or the right number underneath?
        tempTriangle[i][j] += tempTriangle[i+1][j]
      }
      else {
        tempTriangle[i][j] += tempTriangle[i+1][j+1]
      }
    }

  }

  console.log("The length of the maximum path is " +tempTriangle[0][0]);
  return tempTriangle[0][0];
}



maximumPathSumI(testTriangle);
maximumPathSumI(numTriangle);
