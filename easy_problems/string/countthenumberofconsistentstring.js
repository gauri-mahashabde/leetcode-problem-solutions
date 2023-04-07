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
