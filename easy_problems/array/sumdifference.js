//https://leetcode.com/problems/left-and-right-sum-differences/

//solution 1

const leftRigthDifference = function (a) {
  let pre = [0];
  for (let e of a) pre.push(e + pre[pre.length - 1]);
  pre.pop();

  a = a.reverse();
  let suf = [0];
  for (let e of a) suf.push(e + suf[suf.length - 1]);
  suf.pop();
  suf.reverse();

  let an = [];
  for (let i = 0; i < pre.length; i++) an.push(Math.abs(pre[i] - suf[i]));

  return an;
};
