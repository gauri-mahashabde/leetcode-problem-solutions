//https://leetcode.com/problems/jewels-and-stones/

//solution  1

const numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i in jewels) {
    for (let j in stones) {
      if (jewels[i] == stones[j]) count = count + 1;
    }
  }
  return count;
};

//solution 2

const numJewelsInStones1 = (J, S) => {
    const jewels = new Set(J)
    return S.split('').reduce((res, s) => res + jewels.has(s), 0)
};
