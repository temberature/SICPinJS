var fixedPoint = require("./fixedPoint");
var sum = require("./sum");

var deriv = function(g) {
  var dx = 0.00001;
  return function(x) {
    return (g(x + dx) - g(x)) / dx;
  };
};

var newtonsMethod = function(g) {
  var f = function(g) {
    return function(x) {
      return x - g(x) / deriv(g)(x);
    };
  };
  return fixedPoint(f(g), 1);
};

module.exports = {
  deriv: deriv,
  newtonsMethod: newtonsMethod
};
