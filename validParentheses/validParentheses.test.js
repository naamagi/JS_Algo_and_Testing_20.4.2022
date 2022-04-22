const { test, expect } = require("@jest/globals");
const isValid = require("./validParentheses.easy");

test("Example 1", () => {
  expect(isValid("()")).toBe(true);
});

test("Example 2", () => {
  expect(isValid("()[]{}")).toBe(true);
});
test("Example 3", () => {
  expect(isValid("(]")).toBe(false);
});
test("Example 4", () => {
  expect(isValid("({[]{(){}}})")).toBe(true);
});

test("Example 5", () => {
  expect(isValid("()a")).toBe(undefined);
});
test("Example 6", () => {
  expect(isValid(1)).toBe(undefined);
});
