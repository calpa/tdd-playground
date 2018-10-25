const isObject = require("./isObject");

/**
 * Test if the test object is an empty object
 * @param {any} obj
 */
const isEmptyObject = obj => {
  if (!obj) return false;

  if (isObject && !Array.isArray(obj)) {
    return !Object.keys(obj).length;
  }

  return false;
};

module.exports = isEmptyObject;
