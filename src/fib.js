var fib = function(n) {
  if (typeof n !== "number" || n < 0 || n !== parseInt(n, 10)) {
    throw new Error("input should be integer.");
  }
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
  var fibIter = function(a, b, count, sum) {
    return count < 2 ? sum : fibIter(b, a + b, count - 1, sum + b);
  };
  return fibIter(0, 1, n, 0);
};

module.exports = fib;
