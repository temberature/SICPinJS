
var expect = require("chai").expect;
var cube = require("../src/base").cube;
var average = require("../src/base").average;
var square = require("../src/base").square;
var deriv = require("../src/newtonsMethod").deriv;
var newtonsMethod = require("../src/newtonsMethod").newtonsMethod;
var fixedPointOfTransforms = require("../src/newtonsMethod").newtonsMethod;


describe("newtonsMethod", function() {
  it('deriv(cube)(5) closeTo 75', function() {
    var r = deriv(cube)(5);
    expect(r).to.closeTo(75, 1);
  })
  it('newtonsMethod can calc Math.sqrt(2)', function() {
    var sqrt = function(x) {
      var g = function(y) {
        return y * y - x;
      }
      return newtonsMethod(g);
    }
    var r = sqrt(2);
    expect(r).to.closeTo(Math.sqrt(2), 0.1);
  })
  it('fixedPointOfTransforms can calc Math.sqrt(2)', function() {
    var sqrt = function(x) {
      var g = function(y) {
        return y * y - x;
      }
      var newtonTransform = function(g) {
        return function(x) {
          return x - g(x) / deriv(g)(x);
        };
      };
      return fixedPointOfTransforms(g, newtonTransform);
    }
    var r = sqrt(2);
    expect(r).to.closeTo(Math.sqrt(2), 0.1);
  })
})
