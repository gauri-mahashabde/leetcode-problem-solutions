//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

const kidsWithCandies = function (candies, extraCandies) {
    let a = Math.max(...candies);
    let b = [];
  
    for (let i = 0; i < candies.length; i++) {
      if (candies[i] + extraCandies >= a) {
        b.push(true);
      } else {
        b.push(false);
      }
    }
  
    return b;
  };