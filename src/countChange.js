var countChange = function(a) {
  var denomination = function(kind) {
    switch(kind) {
      case 1:
        return 1;
      case 2:
        return 5;
      case 3:
        return 10;
      case 4:
        return 25;
      case 5:
        return 50;
    }
  }
  var cc = function(n, a) {
    if (a === 0) {
      return 1;
    }
    if (a < 0) {
      return 0;
    }
    if (n === 0) {
      return 0;
    }
    return cc(n - 1, a) + cc(n, a - denomination(n))
  }
  return cc(5, a);
}

module.exports = countChange;
