var expect = require("chai").expect;
var factorial = require("../src/factorial");

describe("factorial", function() {
  it("factorial(1)===1", function() {
    var r = factorial(1);
    expect(r).to.equal(1);
  });
  it("factorial(0)===0", function() {
    var r = factorial(0);
    expect(r).to.equal(0);
  });
  it("factorial(2)===2", function() {
    var r = factorial(2);
    expect(r).to.equal(2);
  });
  it("factorial(3)===6", function() {
    var r = factorial(3);
    expect(r).to.equal(6);
  });
  it("小数报错", function() {
    var fn = function() {
      factorial(3.2);
    };
    expect(fn).to.throw();
  });
  it("负数报错", function() {
    var fn = function() {
      factorial(-1);
    };
    expect(fn).to.throw();
  });
  it("null报错", function() {
    var fn = function() {
      factorial(null);
    };
    expect(fn).to.throw();
  });
  it("undefined报错", function() {
    var fn = function() {
      factorial(undefined);
    };
    expect(fn).to.throw();
  });
  it("true报错", function() {
    var fn = function() {
      factorial(true);
    };
    expect(fn).to.throw();
  });
  it("'a'报错", function() {
    var fn = function() {
      factorial('a');
    };
    expect(fn).to.throw();
  });
  it("对象报错", function() {
    var fn = function() {
      factorial({});
    };
    expect(fn).to.throw();
  });
});
