const extend = (target, object) => {
  // ES5
  //   return Object.assign({}, target, object);

  // ES6
  //   return { ...target, ...object };

  // polyfill
  if (!target) {
    if (!object) {
      return {};
    }
    return object;
  }
  var temp = Object(target);

  for (var nextKey in object) {
    // MDN Solution
    // Avoid bugs when hasOwnProperty is shadowed
    if (Object.prototype.hasOwnProperty.call(object, nextKey)) {
      temp[nextKey] = object[nextKey];
    }
  }

  return temp;
};

module.exports = extend;
