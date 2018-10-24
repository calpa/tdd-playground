const isNumber = num => {
  if (typeof num === "number") {
    return num - num === 0;
  }

  if (typeof num === "string" && num.trim() !== "") {
    // Work:
    return +num - +num === 0;

    // Not work:
    // return Number.isFinite ? Number.isFinite(num) : isFinite(num);
  }

  return false;
};

module.exports = isNumber;
