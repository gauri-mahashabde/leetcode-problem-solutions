//https://leetcode.com/problems/matrix-diagonal-sum/

//solution 1
const diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    if (mat.length - 1 - i != i) {
      sum += mat[i][mat.length - 1 - i];
    }
  }
  return sum;
};

//solution 2
const diagonalSum1 = (mat) => {
  let sum = 0;
  let j = mat[0].length - 1;

  mat.forEach((row, i) => {
    if (i !== j - i) sum += row[j - i];
    sum += row[i];
  });

  return sum;
};
