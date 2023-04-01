//https://leetcode.com/problems/truncate-sentence/

//solution 1

const truncateSentence = (s, k) => {
  const array = s.split(" ");

  array.length = k;

  return array.join(" ");
};

//solution 2

const truncateSentence1 = function (s, k) {
  let str = "";
  var word = s.split(" ");
  for (let i = 0; i < k - 1; i++) {
    str += word[i] + " ";
  }
  str += word[k - 1];
  return str;
};
