/**
 *
 * @param {any} obj
 */

const isObject = obj =>
  Object.prototype.toString.call(obj) === "[object Object]";

module.exports = isObject;
