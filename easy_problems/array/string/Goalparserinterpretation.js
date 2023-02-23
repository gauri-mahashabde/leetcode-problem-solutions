//https://leetcode.com/problems/goal-parser-interpretation/

const interpret = function (command) {
  let rpal = command.split("()").join("o");
  let x = rpal.split("(al)").join("al");
  return x;
};

const interpret1 = (command) => {
  const str = [];
  for (let i = 0; i < command.length - 1; i++) {
    if (command.charAt(i) === "G") str.push("G");
    if (command.charAt(i) === "(") {
      if (command.charAt(i + 1) === ")") str.push("o");
      else {
        str.push("al");
      }
    }
  }
  if (command.charAt(command.length - 1) === "G") str.push("G");
  return str.join("");
};
