//https://leetcode.com/problems/reverse-words-in-a-string-iii/

//solution 1
const reverseWords = function (s) {
    let finalStr = "";
    let subString = "";
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === " " || s.length === i + 1) {
        if (s.length === i + 1) {
          subString = s.charAt(i) + subString;
        } else {
          subString = subString + s.charAt(i);
        }
        finalStr += subString;
        subString = "";
        continue;
      }
      subString = s.charAt(i) + subString;
    }
    return finalStr;
  };
  