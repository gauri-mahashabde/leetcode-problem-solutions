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

//solution 2
var countKDifference = function(nums, k) {
let map={} 
	for(let i of nums){
		map[i]?map[i]++:map[i]=1
	}
	let count =0; 
	for(let i=0;i<nums.length;i++){
		if(map[nums[i]-k]) count +=map[nums[i]-k]
	}
	return count;
}