//https://leetcode.com/problems/is-subsequence/submissions/863564603/

//solution 1
var isSubsequence = function(s, t) {
  
    if (s.length === 0) return true;
	let sPtr = 0;
    for (let i = 0 ; i < t.length ; i += 1) {
        if (t[i] === s[sPtr]) sPtr += 1;
        if (sPtr === s.length) return true;
    }
    return false;
};  