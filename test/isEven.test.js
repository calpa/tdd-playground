const assert = require("assert");
const isEven = require("../src/isEven");

describe("isEven", () => {
  it("should exist", () => {
    assert(typeof isEven === "function");
  });

  it("should be true", () => {
    assert(isEven(2));
    assert(isEven(42));
    assert(isEven(999994));
    assert(isEven(-2));
    assert(isEven(-10));
  });

  it("should be false", () => {
    assert(!isEven(3));
    assert(!isEven(9));
    assert(!isEven(3));
    assert(!isEven(-9));
  });

  it("should not take infinite number", () => {
    assert(isEven(Infinity) === "expect finite number");
  });

  it("should not take non integer", () => {
    assert(isEven(0.1234) === "expect integer");
  });

  it("should not take unsafe integer", () => {
    assert(isEven(Math.pow(2, 53)) === "expect safe integer");
  });
});
