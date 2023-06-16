//https://leetcode.com/problems/merge-strings-alternately/

//solution 1

const mergeAlternately = function (word1, word2) {
  let result = [];
  let maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (word1[i]) result.push(word1[i]);
    if (word2[i]) result.push(word2[i]);
  }

  return result.join("");
};

//solution 2

const mergeAlternately1 = (word1, word2) => {
  let arr = [];
  let n = Math.min(word1.length, word2.length);

  for (let i = 0; i < n; i++) {
    arr.push(word1[i], word2[i]);
  }

  if (word1.length > n) {
    arr.push(...word1.slice(n));
  }

  if (word2.length > n) {
    arr.push(...word2.slice(n));
  }

  return arr.join("");
};
