const test = require("ava");
const isObject = require("../src/isObject");

test("isObject should be a function", t => {
  t.deepEqual(typeof isObject, "function");
});

test("should return true", t => {
  t.true(isObject({}));
  t.true(isObject({ name: 1 }));
  t.true(isObject({ name: "12345" }));
  t.true(isObject(new Object()));
});

test("should return false", t => {
  t.false(isObject([]));
  t.false(isObject(1));
  t.false(isObject(12314));
  t.false(isObject("12345"));
  t.false(isObject(null));
  t.false(isObject(undefined));
  t.false(isObject(NaN));
});
