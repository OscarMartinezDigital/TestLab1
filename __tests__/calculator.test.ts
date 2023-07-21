import {
  add,
  division,
  exponentiation,
  multiplication,
  subtract,
} from "../calculator";

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers correctly", () => {
  expect(subtract(5, 3)).toBe(2);
});
test("multiply two numbers correctly", () => {
  expect(multiplication(5, 3)).toBe(15);
});
test("divide two numbers correctly", () => {
  expect(division(10, 2)).toBe(5);
});
test("exponent a number correctly", () => {
  expect(exponentiation(2, 3)).toBe(8);
});
// Add more test cases for the other calculator functions
