// It should be the same as is-odd package
const isEven = item => {
  if (!Number.isFinite(item)) {
    return "expect finite number";
  }

  if (!Number.isInteger(item)) {
    return "expect integer";
  }

  if (!Number.isSafeInteger(item)) {
    return "expect safe integer";
  }

  return !(item % 2);
};

module.exports = isEven;
