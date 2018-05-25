var fixedPoint = require("./fixedPoint");
var sum = require("./sum");

var deriv = function(g) {
  var dx = 0.00001;
  return function(x) {
    return (g(x + dx) - g(x)) / dx;
  };
};

var newtonTransform = function(g) {
  return function(x) {
    return x - g(x) / deriv(g)(x);
  };
};
var fixedPointOfTransforms = function(g, transform) {
  return fixedPoint(transform(g), 1);
}
var newtonsMethod = function(g) {
  return fixedPoint(newtonTransform(g), 1);
};

module.exports = {
  deriv: deriv,
  newtonsMethod: newtonsMethod
};
