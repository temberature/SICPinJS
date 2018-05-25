
var expect = require("chai").expect;
var cube = require("../src/base").cube;
var average = require("../src/base").average;
var square = require("../src/base").square;
var deriv = require("../src/newtonsMethod").deriv;
var newtonsMethod = require("../src/newtonsMethod").newtonsMethod;



describe("newtonsMethod", function() {
  it('deriv(cube)(5) closeTo 75', function() {
    var r = deriv(cube)(5);
    expect(r).to.closeTo(75, 1);
  })
  it('newtonsMethod can calc Math.sqrt(2)', function() {
    var sqrt = function(x) {
      var f = function(y) {
        return y * y - x;
      }
      return newtonsMethod(f);
    }
    var r = sqrt(2);
    expect(r).to.closeTo(Math.sqrt(2), 0.1);
  })
})
