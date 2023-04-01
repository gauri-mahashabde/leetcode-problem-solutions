//leetcode.com/problems/richest-customer-wealth/

//solution 1
const maximumWealth = (accounts) =>
  Math.max(...accounts.map((acc) => acc.reduce((prev, cur) => prev + cur, 0)));

//solution 2
var maximumWealth1 = function (accounts) {
  let m = 0;
  for (var i = 0; i < accounts.length; i++) {
    var s = 0;
    for (var j = 0; j < accounts[i].length; j++) {
      s += accounts[i][j];
    }
    if (s > m) m = s;
  }
  return m;
};
