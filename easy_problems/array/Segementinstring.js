//https://leetcode.com/problems/number-of-segments-in-a-string/

let countSegments = s => s.split(" ").filter(s => s.trim().length).length;

var countSegments1 = function(s) {
    let hasSpace = true;
    let count = 0;
  
    for (const char of s) {
      if (hasSpace && char !== " ") {
        count++;
        hasSpace = false;
      } else if (!hasSpace && char === " ") {
        hasSpace = true;
      }
    }
  
    return count;
  };

  var countSegments2 = function(s) {
    let arr = s.split(" ")
      let ans = 0
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] != " " && arr[i] != "")
              ans++
      }
      return ans
  };