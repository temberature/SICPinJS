var factorial = function(n) {
  if (typeof n !== "number" || n < 0 || n !== parseInt(n, 10)) {
    throw new Error("input should be integer.");
  }
  if (n < 1) {
    return n;
  }
  var factIter = function(counter, product) {
    if (counter < 2) {
      return product;
    }
    return factIter(counter - 1, product * counter);
  };
  return factIter(n, 1);
};

module.exports = factorial;
