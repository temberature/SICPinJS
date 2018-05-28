var expect = require("chai").expect;
var cons = require("./cons").cons;
var car = require("./cons").car;
var cdr = require("./cons").cdr;

describe("cons", function() {
  var a = cons(1, 2);
  it("car(a) === 1", function() {
    var r = car(a);
    expect(r).to.equal(1);
  });
  it("cdr(a) === 2", function() {
    var r = cdr(a);
    expect(r).to.equal(2);
  });
});
