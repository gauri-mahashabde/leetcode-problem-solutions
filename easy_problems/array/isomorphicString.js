//https://leetcode.com/problems/isomorphic-strings/solutions/

//solution 1
var isIsomorphic = function(s, t) {
   
    if (!s && !t) return true;
    if (!s || !t) return false;
    if (s.length !== t.length) return false;
    var map = new Map();
    var set = new Set();
    for (var  i = 0; i < s.length; i++) {
        var ch = map.get(s[i]);
        if (!ch) {
            if (set.has(t[i])) return false;
            set.add(t[i]);
            map.set(s[i], t[i]);
        } else if (ch !== t[i]) return false;
    }
    return true;

};

