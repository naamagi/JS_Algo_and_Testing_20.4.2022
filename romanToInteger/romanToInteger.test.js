const { test, expect } = require("@jest/globals");
const romanToInt = require("./romanToInteger.easy");

test("Example 1", () => {
	expect(romanToInt("III")).toBe(3);
});

test("Example 2", () => {
	expect(romanToInt("LVIII")).toBe(58);
});
test("Example 3", () => {
	expect(romanToInt("MCMXCIV")).toBe(1994);
});

test("Example 4", () => {
	expect(romanToInt("M1CMXCIV")).toBe(undefined);
});
test("Example 5", () => {
	expect(romanToInt(12)).toBe(undefined);
});


