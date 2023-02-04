//https://leetcode.com/problems/to-lower-case/

var toLowerCase = function(str) {
    let res = "";
    
    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i);
		
		// The ascii value from 65 to 90 represent the uppercase alphabet A to Z.
		// While, the ascii value from 97 to 122 represent the lowercase alphabet a to z.
		// By adding 32 to the ascii value, we are converting it to lowercase.
        if (ascii >= 65 && ascii <= 90) res += String.fromCharCode(ascii + 32);
        else res += str.charAt(i);
    }
    
    return res;
};

