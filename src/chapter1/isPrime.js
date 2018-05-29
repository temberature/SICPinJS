var add = require('../base').add;

var isPrime = function(n) {
  var isPrimeIter = function(k, n) {
    if (k >= n) {
      return n;
    }
    return n % k === 0 ? k : isPrimeIter(add(k, 1), n);
  }
  return isPrimeIter(2, n) === n ? true: false;
}

module.exports = isPrime;
