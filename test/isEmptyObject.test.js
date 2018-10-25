const assert = require("assert");
const isEmptyObject = require("../src/isEmptyObject");

describe("isEmptyObject(obj)", () => {
  it("should be true", () => {
    assert(isEmptyObject({}));
  });

  it("should be false", () => {
    assert(!isEmptyObject(null));
    assert(!isEmptyObject(undefined));
    assert(!isEmptyObject("Hello"));

    assert(!isEmptyObject([1, 2, 3]));
    assert(!isEmptyObject({ one: 1 }));
    assert(!isEmptyObject([]), false);
  });
});
