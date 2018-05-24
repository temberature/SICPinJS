var expect = require("chai").expect;
var countChange = require("../src/countChange");

describe('countChange', function() {
  it('countChange(100) === 292', function() {
    var r = countChange(100);
    expect(r).to.equal(292);
  })
})
