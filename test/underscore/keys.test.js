const assert = require("assert");
const keys = require("../../src/underscore/keys");

describe("keys", () => {
  it("should be a function", () => {
    assert(typeof keys === "function");
  });

  it("should extract the keys of the object", () => {
    assert.deepStrictEqual(keys({ one: 1, two: 2 }), ["one", "two"]);
  });

  it("should be true", () => {
    assert.deepEqual(keys(null), []);
    assert.deepEqual(keys(void 0), []);
    assert.deepEqual(keys(1), []);
    assert.deepEqual(keys("a"), []);
    assert.deepEqual(keys(true), []);
  });
});
