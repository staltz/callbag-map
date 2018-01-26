# callbag-map

Callbag operator that applies a transformation on data passing through it. Works on either pullable or listenable sources.

`npm install callbag-map`

## example

```js
const fromIter = require('callbag-from-iter');
const iterate = require('callbag-iterate');
const map = require('callbag-map');

const source = map(x => x * 0.1)(fromIter([10,20,30,40]));

source(0, iterate(x => console.log(x))); // 1
                                         // 2
                                         // 3
                                         // 4
```
