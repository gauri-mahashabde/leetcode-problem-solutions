//https://leetcode.com/problems/sort-the-people/

//solution 1

const sortPeople = function (names, heights) {
  let finalArray = [];
  for (let i = 0; i < names.length; i++) {
    finalArray.push([names[i], heights[i]]);
  }
  return finalArray.sort((a, b) => b[1] - a[1]).map((a) => a[0]);
};

//solution 2

var sortPeople1 = function(names, heights) {
    const people = names.map((name, index) => ({name, height: heights[index]}));
    
    return people.sort((a, b) => b.height - a.height).map(({name}) => name);
};