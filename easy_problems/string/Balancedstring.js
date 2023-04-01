//https://leetcode.com/problems/split-a-string-in-balanced-strings/

//solution 1

const balancedStringSplit = function (s) {
  const strArr = s.split("");

  const obj = { R: 0, L: 0 };
  let max = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (i === 0) {
      obj[strArr[i]] = ++obj[strArr[i]];
    } else {
      obj[strArr[i]] = ++obj[strArr[i]];

      if (obj["R"] === obj["L"]) {
        max++;
        obj["R"] = 0;
        obj["L"] = 0;
      }
    }
  }
  return max;
};

const balancedStringSplit1 = function (s) {
  let balanceStatus = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "R" ? balanceStatus++ : balanceStatus--; 
    balanceStatus === 0 && count++;
  }
  return count;
};
