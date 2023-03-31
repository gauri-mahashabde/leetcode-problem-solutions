//https://leetcode.com/problems/decompress-run-length-encoded-list/

//solution 1

const decompressRLElist = function (nums) {
  let result = [];
  let i = 0,
    j = 1;

  while (j < nums.length) {
    let freq = nums[i];
    for (let count = 0; count < freq; ++count) {
      result.push(nums[j]);
    }
    i += 2;
    j += 2;
  }

  return result;
};
