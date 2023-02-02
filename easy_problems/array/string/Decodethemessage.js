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

//solution 2 

var decodeMessage = function(key, message) {
    var k = key.replaceAll(" " , "")
    var alphabet = k.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; });
    console.log(alphabet)
    var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
    alphabet.push(' ')
    var str = ''
    for (let i of message) str+=a[alphabet.indexOf(i)]
    return str
}