const map = transform => source => (start, sink) => {
  if (start !== 0) return;
  source(0, (t, d) => {
    if (t === 1) sink(t, transform(d));
    else sink(t, d);
  });
};

module.exports = map;
