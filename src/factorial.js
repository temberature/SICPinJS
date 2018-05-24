var factorial = function(n) {
  if (typeof n !== 'number' || n < 0 || n !== parseInt(n, 10)) {
    throw new Error('input should be integer.');
  }
  if (n < 2) {
    return n;
  }
  return n * factorial(n - 1)
}

module.exports = factorial;
