const test = require("ava");
const isEmptyObject = require("../src/isEmptyObject");

test("isEmptyObject(obj) should be true", t => {
  t.true(isEmptyObject({}));
});

test("should be false", t => {
  t.false(isEmptyObject(null));
  t.false(isEmptyObject(undefined));
  t.false(isEmptyObject("Hello"));

  t.false(isEmptyObject([1, 2, 3]));
  t.false(isEmptyObject({ one: 1 }));
  t.false(isEmptyObject([]), false);
});
