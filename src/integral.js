var cube = require("./cube");
var sum = require("./sum");

var integral = function(f, a, b, dx) {
  return sum(
    function(a) {
      return f(a) * dx;
    },
    a + dx / 2,
    function(a) {
      return a + dx;
    },
    b
  );
};

module.exports = integral;
