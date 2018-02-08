var map = function map(f) {
  return function(source) {
    return function(start, sink) {
      if (start !== 0) return;
      source(0, function(t, d) {
        sink(t, t === 1 ? f(d) : d);
      });
    };
  };
};

module.exports = map;
