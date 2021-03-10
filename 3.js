const checkParentheses = (str) => {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    }
    if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      let last = stack.pop();

      if (str[i] !== map[last]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
};

console.log("Task №3 - ");
console.log(checkParentheses("--()--")); // true
console.log(checkParentheses("-a]--[")); // false
console.log(checkParentheses("dsa{vsfs{ad")); // false
console.log(checkParentheses("j78(g5b]uyg")); // false
console.log(checkParentheses(",m{i987y}hj")); // true
console.log(checkParentheses("dsa[3ed---:]::")); // true
