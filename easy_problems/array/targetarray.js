//https://leetcode.com/problems/create-target-array-in-the-given-order/

//solution 1
const createTargetArray = (nums, idx) => {
  let target = [];
  for (const i in nums) target.splice(idx[i], 0, nums[i]);
  return target;
};

//solution 2
const createTargetArray1 = function (nums, index) {
  let number = [];

  for (let i = 0; i < nums.length; i++) {
    if (number[index[i]] === undefined) {
      number[index[i]] = nums[index[i]];
      continue;
    }

    for (j = number.length; j > index[i]; j--) {
      number[j] = number[j - 1];
    }

    number[index[i]] = nums[i];
  }

  return number;
};
