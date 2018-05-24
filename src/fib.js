var fib = function(n) {
  if (typeof n !== "number" || n < 0 || n !== parseInt(n, 10)) {
    throw new Error("input should be integer.");
  }
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
