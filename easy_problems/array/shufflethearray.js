//https://leetcode.com/problems/shuffle-the-array/

//solution 1
const shuffle = function (nums, n) {
  let res = [];

  for (let i = 0; i < nums.length / 2; i++) {
    res.push(nums[i], nums[i + n]);
  }

  return res;
};

//solution 2
const shuffle1 = function (nums, n) {
  const newArray = [];
  let position = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (position <= nums.length - 1) {
      newArray[position] = nums[i];
      newArray[position + 1] = nums[i + n];
      position = position + 2;
    }
  }
  return newArray;
};

//solution 3
const shuffle2 = function (nums, n) {
  let start = 0,
    mid = n;
  const arr = [];
  while (mid < nums.length) {
    arr.push(nums[start++]);
    arr.push(nums[mid++]);
  }
  return arr;
};
