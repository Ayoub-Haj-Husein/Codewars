/* 
Count how often sign changes in array.
result
number from 0 to ... . Empty array returns 0
example
const arr = [1, -3, -4, 0, 5];
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
*/

const arr = [1, -3, -4, 0, 5];

// My Solution
const catchSignChange = (arr) => {
  let count = 0;
  let catchSignChange = arr.map((element, index, array) =>
    (element >= 0 && array[index + 1] < 0) ||
    (element < 0 && array[index + 1] >= 0)
      ? count++
      : count
  );
  return count;
};
console.log(catchSignChange(arr));
