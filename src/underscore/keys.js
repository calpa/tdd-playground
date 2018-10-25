const isObject = require("../isObject");
const keys = item => {
  const types = ["string", "boolean"];
  if (types.indexOf(typeof item) !== -1 || !item) {
    return [];
  }

  // ES5
  if (isObject) {
    return Object.keys(item);
  }
};

module.exports = keys;
