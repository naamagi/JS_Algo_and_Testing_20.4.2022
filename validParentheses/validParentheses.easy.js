/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
    if(typeof s !== "string"){return undefined;}
  let isValid = true;
  const copyStrArr = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
      case "{":
      case "[":
        copyStrArr.push(s[i]);
        break;
      case ")":
        if (copyStrArr.length > 0) {
          if (copyStrArr[copyStrArr.length - 1] === "(") {
            copyStrArr.pop();
          } else {
            isValid = false;
          }
          break;
        }
      case "}":
        if (copyStrArr.length > 0) {
          if (copyStrArr[copyStrArr.length - 1] === "{") {
            copyStrArr.pop();
          } else {
            isValid = false;
          }
          break;
        }
      case "]":
        if (copyStrArr.length > 0) {
          if (copyStrArr[copyStrArr.length - 1] === "[") {
            copyStrArr.pop();
          } else {
            isValid = false;
          }
          break;
        }
      default:
        return undefined;
    }
    if (isValid === false) return isValid;
  }
  return isValid;
};


console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid( "(]"));
console.log(isValid("({[]{(){}}})"));
console.log(isValid("()a"));
console.log(isValid(1));
module.exports = isValid;