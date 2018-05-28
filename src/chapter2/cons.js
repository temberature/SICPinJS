var gcd = require("../gcd");

var cons = function(a, b) {
  var dispatch = function(m) {
    if (m === 0) {
      return a;
    } else if (m === 1) {
      return b;
    }
  };
  return dispatch;
};
var car = function(d) {
  return (typeof d === 'function' && d.name === 'dispatch') && d(0);
};
var cdr = function(d) {
  return (typeof d === 'function' && d.name === 'dispatch') && d(1);
};

module.exports = {
  cons: cons,
  car: car,
  cdr: cdr
};
