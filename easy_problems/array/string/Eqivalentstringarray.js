//https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

//solution 1

const arrayStringsAreEqual = function (word1, word2) {
  const stringword1 = word1.toString();
  const stringword2 = word2.toString();

  const string1 = stringword1.split(",").join("");
  const string2 = stringword2.split(",").join("");

  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
};

//solution 2

const arrayStringsAreEqual1 = function(word1, word2) {
    if(word1.join('')===word2.join('')) return true
    return false
};