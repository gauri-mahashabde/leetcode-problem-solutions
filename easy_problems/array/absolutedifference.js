//https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

//solution 1
var countKDifference = function(nums, k) {
    let finalArr = []
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            Math.abs(nums[i]-nums[j]) === k && finalArr.push({i,j})
        }
    }
    return finalArr.length
};