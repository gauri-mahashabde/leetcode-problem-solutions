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

//solution 2
var reverseWords1 = function (s) {
  let arrOfWords = s.split(" ");

  for (let i = 0; i < arrOfWords.length; ++i) {
    let eachWord = arrOfWords[i].split("");
    let left = 0,
      right = eachWord.length - 1;
    while (left < right) {
      let temp = eachWord[right];
      eachWord[right] = eachWord[left];
      eachWord[left] = temp;
      left++;
      right--;
    }
    arrOfWords[i] = eachWord.join("");
  }

  return arrOfWords.join(" ");
};
