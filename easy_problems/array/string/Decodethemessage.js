//https://leetcode.com/problems/decode-the-message/

//solution 1

var decodeMessage = function(key, message) {
    let keySet = Array.from(new Set(key.split(' ').join('')));
    for (let i = 0; i < alpha.length; i++) {
        hash.set(keySet[i], alpha[i])
    }

    for (let chr of message) {
        result += hash.get(chr) || ' '
    }

    return result
};
