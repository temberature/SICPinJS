var gcd = require("../gcd");

var cons = function(a, b) {
  return function(m) {
    if (m === 0) {
      return a;
    } else if (m === 1) {
      return b;
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
};
