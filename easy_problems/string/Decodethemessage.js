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


const decodeMessage = (key, message) => {
    const map = new Map();
    const uniques = [];
  
    for (let i = 0; i < key.length; i += 1) {
      if (key[i] !== ' ' && !map.has(key[i])) {
        map.set(key[i], '');
        uniques.push(key[i]);
      }
    }
  
    const firstCharCode = 'a'.charCodeAt(0); // 97
  
    for (let i = 0; i < uniques.length; i += 1) {
      const code = uniques[i].charCodeAt();
      map.set(uniques[i], String.fromCharCode(i + firstCharCode));
    }
  
    let result = '';
  
    for (let i = 0; i < message.length; i += 1) {
      result += map.get(message[i]) ?? ' ';
    }
  
    return result;
  };