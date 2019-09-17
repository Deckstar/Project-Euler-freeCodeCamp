/**
Accessed on 17 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-31-coin-sums

----------------------------------------------------------------------------------------
Project Euler: Problem 31: Coin sums
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).

It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

How many different ways can £(n) be made using any number of coins?
----------------------------------------------------------------------------------------
**/



// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------- BASIC SOLUTION -------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// This gets the answer in milliseconds, but isn't efficient enough according to freecodecamp.

//
// function coinSums(n) {
//
//   let coins = [200, 100, 50, 20, 10, 5, 2, 1]
//
//   let countOfWays = 0;
//
//   for (let twoHundred = 0; twoHundred <= n; twoHundred += 200) {
//     for (let hundred = 0; hundred <= n; hundred += 100) {
//       if (twoHundred + hundred > n) { // break the loop if we went too high
//         break
//       }
//       for (let fifty = 0; fifty <= n; fifty += 50) {
//         if (twoHundred + hundred + fifty > n) { // break the loop if we went too high
//           break
//         }
//         for (let twenty = 0; twenty <= n; twenty += 20) {
//           if (twoHundred + hundred + fifty + twenty > n) { // break the loop if we went too high
//             break
//           }
//           for (let ten = 0; ten <= n; ten += 10) {
//             if (twoHundred + hundred + fifty + twenty + ten > n) { // break the loop if we went too high
//               break
//             }
//             for (let five = 0; five <= n; five += 5) {
//               if (twoHundred + hundred + fifty + twenty + ten + five > n) { // break the loop if we went too high
//                 break
//               }
//               for (let two = 0; two <= n; two += 2) {
//                 if (twoHundred + hundred + fifty + twenty + ten + five + two > n) { // break the loop if we went too high
//                   break
//                 }
//                 for (let one = 0; one <= n; one++) {
//                   if (twoHundred + hundred + fifty + twenty + ten + five + two + one > n) { // break the loop if we went too high
//                     break
//                   }
//
//                   // Check if we can make £n with this combo
//                   if (twoHundred + hundred + fifty + twenty + ten + five + two + one == n) { // increase count if we get a good result
//                     // console.log("We can make £" + n/100 + " using £2: " + twoHundred + " £1: " + hundred + " 50p: " + fifty + " 20p: " + twenty + " 10p: " + ten + " 5p: " + five + " 2p: " + two + " 1p: " + one)
//                     countOfWays += 1;
//                   }
//
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//
//   if (n < 100) {
//     console.log("The number of ways to make " + n + "p out of British coins is " + countOfWays + "\n")
//   } else {
//     console.log("The number of ways to make £" + (n / 100) + " out of British coins is " + countOfWays + "\n")
//   }
//   return countOfWays;
// }
//
// coinSums(10); // 11
// coinSums(50); // 451
// coinSums(100); // 4563
// coinSums(150); // 21873
// coinSums(200); // 73682
// coinSums(1000); // 321335886 (found in about 75 seconds...)





// ------------------------------------------------------------------------------------------------------------
// ---------------------------------------- ADVANCED SOLUTION -------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// As always, taken from the xarg blog: https://www.xarg.org/puzzle/project-euler/problem-31/

function coinSums(target) {
  var coins = [1, 2, 5, 10, 20, 50, 100, 200];
  var table = new Uint32Array(target + 1); // this is a table of total pence up to the target - it will give us the number of ways to make every pound-value up to the target using only coins.
  table[0] = 1; // We start with zero - after all, there's only one way to make £0: using zero coins!
  for (var i = 0; i < coins.length; i++) { // for every coin i, count the number of ways to make the target value with this coin and the ones below it
    // console.log("\n\tUsing the " + coins[i] + " coin");
    for (var j = coins[i]; j <= target; j++) { // how many new ways does our new coin give us for every value up to the target?
      // console.log("table[" + j + "]=" + table[j] + ", table[" + j + " - coins[" + i + "] ]=" + table[j - coins[i]])
      table[j] += table[j - coins[i]]; // Before, we had only smaller coins - for the current target value (j) minus the size of our coin (coin[i]) - i.e. £(j - coin[i]) - how many ways could we make up that value using smaller coins? Add those on to the number of ways (target[j]) for the current value j
      // console.log("\t\t\t\t\t" + table) // This is, of course, confusing as hell, so let's see it in action!
    }
  }
  let countOfWays = table[target]; // finally, our answer is the final value in our table
  // console.log(table) // here you can see the number ways to make every value up to the target, starting with zero - so of course, up to some length, this final table will always look the same!

  // This is just a cosmetic console log
  if (target < 100) {
    console.log("The number of ways to make " + target + "p out of British coins is " + countOfWays + "\n")
  } else {
    console.log("The number of ways to make £" + (target / 100) + " out of British coins is " + countOfWays + "\n")
  }
  return countOfWays;
}

coinSums(10); // 11
coinSums(20); // 41
coinSums(50); // 451
coinSums(100); // 4563
coinSums(150); // 21873
coinSums(200); // 73682
coinSums(1000); // 321335886 (now found in milliseconds!)
coinSums(10000); // 1938503601
coinSums(100000); // 3440506865