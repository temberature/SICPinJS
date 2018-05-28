var gcd = require('../gcd');

var makeRat = function(a, b) {
  var divisor = gcd(a, b);
  return function(m) {
    if (m === 0) {
      return a / divisor;
    } else if (m === 1) {
      return b / divisor;
    }
  };
};
var numer = function(d) {
  return d(0);
};
var denom = function(d) {
  return d(1);
};
var addRat = function(a, b) {
  return makeRat(numer(a) * denom(b) + numer(b) * denom(a), denom(a) * denom(b));
};
var equalRat = function(a, b) {
  return numer(a) === numer(b) && denom(a) === denom(b);
}
module.exports = {
  makeRat: makeRat,
  addRat: addRat,
  equalRat: equalRat,
  numer: numer,
  denom: denom,

};
