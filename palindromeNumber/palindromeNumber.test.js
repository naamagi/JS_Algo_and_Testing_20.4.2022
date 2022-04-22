const { test, expect } = require("@jest/globals");
const palindromeNumber = require("./palindromeNumber.easy");

test("Example 1", () => {
  expect(palindromeNumber(10)).toBe(false);
});

test("Example 2", () => {
  expect(palindromeNumber(0)).toBe(true);
});
test("Example 3", () => {
  expect(palindromeNumber(131)).toBe(true);
});

test("Example 4", () => {
  expect(palindromeNumber(132)).toBe(false);
});
test("Example 5", () => {
  expect(palindromeNumber(-121)).toBe(false);
});
