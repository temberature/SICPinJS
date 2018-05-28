var gcd = require('../gcd');

var cons = function(a, b) {
  var divisor = gcd(a, b);
  return function(m) {
    if (m === 0) {
      return a / divisor;
    } else if (m === 1) {
      return b / divisor;
    }
  };
};
var car = function(d) {
  return d(0);
};
var cdr = function(d) {
  return d(1);
};

module.exports = {
  cons: cons,
  car: car,
  cdr: cdr
}
