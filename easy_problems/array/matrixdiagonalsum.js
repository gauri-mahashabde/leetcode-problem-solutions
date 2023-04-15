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
