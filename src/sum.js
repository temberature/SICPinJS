var sumIntegers = function(a, b) {
  if (a === b) {
    return b;
  }
  return a + sumIntegers(a + 1, b);
};
var sum = function(term, a, next, b) {
  if (a >= b) {
    return term(b);
  }
  return term(a) + sum(term, next(a), next, b);
};

module.exports = sum;
