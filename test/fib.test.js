var expect = require("chai").expect;
var fib = require("../src/fib");

describe("fib", function() {
  it("fib(0)===0", function() {
    var r = fib(0);
    expect(r).to.equal(0);
  });
  it("fib(1)===1", function() {
    var r = fib(1);
    expect(r).to.equal(1);
  });
  it("fib(2)===1", function() {
    var r = fib(2);
    expect(r).to.equal(1);
  });
  it("fib(3)===2", function() {
    var r = fib(3);
    expect(r).to.equal(2);
  });
  it("小数报错", function() {
    var fn = function() {
      fib(3.2);
    };
    expect(fn).to.throw();
  });
  it("负数报错", function() {
    var fn = function() {
      fib(-1);
    };
    expect(fn).to.throw();
  });
  it("null报错", function() {
    var fn = function() {
      fib(null);
    };
    expect(fn).to.throw();
  });
  it("undefined报错", function() {
    var fn = function() {
      fib(undefined);
    };
    expect(fn).to.throw();
  });
  it("true报错", function() {
    var fn = function() {
      fib(true);
    };
    expect(fn).to.throw();
  });
  it("'a'报错", function() {
    var fn = function() {
      fib("a");
    };
    expect(fn).to.throw();
  });
  it("对象报错", function() {
    var fn = function() {
      fib({});
    };
    expect(fn).to.throw();
  });
});
