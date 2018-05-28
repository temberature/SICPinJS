var expect = require("chai").expect;
var addRat = require("./rat").addRat;
var makeRat = require("./rat").makeRat;
var numer = require("./rat").numer;
var denom = require("./rat").denom;
var equalRat = require("./rat").equalRat;

describe('rat', function() {
  it('addRat(1/2, 1/3) === 5/6', function() {
    var a = makeRat(1, 2), b = makeRat(1, 3); c = makeRat(5, 6);
    var r = addRat(a, b);
    expect(equalRat(r, c)).to.equal(true);
  })
  it('addRat(1/2, 1/2) === 1/1', function() {
    var a = makeRat(1, 2), b = makeRat(1, 2); c = makeRat(1, 1);
    var r = addRat(a, b);
    expect(equalRat(r, c)).to.equal(true);
  })
})
