//https://leetcode.com/problems/truncate-sentence/

//solution 1

const truncateSentence = (s, k) => {
  const array = s.split(" ");

  array.length = k;

  return array.join(" ");
};
