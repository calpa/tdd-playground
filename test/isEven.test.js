const test = require("ava");
const isEven = require("../src/isEven");

test("isEven should be a function", t => {
  t.deepEqual(typeof isEven, "function", "isEven is not a function");
});

test("should be true", t => {
  t.true(isEven(2));
  t.true(isEven(42));
  t.true(isEven(999994));
  t.true(isEven(-2));
  t.true(isEven(-10));
});

test("should be false", t => {
  t.false(isEven(3));
  t.false(isEven(9));
  t.false(isEven(3));
  t.false(isEven(-9));
});

test("should not take infinite number", t => {
  t.deepEqual(isEven(Infinity), "expect finite number");
});

test("should not take non integer", t => {
  t.deepEqual(isEven(0.1234), "expect integer");
});

test("should not take unsafe integer", t => {
  t.deepEqual(isEven(Math.pow(2, 53)), "expect safe integer");
});
