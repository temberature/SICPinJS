var sqrt = require("../src/sqrt");
var expect = require("chai").expect;

describe("开平方", function() {
  it("根号2约等于1.4", function() {
    var r = +sqrt(2).toFixed(1);
    expect(r).to.equal(1.4);
  });
  it("根号0等于0", function() {
    var r = sqrt(0);
    expect(r).to.equal(0);
  });
  it("根号1等于1", function() {
    var r = sqrt(1);
    expect(r).to.equal(1);
  });
  it("根号1.1约等于1", function() {
    var r = +sqrt(1.1).toFixed(1);
    expect(r).to.equal(1);
  });
  it("负数报错", function() {
    var fn = function() {
      sqrt(-1);
    };
    expect(fn).to.throw();
  });
  it("null报错", function() {
    var fn = function() {
      sqrt(null);
    };
    expect(fn).to.throw();
  });
  it("undefined报错", function() {
    var fn = function() {
      sqrt(undefined);
    };
    expect(fn).to.throw();
  });
  it("true报错", function() {
    var fn = function() {
      sqrt(true);
    };
    expect(fn).to.throw();
  });
  it("'a'报错", function() {
    var fn = function() {
      sqrt('a');
    };
    expect(fn).to.throw();
  });
  it("对象报错", function() {
    var fn = function() {
      sqrt({});
    };
    expect(fn).to.throw();
  });
});
