const test = require("ava");
const keys = require("../../src/underscore/keys");

test("keys should be a function", t => {
  t.deepEqual(typeof keys, "function");
});

test("should extract the keys of the object", t => {
  t.deepEqual(keys({ one: 1, two: 2 }), ["one", "two"]);
});

test("should be true", t => {
  t.deepEqual(keys(null), []);
  t.deepEqual(keys(void 0), []);
  t.deepEqual(keys(1), []);
  t.deepEqual(keys("a"), []);
  t.deepEqual(keys(true), []);
});
