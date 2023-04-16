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
