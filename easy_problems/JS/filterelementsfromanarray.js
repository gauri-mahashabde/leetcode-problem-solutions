//https://leetcode.com/problems/filter-elements-from-array/

//Solution 1

const filter = function (arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      res.push(arr[i]);
    }
  }
  return res;
};

//solution 2

const filter1 = function (arr, fn) {
  let i = 0;
  var arrTotal = [];
  while (i < arr.length) {
    if (fn(arr[i], i)) {
      arrTotal.push(arr[i]);
    }
    i++;
  }
  return arrTotal;
};
