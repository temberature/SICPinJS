var cube = require("./cube");
var sum = require("./sum");

var integral = function(f, a, b, dx) {
  var a = a + dx / 2;
  var term = function(a) {
    return f(a) * dx;
  }
  var next = function(a) {
    return a + dx;
  }
  if (a >= b) {
    return term(b);
  }
  return term(a) + sum(term, next(a), next, b);
};

module.exports = integral;
