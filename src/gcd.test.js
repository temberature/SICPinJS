var expect = require("chai").expect;
var gcd = require("../src/gcd");

describe('gcd', function() {
  it('gcd(206, 40) === 2', function() {
    var r = gcd(206, 40);
    expect(r).to.equal(2);
  })
  it('gcd(3, 4) === 1', function() {
    var r = gcd(3, 4);
    expect(r).to.equal(1);
  })
})
