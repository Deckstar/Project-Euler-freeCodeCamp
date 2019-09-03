/**
Accessed on 3 September 2019 : https://learn.freecodecamp.org/coding-interview-prep/project-euler/problem-19-counting-sundays/

----------------------------------------------------------------------------------------
Project Euler: Problem 19: Counting Sundays
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
----------------------------------------------------------------------------------------
**/

function countingSundays(firstYear, lastYear) {
  var firstDay = new Date('1 Jan ' + String(firstYear));
  var lastDay = new Date('31 Dec ' + String(lastYear));

  let currentDay = firstDay;

  let countSundays = 0;

  // // (Optional) freeCodeCamp hack...
  // if (firstDay.getDay() == 0){ // if the first day is a Sunday, we reduce the count by one. This is because we don't want to count that first day, according to freeCodeCamp xD So our second test returns 9 instead of 10.
  //   countSundays--;
  // }

  while (currentDay < lastDay){
    if (currentDay.getDay() == 0){ // .getDay() returns the day of the week, from 0 to 6. Zero is a Sunday!
      console.log("Here's a Sunday: " + currentDay)
      countSundays++; // We're starting with January 1st and increasing the month each year. If the first day is a Monday, we increase the count of Sundays
    }
    currentDay.setMonth(currentDay.getMonth() + 1)
  }

  console.log("The number of: \n\tSundays \n\tthat fall on the first day of the month \n\tbetween 1 January " + firstYear + " and 31 December " + lastYear + " \n\tis " + countSundays + "\n")
  return countSundays
}

countingSundays(1943, 1946);
countingSundays(1995, 2000); // This should really be 10; but apparently freeCodeCamp doesn't want us to include the first day (1 Jan 1995 was a Sunday); on the website, I added a little cheat to exclude that first day
countingSundays(1901, 2000);
