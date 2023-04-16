//https://leetcode.com/problems/replace-all-digits-with-characters/

//solution 1
const replaceDigits = function (s) {
  let d = "";

  for (let i of s) {
    if (!isNaN(i)) {
      console.log("i is", i);
      let z = d.charCodeAt(d.length - 1) + parseInt(i);
      d += String.fromCharCode(z);
    } else {
      d += i;
      console.log("else d is", d);
    }
  }
  return d;
};

//solution 2

const replaceDigits1 = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      res += String.fromCharCode(s[i - 1].charCodeAt() + parseInt(s[i]));
    } else {
      res += s[i];
    }
  }
  return res;
};
