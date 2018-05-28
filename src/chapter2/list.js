var cons = require("./cons").cons;
var car = require("./cons").car;
var cdr = require("./cons").cdr;

var list = function() {
  var a = arguments;
  if (a.length < 2) {
    return a[0];
  }
  return cons(a[0], list.apply(undefined, [].slice.call(a, 1)))
};

var equalList = function(a, b) {
  if (a === b) {
    return true;
  }
  return car(a) === car(b) ? equalList(cdr(a), cdr(b)) : false;
}

module.exports = {
  list: list,
  equalList: equalList
}
