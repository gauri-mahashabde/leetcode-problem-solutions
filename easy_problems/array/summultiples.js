//https://leetcode.com/problems/sum-multiples/

//solution 1

const sumOfMultiples = function (n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum = sum + i;
    }
  }

  return sum;
};

//solution 2
const sumOfMultiples1 = function (n) {
  var i = 1,
    sum = 0;
  while (i <= n) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum = sum + i;
    }
    i++;
  }
  return sum;
};

//solution 3
