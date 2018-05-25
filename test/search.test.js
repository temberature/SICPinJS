var expect = require("chai").expect;
var square = require("../src/square");
var search = require("../src/search");

describe("search", function() {
  it('search(square, -1, 1) === 0', function() {
    var r = search(square, -1, 1);
    expect(r).to.closeTo(0, 0.001);
  })
})
