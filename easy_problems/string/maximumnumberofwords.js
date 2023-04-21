//https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

//solution 1

const mostWordsFound = function (sentences) {
  let max = 0;
  for (let i = 0; i < sentences.length; i++) {
    let temp = sentences[i].split(" ").length;
    if (temp > max) max = temp;
  }
  return max;
};

//solution 2

const mostWordsFound1 = function (sentences) {
  return Math.max(...sentences.map((item) => item.split(" ").length));
};
