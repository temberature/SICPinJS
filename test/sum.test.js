var sum = require("../src/sum");
var expect = require("chai").expect;

var integer = function(a) {
  return a;
};
var cube = function(a) {
  return a * a * a;
};
var inc = function(a) {
  return a + 1;
};
var inc4 = function(a) {
  return a + 4;
}
var pi = function(a) {
  return 1 / (a * (a + 2));
};
describe("sum", function() {
  it("sum(integer, 0, inc, 10) === 55", function() {
    var r = sum(integer, 0, inc, 10);
    expect(r).to.equal(55);
  });
  it("sum(cube, 0, inc, 2) === 9", function() {
    var r = sum(cube, 0, inc, 2);
    expect(r).to.equal(9);
  });
  it("sum(pi, 1, inc4, 1000) closeTo pi/8", function() {
    var r = sum(pi, 1, inc4, 1000);
    console.log(r * 8);
    expect(r).to.be.closeTo(Math.PI/8, 1/8);
  });
});
