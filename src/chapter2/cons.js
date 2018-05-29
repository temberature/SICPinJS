var gcd = require("../gcd");

var cons = function(a, b) {
  var dispatch = function(m) {
    if (m === 0) {
      return a;
    } else if (m === 1) {
      return b;
    }
  };
  return dispatch;
};
var car = function(d) {
  // 最好能判断闭包函数名
  return (typeof d === 'function' && d.name === 'dispatch') ? d(0) : null;
};
var cdr = function(d) {
  return (typeof d === 'function' && d.name === 'dispatch') ? d(1) : null;
};

module.exports = {
  cons: cons,
  car: car,
  cdr: cdr
};
