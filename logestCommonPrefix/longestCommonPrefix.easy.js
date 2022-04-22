/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

const longestCommonPrefix = function (strs) {
  strs = strs.sort();
  if (strs.length === 0) {
    return undefined;
  }
  const firstStr = strs.length > 0 ? strs[0] : "";
  const lastStr = strs.length > 0 ? strs[strs.length - 1] : "";
  const minLength = strs.reduce((minLen, num) => {
    return minLen < num.length ? minLen : num.length;
  }, strs[0].length);
  let count = 0;
  for (let index = 0; index < minLength; index++) {
    if (firstStr[index] === lastStr[index]) {
      count++;
    } else {
      break;
    }
  }
  const prefix=firstStr.substring(0, count);
  return count > 0 ? firstStr.substring(0, count) : "";
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["flower", "flow", "flowers"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["flower", "flor", "flowers"]));

module.exports = longestCommonPrefix;
