//https://leetcode.com/problems/count-the-number-of-consistent-strings/

//solution 1

const countConsistentStrings = function (allowed, words) {
  return words.filter((x) =>
    x.split("").every((x) => allowed.split("").includes(x))
  ).length;
};

//solution 2
const countConsistentStrings1 = (allowed, words) => {
  let set = new Set(allowed);
  return words.reduce((a, w) => {
    return w.split("").every((l) => set.has(l)) ? ++a : a;
  }, 0);
};

//solution 3
var countConsistentStrings2s = function (allowed, words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let flag = true;

    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      if (allowed.indexOf(letter) == -1) flag = false;
    }

    if (flag) count++;
  }

  return count;
};
