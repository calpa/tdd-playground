const assert = require("assert");
const isObject = require("../src/isObject");

describe("isObject function ", () => {
  it("should exists", () => {
    assert(typeof isObject === "function");
  });

  it("should be true", () => {
    assert(isObject({}));
    assert(isObject({ name: 1 }));
    assert(isObject({ name: "12345" }));
  });
});
