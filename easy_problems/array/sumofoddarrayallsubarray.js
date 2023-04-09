//https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

//solution 1
const sumOddLengthSubarrays = function (arr) {
  let output = 0;

  for (let i = 1; i <= arr.length; i += 2) {
    for (let j = 0; j <= arr.length - i; j++) {
      for (let k = 0; k < i; k++) {
        output += arr[j + k];
      }
    }
  }

  return output;
};

//solution 2

var sumOddLengthSubarrays1 = function (arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    // helping in selecting the starting point

    for (let j = i; j < arr.length; j++) {
      // helping in selecting the endpoint point

      if ((i - j) % 2 == 0) {
        // so that it only count the subarrays which have odd length

        for (let k = i; k <= j; k++) {
          // looping from start point to end point and adding them
          count += arr[k];
        }
      }
    }
  }
  return count;
};
