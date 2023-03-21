//https://leetcode.com/problems/build-array-from-permutation/

//solution 1

const buildArray = function(nums) {
    return nums.map(a=>nums[a]);
};
