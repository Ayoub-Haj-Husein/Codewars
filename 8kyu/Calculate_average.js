/*

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

// My Solution

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  } else {
    const sum = array.reduce((sum, n) => {
      return sum + n;
    }, 0);
    return sum / array.length;
  }
}

// Other Solution

function find_average(arr) {
  return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}