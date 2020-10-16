import { Callbag } from 'callbag';

export default function map<I, O, TB>(
  f: (d: I) => O,
): (source: Callbag<TB, I>) => Callbag<TB, O>;
