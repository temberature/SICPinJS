var expect = require("chai").expect;
var cube = require("../src/cube");
var integral = require("../src/integral");

describe("integral", function() {
  it('integral(cube, a, b, dx) closeTo 1/4', function() {
    var r = integral(cube, 0, 1, 0.001);
    console.log(r);
    expect(r).to.be.closeTo(1/4, 0.1);
  })
})
