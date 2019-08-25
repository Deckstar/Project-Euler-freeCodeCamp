/**
Accessed on 17 August 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-9-special-pythagorean-triplet/

----------------------------------------------------------------------------------------
Project Euler: Problem 9: Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
----------------------------------------------------------------------------------------
**/

function specialPythagoreanTriplet(n) {
 let sumOfabc = n;

 let a = 3;
 let b = 4;
 let c = 5;

 for (let a=1; a<1000; a++){
   for (let b=a+1; b<1000; b++){
     c = (a**2 + b**2)**0.5;

     if (a + b + c == n){
       return a*b*c
     }
   }
 }

 return false;
}

console.log(specialPythagoreanTriplet(1000));

/* A comment:

I confess that I found this solution online, instead of doing it myself. My hope was to be a bit more mathematical about this.
For instance, I wanted to incorporate some form of Euclid's method for finding "primitive" triplets, so that we could take this
algorithm way higher (e.g., up to billions).

This solution is clearly just a brute-force computer method. I wouldn't want to do this one by hand!

But oh well. I'll take what I can get.
**/
