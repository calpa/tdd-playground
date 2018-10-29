const test = require("ava");
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

let defaults = {};

test.beforeEach(() => {
  defaults = {
    number: 1,
    bool: true,
    magic: "real",
    animal: "whale",
    croutons: "delicious"
  };
});

test("extend should be a function", t => {
  // t.assert(typeof extend === "function");
  t.deepEqual(typeof extend, "function", "extend is not a function");
});

test("should return a new object", t => {
  t.deepEqual(typeof extend(), "object", "extend returns something not object");
  t.deepEqual(extend(null, { a: "a" }), { a: "a" });
  t.deepEqual(extend({ a: "a" }, null), { a: "a" });
});

test("should return correct object", t => {
  t.deepEqual(extend(defaults, options), expected);

  // defaults is modified
  t.deepEqual(defaults, expected);
});
