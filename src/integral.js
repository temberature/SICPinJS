var cube = require("./cube");
var sum = require("./sum");

var integral = function(f, a, b, dx) {
  var a = a + dx / 2;
  return sum(
    function(a) {
      return f(a) * dx;
    },
    a,
    function(a) {
      return a + dx;
    },
    b
  );
};

module.exports = integral;
