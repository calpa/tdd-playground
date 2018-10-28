const assert = require("assert");
const extend = require("../src/extend");

const options = {
  number: 2,
  magic: "real",
  animal: "porpoise",
  bool: false,
  random: 42
};

const expected = {
  animal: "porpoise",
  bool: false,
  croutons: "delicious",
  magic: "real",
  number: 2,
  random: 42
};

describe("extend", () => {
  let defaults = {};

  beforeEach(() => {
    defaults = {
      number: 1,
      bool: true,
      magic: "real",
      animal: "whale",
      croutons: "delicious"
    };
  });

  it("should be a function", () => {
    assert(typeof extend === "function");
  });

  it("should return a new object", () => {
    assert(typeof extend() === "object");
    assert.deepStrictEqual(extend(null, { a: "a" }), { a: "a" });
    assert.deepStrictEqual(extend({ a: "a" }, null), { a: "a" });
  });

  it("should return correct object", () => {
    assert.deepStrictEqual(extend(defaults, options), expected);

    // defaults is modified
    assert.deepStrictEqual(defaults, expected);
  });
});
