//https://leetcode.com/problems/largest-local-values-in-a-matrix/

//solution 1
const largestLocal = function (grid) {
  let result = [];

  for (let i = 1; i < grid.length - 1; i++) {
    let resultRow = [];
    for (let j = 1; j < grid[i].length - 1; j++) {
      //Finds the largest interger of the nine elements within each 3 x 3 sub-grid
      let max = Math.max(
        grid[i - 1][j - 1],
        grid[i - 1][j],
        grid[i - 1][j + 1],

        grid[i][j - 1],
        grid[i][j],
        grid[i][j + 1],

        grid[i + 1][j - 1],
        grid[i + 1][j],
        grid[i + 1][j + 1]
      );
      resultRow.push(max);
    }
    result.push(resultRow);
  }

  return result;
};
