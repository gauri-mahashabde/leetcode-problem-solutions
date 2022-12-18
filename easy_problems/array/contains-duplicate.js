//https://leetcode.com/problems/contains-duplicate/

//Solution 1

var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true
            }

        }

    }
    return false
};

//solution 2
const containsDuplicate = (nums) => {
    const hashset = new Set();
    for (let x = 0; x < nums.length; x++) {
        if (hashset.has(nums[x])) {
            return true
        }
        hashset.add(nums[x])
    }
    return false
}

//solution 3
const containsDuplicate = (nums, map = {}, l = 0, r = nums.length - 1) => {

    while (l < r) {
        if (nums[l] == nums[r]) return true;
        if (map[nums[l]] != undefined || map[nums[r]] != undefined) {
            return true;
        }
        map[nums[l]] = 1;
        map[nums[r]] = 1;
        l++;
        r--;
    }
    if (map[nums[l]] != undefined) return true

    return false;
};

