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

var listRef = function(items, n) {
  if (n === 0) {
    return car(items);
  }
  return listRef(cdr(items), n - 1);
}

var length = function(items) {
  if (cdr(items) === false) {
    return 1;
  }
  return 1 + length(cdr(items));
}
module.exports = {
  list: list,
  equalList: equalList,
  listRef: listRef,
  length: length
}
