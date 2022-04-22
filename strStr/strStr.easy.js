/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *
 * @description {Implement strStr().

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strStr() and Java's indexOf().
}
 

Example 1:

Input : haystack = "hello", needle = "ll"
Output : 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
 */

const strStr = function (haystack, needle) {
  haystackArr = Array.from(haystack);
  needleArr = Array.from(needle);
  for (let i = 0; i < haystackArr.length; i++) {
    if (haystackArr[i] === needleArr[0]) {
      let indexOfHaystack = i;
      const firstOccurrence = i;
      let count=0;
      for (let j = 0; j < needleArr.length; j++) {
        if (haystackArr[indexOfHaystack]&&haystackArr[indexOfHaystack] === needleArr[j]) {
          count++;
          indexOfHaystack++;
        }
      }
      if (count === needleArr.length) {
        return firstOccurrence;
      }
    }
  }
  return -1;
};


console.log(strStr("hello","ll"));
console.log(strStr("aaaaa","bba"));
console.log(strStr("hello","o"));
module.exports = strStr;