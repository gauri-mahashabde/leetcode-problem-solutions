//https://leetcode.com/problems/build-array-from-permutation/

//solution 1

const buildArray = function (nums) {
  return nums.map((a) => nums[a]);
};

//solution 2

const buildArray1 = function (nums) {
  arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[nums[i]]);
  }
  return arr;
};
