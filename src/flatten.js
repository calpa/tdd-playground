const flatten = (ary, ret = []) => {
  // Magic
  return Array.isArray(ary) ? [].concat(...ary.map(flatten)) : ary;

  //   return ary.reduce((ret, entry) => {
  //     if (Array.isArray(entry)) {
  //       flatten(entry, ret);
  //     } else {
  //       ret.push(entry);
  //     }
  //     return ret;
  //   }, ret);
};

module.exports = flatten;
