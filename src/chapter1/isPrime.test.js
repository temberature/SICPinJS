var expect = require("chai").expect;
var isPrime = require('./isPrime');

describe("isPrime", function() {
  it("isPrime(3) === true", function() {
    var r = isPrime(3);
    expect(r).to.equal(true);
  });
  it("isPrime(17) === true", function() {
    var r = isPrime(17);
    expect(r).to.equal(true);
  });
});
