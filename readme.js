/**
 * callbag-map
 * -----------
 *
 * Callbag operator that applies a transformation on data passing through it.
 * Works on either pullable or listenable sources.
 *
 * `npm install callbag-map`
 *
 * Example:
 *
 *     const fromIter = require('callbag-from-iter');
 *     const iterate = require('callbag-iterate');
 *     const map = require('callbag-map');
 *
 *     const source = map(x => x * 0.1)(fromIter([10,20,30,40]));
 *
 *     iterate(x => console.log(x))(source); // 1
 *                                           // 2
 *                                           // 3
 *                                           // 4
 */

const map = f => source => (start, sink) => {
  if (start !== 0) return;
  source(0, (t, d) => {
    sink(t, t === 1 ? f(d) : d)
  });
};

module.exports = map;
