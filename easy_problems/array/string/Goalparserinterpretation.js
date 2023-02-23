//https://leetcode.com/problems/goal-parser-interpretation/

const interpret = function (command) {
  let rpal = command.split("()").join("o");
  let x = rpal.split("(al)").join("al");
  return x;
};

