/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

Examples 

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

*/

// My Solution

function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10;
  }
  return n;
}

// other solution

noBoringZeros = (n) => +`${n}`.replace(/0+$/, "");
